const nodemailer = require("nodemailer");

const { welcometemplate } = require("./templates/welcome.js");

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

  var mailOptions = {
    from: '"Welcome new user!" <deligou70@gmail.com>',
    to: `${req.body.mail}`,
    subject: "Welcome to Deli-Gou Web-App",
    html: welcometemplate(req.body),
  };

  await transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(`email send to ${mailOptions.to}`);
      res.status(200).jsonp(req.body);
    }
  });
};
