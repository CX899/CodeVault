import React from 'react'
var passCheck = require('zxcvbn')

const Zxcvbn = () => {
  return (
    <div>Zxcvbn</div>
  )
}

var passwordData = passCheck('ok')

const password = passwordData['password']
const score = passwordData['score']
const feedback = passwordData['feedback']
const numGuesses = passwordData['guesses']
const feedbackSuggestions = passwordData['feedback']['suggestions']

const data = JSON.stringify(passwordData)

console.log(data);
console.log(passwordData['password']);

export default Zxcvbn