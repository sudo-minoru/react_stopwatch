export enum TimerActionType {
  START = 'TIMER/START',
  PAUSE = 'TIMER/PAUSE',
  RESET = 'TIMER/RESET',
  TICK = 'TIMER/TICK',
  ADD = 'TIMER/ADD',
}

export interface TimerAction {
  type: TimerActionType;
  timerId?: NodeJS.Timer;
  time?: number;
}

export const start = (timerId: NodeJS.Timer): TimerAction => ({
  type: TimerActionType.START,
  timerId,
});

export const pause = (): TimerAction => ({
  type: TimerActionType.PAUSE,
});

export const reset = (): TimerAction => ({
  type: TimerActionType.RESET,
});

export const tick = (): TimerAction => ({
  type: TimerActionType.TICK,
});

export const add = (time: number): TimerAction => ({
  time,
  type: TimerActionType.ADD,
});
