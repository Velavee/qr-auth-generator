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
The program prints the QR code and the TOTPs all with one command:

node index.js

Both the QR code and the TOTPs are printed to the terminal. In order to test
the program, scan the QR code with Google Authenticator. The TOTPs should match
the code that Google Authenticator provides. There may, however, be some lag
between this application and Google Authenticator.