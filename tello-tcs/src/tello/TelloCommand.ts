import wait from 'waait';
import throttle from 'lodash.throttle';

import commandDelays from '../utils/commandDelays';
import Tello from './Tello';
import { DRONE_PORT_COMMANDS, MESSAGE } from '../utils/constants';

class TelloCommand extends Tello {
  private newCommand: Buffer = Buffer.from('');

  constructor() {
    super(DRONE_PORT_COMMANDS);

    this.setListener();
  }

  private setListener() {
    this.socketConnection.on(MESSAGE, throttle((message: Buffer) => {
      console.log(`Response => ${message.toString()}`);
    }, 100));
  }

  public async executeCommand(command: string) {
    this.newCommand  = Buffer.from(command);
    this.socketConnection.send(
      this.newCommand,
      0,
      this.newCommand.length,
      this.dronePort,
      this.droneIPAddress,
      (error: any): void => { if (error) console.log(error); }
    );
    await wait(commandDelays[command]);
  }
}

export default TelloCommand;
