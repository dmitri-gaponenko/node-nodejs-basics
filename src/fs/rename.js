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

const rename = async () => {
  const oldName = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newName = path.join(__dirname, 'files', 'properFilename.md');

  if (!(await isExist(oldName)) || await isExist(newName)) {
    throw new Error('FS operation failed');
  }

  await fsPromises.rename(oldName, newName);
  console.log('File renamed');
};

await rename();