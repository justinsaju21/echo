import { google } from "googleapis";

/**
 * Sanitizes the private key from environment variables.
 * Handles multiple formats:
 * 1. Raw PEM with real newlines (ideal)
 * 2. PEM with literal \n escape sequences (common in env vars)
 * 3. Base64-encoded PEM (when the entire PEM is base64'd)
 * 4. JSON credential file pasted as string
 */
function getPrivateKey(): string {
    let key = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").trim();

    // Strip surrounding quotes if present
    key = key.replace(/^["']([\s\S]*)["']$/, "$1");

    // Check if key is entirely Base64 (no PEM headers present)
    if (!key.includes("-----BEGIN")) {
        try {
            const decoded = Buffer.from(key, "base64").toString("utf-8");
            if (decoded.includes("-----BEGIN")) {
                key = decoded;
            }
        } catch (e) {
            // Not valid base64, continue with raw value
        }
    }

    // Check if key is a JSON credential file
    if (key.startsWith("{")) {
        try {
            const json = JSON.parse(key);
            if (json.private_key) {
                key = json.private_key;
            }
        } catch (e) {
            // Not valid JSON
        }
    }

    // Replace literal \n with real newlines
    key = key.replace(/\\n/g, "\n");

    // Validate the key has proper PEM structure
    if (!key.includes("-----BEGIN PRIVATE KEY-----")) {
        throw new Error(
            "Invalid private key format. The key must be a valid PEM private key."
        );
    }

    return key;
}

export async function appendToSheet(data: any) {
    try {
        if (
            !process.env.GOOGLE_SHEETS_CLIENT_EMAIL ||
            !process.env.GOOGLE_SHEETS_PRIVATE_KEY
        ) {
            throw new Error(
                "Missing Google Sheets credentials in environment variables."
            );
        }

        const client_email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL.trim().replace(
            /^["'](.*)["']$/,
            "$1"
        );

        const private_key = getPrivateKey();

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
        const spreadsheetId =
            process.env.GOOGLE_SHEETS_SPREADSHEET_ID ||
            "1X8FoHiuP0usHV_au-1eJ_JJHqPJzWGaYH-DL3QM2S0k";
        const range = "Sheet1!A:A";

        const domainsString = Array.isArray(data.domains)
            ? data.domains.join(", ")
            : data.domains;

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
            data.links,
            data.hours,
            data.reason,
            data.projectExp,
            data.leadershipInterest,
            new Date().toISOString(),
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
