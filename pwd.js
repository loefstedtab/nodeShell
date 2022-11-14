//Output a prompt
module.exports = () => {
  process.stdout.write("prompt >");

  //The stdin 'data' event fires after a user types in a line
  process.stdin.on("data", (data) => {
    const pwd = data.toString().trim();
    if (pwd === "pwd") {
      process.stdout.write("Current directory: " + process.cwd());
      process.stdout.write("\nprompt > ");
    } 
  });
};
