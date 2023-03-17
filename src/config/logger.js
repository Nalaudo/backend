import winston from 'winston';

const LEVEL = Symbol.for('level');

function filterOnly(level) {
    return winston.format(function (info) {
        if (info[LEVEL] === level) {
            return info;
        }
    })();
}
const logger = winston.createLogger({
    level: "warn",
    transports: [
        new winston.transports.Console({ level: "info", format: filterOnly('info') }),
        new winston.transports.File({ level: "warn", format: filterOnly('warn'), filename: 'src/logs/warn.log' }),
        new winston.transports.File({ level: "error", format: filterOnly('error'), filename: 'src/logs/error.log' })
    ]
})

export default logger