import { LoggerService } from "@nestjs/common";
import * as chalk from "chalk";

type ChalkColor = chalk.BackgroundColorName | chalk.ForegroundColorName;

interface CustomLoggerOptions {
    stringify?: boolean;
    color?: ChalkColor;
}

interface CustomLogger {
    log(message: string, tag?: string): void;
    sLog(message: Record<string, any>, tag?: string, color?: ChalkColor): void;
    error(message: string, trace?: string, tag?: string): void;
    warn(message: string, tag?: string): void;
    debug(message: any, tag?: string): void;
    verbose(message: string, tag?: string, extraTag?: string): void;
}

declare class CustomLogger implements LoggerService {
    constructor(context?: any);
}

export { CustomLogger, CustomLoggerOptions };

export type NonEmptyArray<T> = [T, ...T[]];

export enum NodeEnvironment {
    Local = "local",
    Dev = "dev",
    Staging = "staging",
    Production = "prod"
}

export interface MongoDbConnectionArgs {
    connOptions?: Record<string, boolean>;
    connString?: string;
    logger?: CustomLogger;
    logAll?: boolean;
}
