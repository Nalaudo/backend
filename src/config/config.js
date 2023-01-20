require('dotenv').config()
const yargs = require('yargs/yargs')(process.argv.slice(0))
const ARGS = yargs.argv
const PORT = ARGS._[2] || 8080
const MONGO_CONNECTION = process.env.MONGO_CONNECTION
const SECRET = process.env.SECRET
const INFO = {
    platform: process.platform,
    version: process.version,
    rss: process.memoryUsage().rss,
    path: __dirname,
    pid: process.pid,
    folder: process.cwd()
}

module.exports = {
    ARGS,
    PORT,
    MONGO_CONNECTION,
    SECRET,
    INFO
}