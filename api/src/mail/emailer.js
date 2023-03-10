const nodemailer = require("nodemailer");

const { welcomeTemplate } = require("./templates/welcome.js");
const { payTemplate } = require("../mail/templates/pay.js");

module.exports = welcomeMail = async (req, res) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "deligou70@gmail.com",
      pass: "dbuzwhdootdicazo",
    },
  });

  var mailOptions;

  switch (req.body.mailType) {
    case "newUser":
      mailOptions = {
        from: '"Welcome new user!" <info@deligou.com>',
        to: `${req.body.mail}`,
        subject: "Welcome to Deli-Gou Web-App",
        html: welcomeTemplate(req.body),
      };
    case "pay":
      mailOptions = {
        from: '"Here is your bill info" <info@deligou.com>',
        to: `${req.body.mail}`,
        subject: "Thank you for your purchase!",
        html: payTemplate(req.body),
      };

    default:
      break;
  }

  await transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(`email send to ${mailOptions.to}`);
      res.status(200).jsonp(req.body);
    }
  });
};
