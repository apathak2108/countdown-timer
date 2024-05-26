import { SET_COUNTDOWN_VALUES } from "../actionTypes";

const initialValue = {
  hours: '00',
  minutes: '00',
  seconds: '00',
};

export const setCountdownValuesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_COUNTDOWN_VALUES:
      return {
        ...state,
        hours: action?.payloadHours,
        minutes: action?.payloadMinutes,
        seconds: action?.payloadSeconds,
      };
    default:
      return state;
  }
};
