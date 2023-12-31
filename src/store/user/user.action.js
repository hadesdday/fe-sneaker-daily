import { createAction } from "../../utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const socialAuthSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SOCIAL_AUTH_SUCCESS, user);

export const socialAuthFailed = (error) =>
  createAction(USER_ACTION_TYPES.SOCIAL_AUTH_FAILED, error);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
  });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const logOutStart = () => createAction(USER_ACTION_TYPES.LOG_OUT_START);

export const logOutSuccess = () =>
  createAction(USER_ACTION_TYPES.LOG_OUT_SUCCESS);

export const logOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.LOG_OUT_FAILED, error);
