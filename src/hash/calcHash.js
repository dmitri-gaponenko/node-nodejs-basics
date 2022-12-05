import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
  const hash = createHash('sha256');
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const contents = await fsPromises.readFile(filePath, { encoding: 'utf8' });
  
  console.log(hash.update(contents).digest('hex'));
};

await calculateHash();
