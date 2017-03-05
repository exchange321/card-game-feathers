/**
 * Created by Wayuki on 26-Feb-17.
 */
export default {
  Container: {
    notification: {
      open: false,
      message: '',
    },
  },
  App: {
  },
  SignUpPage: {
    credential: {
      email: '',
      password: '',
      confirmPassword: '',
      playerName: '',
      recaptcha: '',
    },
    processing: {
      processingSubmit: false,
    },
    errorMsg: {},
  },
  LoginPage: {
    credential: {
      email: '',
      password: '',
    },
    processing: {
      processingSubmit: false,
    },
    errorMsg: {},
  },
};
