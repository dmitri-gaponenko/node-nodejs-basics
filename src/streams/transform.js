import { Transform } from 'stream';
import { EOL } from 'os';

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().split('').reverse().join('') + EOL);
  },
});

const transform = async () => {
  process.stdin.pipe(transformStream).pipe(process.stdout);
  console.log(`Please enter text (press 'ctrl + c' to exit):\n`);
};

await transform();
