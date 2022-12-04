import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const stream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'), 'utf-8');
  process.stdin.pipe(stream);
  console.log(`Please enter text (press 'ctrl + c' to exit):\n`);
};

await write();