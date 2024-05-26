import { SET_COUNTDOWN_VALUES } from "../actionTypes";

export const setCountdownValues = (hours, minutes, seconds) => ({
  type: SET_COUNTDOWN_VALUES,
  payloadHours: hours,
  payloadMinutes: minutes,
  payloadSeconds: seconds,
});
