const firebaseAdmin = require('firebase-admin');

/**
 * Returns true if the registration request contains valid parameters.
 */
exports.validateRegistrationRequest = (params) => {
  const { email, password } = params;
  return email.includes('@') && password.length > 8;
};


/**
 * Creates a new user in Firebase.
 */
exports.registerUser = async (params) => {
  const { email, password } = params;

  // I don't know exactly what param you need to pass in
  const necessaryFirebaseParamsToCreateUser = null;
  const authResult = await firebaseAdmin.auth().createUser(necessaryFirebaseParamsToCreateUser);

  // Get whatever data you need from the create user call
  return authResult;
};


/**
 * Returns true if the login request contains valid parameters.
 */
exports.validateLoginRequest = (params) => {
  const { email, password } = params;
  return email.includes('@') && password.length > 8;
}


/**
 * Authenticates an existing user to login to the game.
 */
exports.loginUser = async (params) => {
  const { email, password } = params;

  // Didn't see an actual "login" method at first glance, look like maybe it
  // wants you to use tokens? Not sure, but you're a smart cookie.
  const necessaryFirebaseParamsToLogin = null;
  const authResult = await firebaseAdmin.auth().verifyIdToken(necessaryFirebaseParamsToLogin);

  // Get whatever data you need
  return authResult;
};
