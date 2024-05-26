import { IS_MODAL_OPEN, SET_COUNTDOWN_VALUES } from "../actionTypes";

const initialValue = {
  hours: "00",
  minutes: "00",
  seconds: "00",
  isModal: false,
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
    case IS_MODAL_OPEN:
      return {
        ...state,
        isModal: !state.isModal,
      };
    default:
      return state;
  }
};
