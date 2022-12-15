import fsPromises from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const list = async () => {
//   const filesFolderPath = path.join(__dirname, 'files');
//   const filesFolder = await fsPromises.readdir(filesFolderPath, { withFileTypes: true });
//   for (const file of filesFolder) {
//     console.log(file.name);
//   }
// };

const list = async () => {
  const filesFolderPath = path.join(__dirname, 'files');
  try {
    const filesFolder = await fsPromises.readdir(filesFolderPath);
    console.log(filesFolder);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();