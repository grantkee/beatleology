export const signup = (user) => {
  return dispatch => {
    fetch('/auth/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: user.email,
        secret: user.secret
      })
    })
    .then(response => {
      response.json()
    })
    .then(function(body){
      console.log('login:', body)
    })
    .catch(error => console.log(error))
  }
}

export const login = (user) => {
  return dispatch => {
    fetch('/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: user.email,
        secret: user.secret
      })
    })
    .then(response => {
      response.json()
    })
    .then(function(body){
      console.log('login:', body)
    })
    .catch(error => console.log(error))
  }
}