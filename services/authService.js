const jwt = require("jsonwebtoken");

// Almacenamos nuestra clave secreta

const JWT_SECRET =
  "fe7feea1b6236cab055cb106c1f55f96f772de74ed6270c5f51009225ea4d875";

// Creamos una funcion para generar un token JWT

function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token
}

module.exports= {
    generateToken
}