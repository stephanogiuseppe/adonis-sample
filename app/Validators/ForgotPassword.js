'use strict'

class ForgotPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      redirect_rul: 'required|url'
    }
  }
}

module.exports = ForgotPassword
