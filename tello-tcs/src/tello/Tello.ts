import dgram from 'dgram';

import { DRONE_IP_ADDRESS, ERROR, PROTOCOL_UDP } from '../utils/constants';

class Tello {
  public socketConnection: dgram.Socket = dgram.createSocket(PROTOCOL_UDP);
  public dronePort: number = 0;
  public droneIPAddress: string = '';

  constructor(dronePort: number) {
    this.dronePort = dronePort;
    this.socketConnection.bind(this.dronePort);
    this.droneIPAddress = DRONE_IP_ADDRESS;
    this.setOnError();
  }

  public setOnError() {
    this.socketConnection.on(ERROR, (error: Buffer) => {
      if (error) {
        console.log(error);
        this.socketConnection.close();
      }
    });
  }
}

export default Tello;
