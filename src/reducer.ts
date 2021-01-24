import { Reducer } from 'redux';
import { TimerAction, TimerActionType } from './actions/timer';

export interface TimerState {
  time: number;
  timerId?: NodeJS.Timer;
  running: boolean;
}

export const initialState: TimerState = { time: 0, running: false };

const timerReducer: Reducer<TimerState, TimerAction> = (
  state: TimerState = initialState,
  action: TimerAction,
): TimerState => {
  switch (action.type) {
    case TimerActionType.START:
      return {
        ...state,
        running: true,
        timerId: action.timerId,
      };
    case TimerActionType.PAUSE:
      clearInterval(state.timerId as NodeJS.Timer);
      return {
        ...state,
        running: false,
      };
    case TimerActionType.RESET:
      clearInterval(state.timerId as NodeJS.Timer);
      return {
        ...state,
        time: 0,
        running: false,
      };
    case TimerActionType.TICK:
      return {
        ...state,
        time: state.time + 1,
      };
    case TimerActionType.ADD:
      return {
        ...state,
        time: state.time + (action.time || 0),
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
};

export default timerReducer;
