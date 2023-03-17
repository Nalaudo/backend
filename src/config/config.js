import dotenv from 'dotenv'
import yargs from 'yargs'

dotenv.config()
yargs(process.argv.slice(0))

const ARGS = yargs.argv
const PORT = process.env.PORT || 8080
const MONGO_CONNECTION = process.env.MONGO_CONNECTION
const SECRET = process.env.SECRET

process.on('message', ({ msg }) => {
    if (msg == 'getInfo') {
        const INFO = {
            platform: process.platform,
            version: process.version,
            rss: process.memoryUsage().rss,
            path: process.argv[1],
            pid: process.pid,
            folder: process.cwd()
        }
        process.send({ INFO })
    }
})

export {
    ARGS,
    PORT,
    MONGO_CONNECTION,
    SECRET
}