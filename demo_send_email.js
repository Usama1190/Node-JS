// var nodemailer = require('nodemailer');

// var transpoter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'usamaisrar1190@gmail.com',
//         pass: 'uSam@1190'
//     }
// });

// var mailOptions = {
//     from: 'usamaisrar1190@gmail.com',
//     to: 'osamaisrar1191@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// }

// transpoter.sendMail(mailOptions, function(error, info) {
//     if(error) {
//         console.log(error);
//     }
//     else {
//         console.log('Email sent: ' + info.response);
//     }
// })



// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'usamaisrar1190@gmail.com',
//     pass: 'uSam@1190'
//   }
// });

// var mailOptions = {
//   from: 'usamaisrar1190@gmail.com',
//   to: 'osamaisrar1191@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });