import { useState, useEffect } from 'react';
import socket from '../socket/tello';

const useDroneStatus = () => {
  const [status, updateStatus] = useState('DISCONNECTED');

  useEffect(() => {
    socket.on('status', updateStatus);
  }, [status]);

  return status;
}

export default useDroneStatus;