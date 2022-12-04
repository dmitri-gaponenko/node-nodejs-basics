import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const stream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
  let data = '';

  stream.on('data', chunk => data += chunk);
  stream.on('end', () => process.stdout.write(data + '\n'));
};

await read();