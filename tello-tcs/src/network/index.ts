// tslint:disable-next-line: no-var-requires
const wifi = require('node-wifi');

interface INetwork {
  ssid: string;
  signal_level: number;
  quality: number;
  security: string;
  security_flags: [];
  mac: string;
  bssid: string;
  channel: number;
  frequency: number;
}

wifi.init({ iface: null });

/**
 * Scan for all WiFi networks
 * Search for the drone network to see if it is available
 * return the drone current network
 */
const scanForDroneNetwork = async () => {
  const networks = await wifi.scan();

  const droneNetwork = networks.find((network: INetwork)  => network.ssid === process.env.DRONE_SSID);

  if (!droneNetwork) throw new Error(`No ${process.env.DRONE_SSID} network found, please check if device is on`);

  console.log(`Network ${droneNetwork.ssid} found... `);
  return droneNetwork;
};

/**
 * Connect to the provided drone ssid or drone WiFi network
 * @param {Object} ssid - String with the network name to connect (ssid)
 */
const connectToDroneNetwork = async ({ ssid }: INetwork) => {
  try {
    await wifi.connect({ ssid });
    console.log(`Connection stablished with ${ssid}`);
  } catch (error) {
    throw new Error(`Failed connecting to network ${ssid}`);
  }
};

/**
 * Display information about the current WiFi connection
 */
const getCurrentConnection = async () => {
  const connection = await wifi.getCurrentConnections();

  if (!connection.length) throw new Error('No WiFi networks found, check your WiFi connection!');

  const connectionDetails = connection[0];
  console.log('Current connection details retrived...');
  console.log(`
  SSID: ${connectionDetails.ssid}
  Signal Level: ${connectionDetails.signal_level}dB
  Quality: ${connectionDetails.quality}%
  MAC Address: ${connectionDetails.mac}
  Channel: ${connectionDetails.channel}
  Frequency: ${connectionDetails.frequency} MHz
  `);
  return connectionDetails;
};

/**
 * Init function that scan WiFi networks and connection to Tello device
 * if found it, if it is already connected then return the current network
 */
const init = async () => {
  let currentNetwork = null;

  currentNetwork = await getCurrentConnection();
  if (currentNetwork.ssid === process.env.DRONE_SSID) return currentNetwork;

  const network = await scanForDroneNetwork();
  await connectToDroneNetwork(network);
  currentNetwork = await getCurrentConnection();

  return currentNetwork;
};

export default {
  init,
};
