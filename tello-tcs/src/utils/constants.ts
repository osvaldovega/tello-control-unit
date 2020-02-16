export const MESSAGE: string = 'message';
export const ERROR: string = 'error';
export const CONNECTION: string = 'connection';
export const COMMAND: string = 'command';
export const STATUS: string = 'status';
export const STATE = 'state';
export const VIDEO = 'video';

export const DRONE_IP_ADDRESS = '192.168.10.1';
export const DRONE_PORT_COMMANDS = 8889;
export const DRONE_PORT_STATE = 8890;
export const DRONE_PORT_VIDEO = 11111;
export const PROTOCOL_UDP = 'udp4';

export enum COMMANDS {
  state = 'state',
  init = 'init',
  acceleration = 'acceleration?',
  attitude = 'attitude?',
  back = 'back',
  baro = 'baro?',
  battery = 'battery?',
  ccw = 'ccw',
  command = 'command',
  cw = 'cw',
  down = 'down',
  flip = 'flip',
  forward = 'forward',
  go = 'go',
  height = 'height?',
  land = 'land',
  left = 'left',
  right = 'right',
  speed = 'speed?',
  streamoff = 'streamoff',
  streamon = 'streamon',
  takeoff = 'takeoff',
  temp = 'temp?',
  time = 'time?',
  tof = 'tof?',
  up = 'up',
  wifi = 'wifi?',
}
