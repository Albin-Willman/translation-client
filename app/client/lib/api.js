let config = {
  baseUrl: ''
  // baseUrl: 'https://share-tracker.herokuapp.com/api/'
}

export function verifyUser(user, callback, failCallback){
  $.ajax({
    method: 'POST',
    url: buildUrl('/api/users/login'),
    dataType: 'json',
    data: {
      "user": {
        "email": user.username,
        "password": user.password
      },
      "service": "Services"
    },
    success: callback,
    error: failCallback
  });
}

// export function createUser(user, callback, failCallback){
//   $.ajax({
//     method: 'POST',
//     url: buildUrl('/users'),
//     dataType: 'json',
//     data: {
//       "user": {
//         "email": user.username,
//         "password": user.password
//       }
//     },
//     success: callback,
//     error: failCallback
//   });
// }

export function verifyLoggedIn(user, callback, failCallback){
  makeAuthorizedRequest(user.token, 'GET', '/api/users/verify', null, callback, failCallback);
}

export function loadTranslations(user, callback, failCallback){
  makeAuthorizedRequest(user.token, 'GET', '/api/translations', null, callback, failCallback);
}

export function saveTranslations(user, data, callback, failCallback){
  makeAuthorizedRequest(user.token, 'POST', '/api/translations', data, callback, failCallback);
}

export function logout(user, payload, callback, failCallback) {
  makeAuthorizedRequest(user.token, 'DELETE', 'api/users/logout', payload, callback, failCallback);
}

function makeAuthorizedRequest(token, verb, path, payload, callback, failCallback) {
  $.ajax({
    method: verb,
    dataType: 'json',
    url: buildUrl(path),
    headers: {
      'Authorization' : 'Token token=' + token
    },
    data: payload,
    success: callback,
    error: failCallback
  }); 
}

function buildUrl(path) {
  return config.baseUrl + path
}