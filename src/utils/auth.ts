const TokenKey = 'zb-token'

export function getToken() {
  return localStorage.TokenKey
}

export function setToken(token) {
  return (localStorage.TokenKey = token)
}

export function removeToken() {
  return (localStorage.TokenKey = '')
}
