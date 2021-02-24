const { exec } = require("child_process");

const args = process.argv.slice(2);
const [ timeout, phrase ] = args;
setTimeout(() => {
  const command = `say ${phrase || "hello!"}`;
  console.log(command);
  exec(command);
  process.exit();
}, timeout * 1000);