import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const req = createRequire(import.meta.url);
const XLSX = req('xlsx');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'NeoPAT_MRU_Hackathon Round 1 Report.xlsx');
try {
    const wb = XLSX.readFile(filePath);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

    if (data.length > 1) {
        const hdrs = data[0].map(String);
        const body = data.slice(1).filter(r => r.some(c => c !== undefined && c !== ''));

        fs.writeFileSync(
            path.join(__dirname, 'src', 'leaderboardData.json'),
            JSON.stringify({ headers: hdrs, rows: body }, null, 2)
        );
        console.log("Successfully extracted leaderboard data to src/leaderboardData.json");
    } else {
        console.log("Excel file appears empty or unreadable.");
    }
} catch (err) {
    console.error("Error reading Excel file:", err);
}
