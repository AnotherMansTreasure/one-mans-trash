import $ from 'jquery';

export function signupService({username, password}, callback){
  $.post('/signup', {
    user: username, pw: password, created_at: Date.now()
  })
  .then(response=>{
    callback(response);
  })
  .catch(error=>{
    callback(error);
  })
}

export function loginService({username, password}, callback){
  $.post('/login', {
    user: username, pw: password
  })
  .then(response=>{
    callback(response);
  })
  .catch(error=>{
    callback(error);
  })
}
