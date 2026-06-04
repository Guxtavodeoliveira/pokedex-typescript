import { TerminalController } from "./controllers/TerminalController";


async function main(): promise<void>{
    const controller = new TerminalController();
    await controller.executar();
}

main();