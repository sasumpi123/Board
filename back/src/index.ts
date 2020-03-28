import ApplicationServer from './classes/ApplicationServer';
import { connectDB } from './utils/mongodb';

async function main(): Promise<void> {
    const appServer: ApplicationServer = new ApplicationServer();
    appServer.initialize();
    appServer.open(8000);
    connectDB();
}

main();