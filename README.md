# Club Recruitment Website

A modern, responsive recruitment website built with Next.js, Tailwind CSS, and Google Sheets integration.

## Features
- **Modern UI**: Dark mode, smooth animations (Framer Motion), clean component structure.
- **Application Form**: Detailed form with validation (Zod) and "Proof of Work" link support.
- **Google Sheets Backend**: Automatically saves responses to a Google Sheet.
- **Responsive**: Fully optimized for mobile and desktop.

## Setup Guide

### 1. Google Cloud Setup
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a new project (e.g., "Club-Recruitment").
3.  Search for "Google Sheets API" and enable it.
4.  Go to **IAM & Admin > Service Accounts**.
5.  Click **Create Service Account**, give it a name (e.g., "sheets-editor").
6.  Skip the role assignment (optional) and click **Done**.
7.  Click on the newly created service account email.
8.  Go to the **Keys** tab -> **Add Key** -> **Create new key** -> **JSON**.
9.  This will download a JSON file. **Keep this safe!**

### 2. Google Sheet Setup
1.  Create a new Google Sheet.
2.  Share the sheet with the **client_email** found in your downloaded JSON file (give "Editor" access).
3.  Copy the Sheet ID from the URL (the string between `/d/` and `/edit`).

### 3. Environment Variables
1.  Rename `.env.example` to `.env.local`.
2.  Fill in the values from your JSON key file and Sheet ID:
    ```env
    GOOGLE_SHEETS_SPREADSHEET_ID=1X8FoHiuP0usHV_au-1eJ_JJHqPJzWGaYH-DL3QM2S0k
    GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account_email
    GOOGLE_SHEETS_PRIVATE_KEY="your_private_key_including_newlines"
    ```

### 4. Running Locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

1.  Push your code to GitHub.
2.  Import the project in [Vercel](https://vercel.com).
3.  Add the Environment Variables in the Vercel dashboard.
    -   **Note**: For `GOOGLE_PRIVATE_KEY`, ensure you copy the entire key string. The code is set up to handle newline characters correctly.

## Project Structure
- `src/components`: UI components (Hero, Navbar, Form, etc.)
- `src/lib`: Helper functions (Google Sheets logic)
- `src/app/api`: Backend API routes
