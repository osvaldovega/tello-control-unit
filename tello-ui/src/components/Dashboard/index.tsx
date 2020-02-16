import React from 'react';
// import useDroneStatus from '../../hooks/useDroneStatus';
// import useDroneState from '../../hooks/useDroneState';
// import useDroneSendCommand from '../../hooks/useDroneSendCommand';
// import StyleText from '../../shared/StyleText';
import MainLayer from '../MainLayer';
import Box from '../../shared/Box';
import ModuleA from '../../shared/ModuleA';
import ModuleB from '../../shared/ModuleB';
import ModuleStatus from '../../shared/ModuleStatus';
import Button from '../../shared/Button';
import style from './style.module.scss';

const Dashboard: React.SFC = (): JSX.Element => {
  // const [text, updateText] = useState('');
  // const status = useDroneStatus();
  // const state = useDroneState();
  // const updateCommand = useDroneSendCommand();

  // const onClick = () => {
  //   updateCommand(text);
  // }

  // const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
  //   updateText(e.currentTarget.value);
  // }

  return (
    <MainLayer>

      <Box title="Connection" className={style.boxStatus}>
        <ModuleStatus title="to server" data="offline" status={false} />
        <ModuleStatus title="to drn" data="online" status={true} />
      </Box>

      <Box title="Network">
        <ModuleA title="drn ssid" data="Tello-SD34E"/>
        <ModuleA title="drn id" data="A1-"/>
        <ModuleA title="drn status" data="N/A"/>
      </Box>

      <Box title="Input System">
        <div className={style.container}>
          <ModuleB title="drn status" data="ON Ground"/>
          <div className={style.row}>
            <Button text="Take Off" type="primary" />
            <Button text="Land" type="secondary" />
          </div>
          <Button text="!! Emergency !!" type="tertiary" />
        </div>
      </Box>

    </MainLayer>
  );
}

export default Dashboard;
