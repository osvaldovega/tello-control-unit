import { useState, useEffect } from 'react';
import socket from '../socket/tello';

const useDroneSendCommand = () => {
  const [command, updateCommand] = useState('');

  useEffect(() => {
    socket.emit('command', command);
  }, [command]);

  return updateCommand;
}

export default useDroneSendCommand;