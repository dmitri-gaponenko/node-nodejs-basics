import fsPromises from 'fs/promises';
import { constants } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isExist = async (filepath) => {
  try {
    await fsPromises.access(filepath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  if (!(await isExist(filePath))) {
    throw new Error('FS operation failed');
  }

  const contents = await fsPromises.readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
};

await read();