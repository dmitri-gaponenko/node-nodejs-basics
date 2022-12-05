import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  console.log(`The number of CPU's: ${cpus().length}`);
  const workers = [];
  let start = 10;

  cpus().map((cpu) => {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, 'worker.js'), {
          workerData: start++,
        });

        worker.on('message', (data) => resolve({ status: 'resolved', data }));
        worker.on('error', () => resolve({ status: 'error', data: null }));
      })
    );
  });

  Promise.all(workers).then((result) => console.log(result));
};

await performCalculations();
