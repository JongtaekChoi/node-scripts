#!/usr/bin/env node
import { exec } from "child_process";

function main() {
  const args = process.argv.slice(2);
  const [ timeout, phrase ] = args;
  setTimeout(() => {
    const command = `say ${phrase || "hello!"}`;
    console.log(command);
    exec(command);
    process.exit();
  }, parseInt(timeout) * 1000);
}

main();