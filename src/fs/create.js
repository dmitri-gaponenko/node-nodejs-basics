import { access, writeFile } from 'fs/promises';
import { constants } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isExist = async (filepath) => {
  try {
    await access(filepath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const create = async () => {
  const filepath = path.join(__dirname, 'files', 'fresh.txt');
  if (await isExist(filepath)) {
    throw new Error('FS operation failed');
  } else {
    await writeFile(filepath, 'I am fresh and young');
    console.log('File created');
  }
};

await create();
