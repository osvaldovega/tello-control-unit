import { useState, useEffect } from 'react';
import socket from '../socket/tello';

const useDroneState = () => {
  const [state, updateState] = useState([]);

  useEffect(() => {
    socket.on('state', updateState);
  }, [state]);

  return state;
}

export default useDroneState;