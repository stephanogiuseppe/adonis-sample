'use strict'

const crypto = require('crypto')
const moment = require('moment')
// const Mail = require('Mail')
const User = use('App/Models/User')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      let user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()
      // await Mail.send(
      //   ['emails.forgot_password'],
      //   {
      //     email,
      //     token: user.token,
      //     link: `${request.input('redirect_url')}?token=${user.token}`
      //   },
      //   message => {
      //     message
      //       .to(user.mail)
      //       .from('stephano.grp@gmail.com', 'Stéphano')
      //       .subject('Recuperação de senha')
      // })

      return response
        .status(200)
        .send({ token: user.token })
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Something is wrong' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)
      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'Token expired' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Something is wrong on reset pasword' } })
    }
  }
}

module.exports = ForgotPasswordController
