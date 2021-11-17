TOTP Geneartor
Author: Gabrielle Josephson
CS 370 - Introduction to Security
Oregon State University, Fall 2021
Date Due: November 11, 2021

Note: This program was developed using only Google Authenticator for iOS.

Included Files:
index.js
package.json
package-lock.json
README.txt

Instructions for Execution:
Install dependencies with the following command:

npm install

The QR code and TOTPs are printed with a single command:

node --harmony index.js

Both the QR code and the TOTPs are printed to the terminal. In order to test
the program, scan the QR code with Google Authenticator. The TOTPs should match
the code that Google Authenticator provides. There may, however, be some lag
between this application and Google Authenticator.

Quit the program by using Ctrl + C

Implementation:
I used three different node.js libraries in this program: qrcode, speakeasy, and
totp.js. The generateSecret() method of Speakeasy creates an object with the secret
as well as the URL required for the authenticator app. The TOTP is then calculated
in the class TOTP with the secret and the unix time. After the first code is created
and printed to the terminal, the program pauses execution for 30 seconds before creating
another TOTP. This continues until the user quits the program with Ctrl + C. I initially
had a lower-level implementation without totp.js, but I was struggling to match the Google
Authenticator codes, probably because I needed to use lower level data types somewhere.