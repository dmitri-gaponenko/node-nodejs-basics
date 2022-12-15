import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFolderPath = path.join(__dirname, 'files');
const targetFolderPath = path.join(__dirname, 'files_copy');

const isExist = async (filepath) => {
  try {
    await fs.access(filepath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const copyDir = async (sourceDir, targetDir) => {
  const sourceFiles = await fs.readdir(sourceDir, { withFileTypes: true });
  for (const file of sourceFiles) {
    if (file.isDirectory()) {
      await fs.mkdir(path.join(targetDir, file.name), { recursive: true });
      await copyDir(
        path.join(sourceDir, file.name),
        path.join(targetDir, file.name)
      );
    } else {
      await fs.copyFile(
        path.join(sourceDir, file.name),
        path.join(targetDir, file.name)
      );
    }
  }
};

const copy = async () => {
  if (await isExist(targetFolderPath)) {
    throw new Error('FS operation failed');
  }
  // await fs.mkdir(targetFolderPath, { recursive: true });
  // await copyDir(sourceFolderPath, targetFolderPath);
  await Promise.all([fs.mkdir(targetFolderPath, { recursive: true }), copyDir(sourceFolderPath, targetFolderPath)]);
  console.log('Folder copied');
};

copy();
