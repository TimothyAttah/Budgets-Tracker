const authJwt = require('jsonwebtoken');

function jwtGenerator(user_id: string) {
  const payload = {
    user: {id: user_id}
  }

 return authJwt.sign(payload, process.env.JWT_SECRET)
//  return authJwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '3days'})
}

module.exports = jwtGenerator;
 