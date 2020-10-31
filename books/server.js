const app = require('./src/app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const chalk = require('chalk')

dotenv.config()

const { DB_URI } = require('./src/config')

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(
    `${chalk.blue('Books API running')} in ${chalk.redBright(
      process.env.NODE_ENV
    )} mode on ` +
      `${chalk.green('http://' + process.env.HOST + ':' + process.env.PORT)}`
  )
})
