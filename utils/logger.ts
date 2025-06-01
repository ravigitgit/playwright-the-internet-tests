import * as fs from 'fs';

class Logger {
    static initialize(){
        fs.writeFileSync('./test-results/test.log', ''); // ✅ Clears log file
    }

    static getTimestamp() {
        return new Date().toISOString(); // ✅ ISO timestamp
    }

    static info(message){
        const logMessage = `[${this.getTimestamp()}] INFO: ${message}`;
        console.log(logMessage);
        fs.appendFileSync('./test-results/test.log', logMessage + '\n');
    }

    static error(message){
        const logMessage = `[${this.getTimestamp()}] ERROR: ${message}`;
        console.error(logMessage);
        fs.appendFileSync('./test-results/test.log', logMessage + '\n');
    }
}

export { Logger };