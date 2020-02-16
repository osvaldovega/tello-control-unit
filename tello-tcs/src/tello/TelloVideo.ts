import throttle from 'lodash.throttle';

import Tello from './Tello';
import {
  DRONE_PORT_VIDEO,
  MESSAGE,
  VIDEO,
} from '../utils/constants';

class TelloVideo extends Tello {
  private ioSocket: SocketIO.Server | any = '';

  constructor(socket: any) {
    super(DRONE_PORT_VIDEO);

    this.ioSocket = socket;
    this.setListener();
  }

  private setListener() {
    this.socketConnection.on(MESSAGE, throttle((message: Buffer) => {
      console.log(`Response => ${message}`);
      this.ioSocket.emit(VIDEO, message);
    }, 100));
  }
}

export default TelloVideo;
