import $ from 'jquery';

export function signup({username, password}, callback){
  $.post('/signup', {
    user: username, pw: password, created_at: Date.now()
  })
  .done(response=>{
    callback(response);
  })
  .fail(error=>{
    callback(error);
  })
}

export function login({username, password}, callback){
  $.post('/login', {
    user: username, pw: password
  })
  .done(response=>{
    callback(response);
  })
  .fail(error=>{
    callback(error);
  })
}
