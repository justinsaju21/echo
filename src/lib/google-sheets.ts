import { google } from "googleapis";

export async function appendToSheet(data: any) {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
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
