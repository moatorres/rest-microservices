const app = require('./src/app')
const dotenv = require('dotenv')
const chalk = require('chalk')

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(
    `${chalk.blue('Vanilla Front-end App running')} in ${chalk.redBright(
      process.env.NODE_ENV
    )} mode on ` +
      `${chalk.green('http://' + process.env.HOST + ':' + process.env.PORT)}`
  )
})
