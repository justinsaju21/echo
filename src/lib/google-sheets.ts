import { google } from "googleapis";

export async function appendToSheet(data: any) {
    try {
        if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL || !process.env.GOOGLE_SHEETS_PRIVATE_KEY) {
            throw new Error("Missing Google Sheets credentials in environment variables.");
        }

        // Aggressive sanitization for the private key to handle Vercel's env var quirks
        const client_email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
            .trim()
            .replace(/^["'](.*)["']$/, '$1');

        // ---------------------------------------------------------
        // Strategy 0: Base64 Decode Check (The "User pasted Base64" case)
        // ---------------------------------------------------------
        // If it looks like Base64 (no spaces, no headers, valid chars), try decoding first
        if (!private_key.includes("-----BEGIN PRIVATE KEY-----")) {
            try {
                const decoded = Buffer.from(private_key, 'base64').toString('utf-8');
                // If the decoded version looks like a key, use it!
                if (decoded.includes("-----BEGIN PRIVATE KEY-----")) {
                    console.log("DEBUG: Decoded Base64 private key");
                    private_key = decoded.trim();
                }
            } catch (e) {
                // Not base64, proceed
            }
        }

        // ---------------------------------------------------------
        // Strategy 1: Check if it's the full JSON content pasted in
        // ---------------------------------------------------------
        if (private_key.startsWith("{")) {
            try {
                const jsonKey = JSON.parse(private_key);
                if (jsonKey.private_key) {
                    private_key = jsonKey.private_key;
                    console.log("DEBUG: Extracted private_key from JSON env var");
                }
            } catch (e) {
                // Not valid JSON, continue
            }
        }

        // ---------------------------------------------------------
        // Strategy 2: Aggressive PEM Reconstruction
        // ---------------------------------------------------------
        // Goals:
        // 1. Remove all headers/footers
        // 2. Remove all existing line breaks, spaces, and escaped newlines
        // 3. Re-wrap cleanly

        // Remove outer quotes if present
        private_key = private_key.replace(/^["'](.*)["']$/, '$1');

        // Allow literally "null" or empty strings to fail gracefully later
        if (private_key.length < 50) {
            throw new Error("Private Key is too short or missing.");
        }

        // Strip headers and footers to isolate the Base64 body
        const body = private_key
            .replace(/-----BEGIN PRIVATE KEY-----/g, "")
            .replace(/-----END PRIVATE KEY-----/g, "")
            .replace(/\\n/g, "") // remove literal \n
            .replace(/\s+/g, ""); // remove all whitespace (newlines, spaces, tabs)

        // Reconstruct the PEM key
        // Note: GoogleAuth often accepts the body with just the headers and \n
        private_key = `-----BEGIN PRIVATE KEY-----\n${body}\n-----END PRIVATE KEY-----`;

        // ---------------------------------------------------------

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email,
                private_key,
            },
            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets",
            ],
        });

        const sheets = google.sheets({ version: "v4", auth });
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || "1X8FoHiuP0usHV_au-1eJ_JJHqPJzWGaYH-DL3QM2S0k";
        const range = "Sheet1!A:A";

        // Prepare row data
        // New Structure:
        // 1. Full Name
        // 2. Reg No
        // 3. Dept & Year
        // 4. Phone
        // 5. Email
        // 6. Selected Domains (Comma separated)
        // 7. Primary Domain
        // 8. Experience Level
        // 9. Skills
        // 10. Portfolio/Links
        // 11. Availability (Hours)
        // 12. Why ECHO?
        // 13. What have you built?
        // 14. Leadership Interest
        // 15. Timestamp

        const domainsString = Array.isArray(data.domains) ? data.domains.join(", ") : data.domains;

        const row = [
            data.fullName,
            data.regNo,
            data.deptYear,
            data.phone,
            data.email,
            domainsString,
            data.primaryDomain,
            data.experience,
            data.skills,
            data.links, // Single string input now
            data.hours,
            data.reason,
            data.projectExp, // "Describe something you built..."
            data.leadershipInterest,
            new Date().toISOString()
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [row],
            },
        });

        return true;
    } catch (error) {
        console.error("Google Sheets Error:", error);
        throw error;
    }
}
