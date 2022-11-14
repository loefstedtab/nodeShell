
const fs = require("fs");


module.exports = () => {

  process.stdin.on("data", (data) => {
  const variable = data.toString().split(" ");

  console.log(variable)
  if (variable[0] == 'cat'){
    fs.readFile('./', 'utf8', (err, file) => {
          console.log('Baloney')

    })
  } else { console.log('this shit is not working')}
})
}
