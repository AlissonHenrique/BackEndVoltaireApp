const User = require("../models/User");
const Ad = require("../models/User");
const Mail = require("../services/Mail");
class SendMailleController {
  async store(req, res) {
    const { ad, content } = req.body;

    //const sendAd = await Ad.findById(ad).populate("user_id");
    const user = await User.findById(req.userId);
    await Mail.sendMail({ 
      from: '"Alisson" <alisson@fce.edu.br>',
      to: "comercial.pos@fce.edu.br",
      subject: `teste  ${sendAd.title}`,
      html: `<p> teste</p> ${content}`
    });
    return res.send();
  }
}

module.exports = new SendMailleController();
