import React from 'react'
var zxcvbn = require('zxcvbn')

const Zxcvbn = () => {
  return (
    <div>Zxcvbn</div>
  )
}

var passwordData = zxcvbn('Tr0ub4dour&3')

console.log(passwordData);

export default Zxcvbn