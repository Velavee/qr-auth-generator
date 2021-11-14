const QRcode = require('qrcode');
const speakeasy = require('speakeasy');
const TOTP = require('totp.js');

const generateQR = async secret => {
    secret = speakeasy.generateSecret({length: 20});
    try {
        console.log(await QRcode.toString(secret.otpauth_url, {type: 'terminal'}));
        return secret
    } catch (err) {
        console.log(err);
    }
}

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