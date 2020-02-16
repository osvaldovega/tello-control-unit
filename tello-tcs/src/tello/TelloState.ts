import throttle from 'lodash.throttle';

import Tello from './Tello';
import { DRONE_PORT_STATE, MESSAGE, STATE } from '../utils/constants';

class TelloState extends Tello {
  private ioSocket: SocketIO.Server | any = '';

  constructor(socket: any) {
    super(DRONE_PORT_STATE);

    this.ioSocket = socket;
    this.setListener();
  }

  private setListener() {
    this.socketConnection.on(MESSAGE, throttle((message: Buffer) => {
      this.ioSocket.emit(STATE, message.toString());
    }, 100));
  }
}

export default TelloState;
