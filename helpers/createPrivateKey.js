const crypto = require("crypto")

const secret = crypto.randomBytes(32).toString("hex")

console.log(secret) // fe7feea1b6236cab055cb106c1f55f96f772de74ed6270c5f51009225ea4d875