// logger.ts

type LogFunction = (...args: any[]) => void;

interface Logger {
    info: LogFunction;
    warn: LogFunction;
    error: LogFunction;
    log: LogFunction;
}

const noop: LogFunction = () => {};

const createLogger = (isProduction: () => boolean): Logger => {
    if (isProduction()) {
        return {
            info: noop,
            warn: noop,
            error: noop,
            log: noop,
        };
    } else {
        return {
            info: console.info,
            warn: console.warn,
            error: console.error,
            log: console.log,
        };
    }
};

export const createLoggerUtil = (isProduction: () => boolean) => createLogger(isProduction);
