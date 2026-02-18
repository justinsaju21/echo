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

        let private_key = process.env.GOOGLE_SHEETS_PRIVATE_KEY!.trim();

        // Handle Base64 encoded key (to fix Vercel newline issues)
        if (!private_key.includes("-----BEGIN PRIVATE KEY-----")) {
            console.log("DEBUG: Attempting to decode Base64 private key");
            try {
                const decoded = Buffer.from(private_key, 'base64').toString('utf-8');
                if (decoded.includes("-----BEGIN PRIVATE KEY-----")) {
                    private_key = decoded;
                }
            } catch (e) {
                console.error("DEBUG: Failed to decode Base64 key");
            }
        }

        // Standard sanitization (just in case)
        private_key = private_key
            .replace(/^["'](.*)["']$/, '$1') // remove surrounding quotes
            .replace(/\\n/g, "\n");         // convert literal \n to real newlines

        // Final Verification
        if (!private_key.includes("-----BEGIN PRIVATE KEY-----")) {
            console.error("DEBUG: Private key missing header after processing");
        }

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
