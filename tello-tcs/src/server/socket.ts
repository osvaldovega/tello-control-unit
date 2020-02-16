import { COMMAND, COMMANDS, CONNECTION, STATUS } from '../utils/constants';
import { TelloCommand, TelloState, TelloVideo } from '../tello';

const createConnection = async (ioServer: any) => {
  let commands: any = null;

  ioServer.on(CONNECTION, (socket: any) => {
    socket.on(COMMAND, (command: COMMANDS) => {
      if (command === 'init') {
        commands = new TelloCommand();
        // tslint:disable-next-line: no-unused-expression
        new TelloState(socket);
        // tslint:disable-next-line: no-unused-expression
        new TelloVideo(socket);
        commands.executeCommand('command');
      } else if (command !== 'init' && command !== 'state' && COMMANDS[command] && commands) {
        commands.executeCommand(COMMANDS[command]);
      } else {
        console.log(`Command ${command} not found...`);
      }
    });

    socket.emit(STATUS, 'CONNECTED');
  });
};

export default {
  createConnection,
};
