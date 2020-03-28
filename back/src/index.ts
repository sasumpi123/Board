import ApplicationServer from './classes/ApplicationServer';

async function main(): Promise<void> {
    const appServer: ApplicationServer = new ApplicationServer();
    appServer.initialize();
    appServer.open(8000);
}

main();