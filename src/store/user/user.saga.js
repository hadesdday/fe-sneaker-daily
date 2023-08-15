import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  logOutFailed,
  logOutSuccess,
  signInFailed,
  signInSuccess,
  signUpFailed,
  signUpSuccess,
} from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

export function* socialAuthSuccess({ payload: { user } }) {
  yield put(signInSuccess(user));
}

export function* onSocialAuthSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SOCIAL_AUTH_SUCCESS, socialAuthSuccess);
}

export function* socialAuthFailed({ payload: { error } }) {
  yield put(signInFailed(error));
}

export function* onSocialAuthFailed() {
  yield takeLatest(USER_ACTION_TYPES.SOCIAL_AUTH_FAILED, socialAuthFailed);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    console.log("call api login here");
    const user = {
      email,
      password,
    };
    yield put(signInSuccess(user));
  } catch (error) {
    yield signInFailed(error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  console.log("do something after sign up here");
  //   yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signUpFailure(error) {
  yield put(signUpFailed(error));
}

export function* onSignUpFailed() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_FAILED, signUpFailure);
}

export function* signUpWithEmail({
  payload: { email, password, displayName },
}) {
  try {
    // const { user } = yield call(
    //   createAuthUserWithEmailAndPassword,
    //   email,
    //   password
    // );
    console.log("call api register here");
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpWithEmail);
}

export function* logOut() {
  try {
    // yield call(signOutUser);
    yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutFailed(error));
  }
}

export function* onLogOutStart() {
  yield takeLatest(USER_ACTION_TYPES.LOG_OUT_START, logOut);
}

export function* userSaga() {
  yield all([
    call(onSocialAuthSuccess),
    call(onSocialAuthFailed),
    call(onEmailSignInStart),
    call(onLogOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
