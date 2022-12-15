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

// const remove = async () => {
//   const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

//   if (!(await isExist(fileToRemove))) {
//     throw new Error('FS operation failed');
//   }

//   await fsPromises.rm(fileToRemove, { recursive: true, force: true });
// };

const remove = async () => {
  const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fsPromises.rm(fileToRemove);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();