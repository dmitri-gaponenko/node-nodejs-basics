import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const input = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'), 'utf-8');
  const output = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
  const gzip = zlib.createGzip();

  pipeline(input, gzip, output, (err) => {
    if (err) {
      console.log(err);
    }
  });

  console.log('File compressed');
};

await compress();
