import { Transform } from 'stream';

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().split('').reverse().join('') + '\n');
  },
});

const transform = async () => {
  process.stdin.pipe(uppercase).pipe(process.stdout);
  console.log(`Please enter text (press 'ctrl + c' to exit):\n`);
};

await transform();
