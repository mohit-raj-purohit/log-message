// logger.ts

type LogFunction = (...args: any[]) => void;

interface LoggerOptions {
    shouldDisableNativeLogs: boolean;
}

interface Logger {
    info: LogFunction;
    warn: LogFunction;
    error: LogFunction;
    log: LogFunction;
}

const noop: LogFunction = () => {};

const createLogger = ({ shouldDisableNativeLogs }: LoggerOptions): Logger => {
    if (shouldDisableNativeLogs) {
        return {
            info: noop,
            warn: noop,
            error: noop,
            log: noop,
        };
    } else {
        return {
            info: console.info.bind(console),
            warn: console.warn.bind(console),
            error: console.error.bind(console),
            log: console.log.bind(console),
        };
    }
};

export const traceline = (options: LoggerOptions): Logger => createLogger(options);
