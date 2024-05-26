import { SET_COUNTDOWN_VALUES } from "../actionTypes";

const initialValue = {
  hours: null,
  minutes: null,
  seconds: null,
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
