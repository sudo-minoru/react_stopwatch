import React, { FC } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import Moment from 'react-moment';
import 'moment-timezone';

import './Timer.css';

export interface TimerProps {
  time?: number;
  start?: () => void;
  pause?: () => void;
  reset?: () => void;
  tick?: () => void;
  add?: (time: number) => void;
}

const Timer: FC<TimerProps> = ({
  time = 0,
  start = () => undefined,
  pause = () => undefined,
  reset = () => undefined,
  add = () => undefined,
}) => (
  <Card fluid>
    <Statistic className="number-board">
      <Statistic.Value>
        <Moment format="HH:mm:ss" unix tz="GMT">
          {time}
        </Moment>
      </Statistic.Value>
    </Statistic>
    <Card.Content>
      <div className="ui three buttons">
        <Button color="green" fluid onClick={start}>
          <Icon name="play" />
          スタート
        </Button>
        <Button color="grey" fluid onClick={pause}>
          <Icon name="pause" />
          ストップ
        </Button>
        <Button color="red" fluid onClick={reset}>
          <Icon name="stop" />
          リセット
        </Button>
      </div>
    </Card.Content>
    <Card.Content>
      <div className="ui two buttons">
        <Button color="grey" fluid onClick={() => add(-5 * 60)}>
          <Icon name="backward" />
          -5分
        </Button>
        <Button color="grey" fluid onClick={() => add(5 * 60)}>
          <Icon name="forward" />
          +5分
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default Timer;
