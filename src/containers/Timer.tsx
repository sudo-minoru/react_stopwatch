import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { start, pause, reset, tick, add } from '../actions/timer';
import Timer from '../components/Timer';
import { TimerState } from '../reducer';

interface StateProps {
  time: number;
  running: boolean;
}

interface DispatchProps {
  start: () => void;
  pause: () => void;
  reset: () => void;
  tick: () => void;
  add: (time: number) => void;
}

const mapStateToProps = (state: TimerState): StateProps => ({
  time: state.time,
  running: state.running,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  start: () => {
    // ###############################################################
    //  tick を実行するタイマーを設定
    // ###############################################################

    const intervalID = setInterval(() => dispatch(tick()), 1000);

    return dispatch(start(intervalID));
  },
  pause: () => dispatch(pause()),
  reset: () => dispatch(reset()),
  tick: () => dispatch(tick()),
  add: time => dispatch(add(time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
