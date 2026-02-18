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

        // Sanitize check
        if (!private_key.includes("-----BEGIN PRIVATE KEY-----")) {
            // Attempt Base64 decode
            try {
                const decoded = Buffer.from(private_key, 'base64').toString('utf-8');
                if (decoded.includes("-----BEGIN PRIVATE KEY-----")) {
                    private_key = decoded;
                }
            } catch (e) {
                // Ignore, proceed as raw
            }
        }

        // Cleanup:
        // 1. Remove outer quotes
        // 2. Unescape \n
        // 3. Fix missing newlines around headers if they were flattened to spaces
        private_key = private_key
            .replace(/^["'](.*)["']$/, '$1')
            .replace(/\\n/g, "\n");

        // If the key is one long line with spaces (common copy-paste error), fix it
        if (!private_key.includes("\n") && private_key.includes(" ")) {
            private_key = private_key
                .replace("-----BEGIN PRIVATE KEY-----", "-----BEGIN PRIVATE KEY-----\n")
                .replace("-----END PRIVATE KEY-----", "\n-----END PRIVATE KEY-----")
                .replace(/ /g, "\n"); // DANGEROUS: simple space replacement might be too aggressive if body has spaces? 
            // Actually PEM body shouldn't have spaces. But let's be safer:
            // A better approach for flattened keys:
            // match headers, and split the rest?
            // simplified:
            // private_key = private_key.split(String.raw`\n`).join('\n'); // already done by \\n replace
        }

        // Specific fix for "header space body space footer" pattern
        const header = "-----BEGIN PRIVATE KEY-----";
        const footer = "-----END PRIVATE KEY-----";
        if (private_key.includes(header) && private_key.includes(footer) && !private_key.includes("\n")) {
            const body = private_key.replace(header, "").replace(footer, "").trim().replace(/ /g, "\n");
            private_key = `${header}\n${body}\n${footer}`;
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
