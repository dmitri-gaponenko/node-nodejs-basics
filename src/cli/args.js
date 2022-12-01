const parseArgs = () => {
  console.log(
    process.argv
      .slice(2)
      .map((arg) => arg.slice(0, 2) === '--' ? `${arg.slice(2)} is` : `${arg},`)
      .join(' ')
      .slice(0, -1)
  );
};

parseArgs();
