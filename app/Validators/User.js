'use strict'

class User {
  get ValidateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed'

    }
  }
}

module.exports = User
