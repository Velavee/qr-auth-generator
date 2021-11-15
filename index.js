// Sources:
// https://github.com/wuyanxin/totp.js
// https://datatracker.ietf.org/doc/html/rfc4226

const QRcode = require('qrcode');
const speakeasy = require('speakeasy');
const TOTP = require('totp.js');


// Generate a random secret and build a QR code based on it
const generateQR = async secret => {
    secret = speakeasy.generateSecret({length: 20});
    try {
        console.log(await QRcode.toString(secret.otpauth_url, {type: 'terminal'}));
        return secret
    } catch (err) {
        console.log(err);
    }
}

// Generate a TOTP based on random secret. After 30 seconds, print the next TOTP
const getTOTP = (secret) => {
    let totp = new TOTP(secret);
    let code = totp.genOTP();
    console.log(`The current code is ${code}`);

    setTimeout(function(){ getTOTP(secret); }, 30000)
}

const startGenerating = async() => {
    secret = await generateQR();
    getTOTP(secret.base32);
}

startGenerating();