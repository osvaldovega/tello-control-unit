import { useState, useEffect } from 'react';
import socket from '../socket/tello';

const useDroneVideoFeed = () => {
  const [feed, updateFeed] = useState([]);

  useEffect(() => {
    socket.on('video', updateFeed);
  }, [feed]);

  return feed;
}

export default useDroneVideoFeed;