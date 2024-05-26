import { SET_COUNTDOWN_VALUES, IS_MODAL_OPEN } from "../actionTypes";

export const setCountdownValues = (hours, minutes, seconds) => ({
  type: SET_COUNTDOWN_VALUES,
  payloadHours: hours,
  payloadMinutes: minutes,
  payloadSeconds: seconds,
});

export const isModalOpen = () => ({
  type: IS_MODAL_OPEN,
});
