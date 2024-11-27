/**
 * to be executed through the command line
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const mxg = process.stdin.read();

  if (mxg) {
    process.stdout.write(`Your name is: ${mxg}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
