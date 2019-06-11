const Ad = require("../models/Ad");
const Mail = require("../services/Mail");

class AdController {
  async index(req, res) {
    const filters = {};
    if (req.query.id) {
      filters.user_id = req.query.id;
    } else {
      console.log("nao existe");
    }

    const ad = await Ad.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      sort: "-created_at"
    });

    return res.json(ad);
  }
  async show(req, res) {
    const ad = await Ad.findById(req.params.id);

    return res.json(ad);
  }
  async store(req, res) {
    const ad = await Ad.create({ ...req.body, user_id: req.userId });

    const { content, email } = req.body;
    //const sendAd = await Ad.findById(ad).populate("user_id");

    await Mail.sendMail({
      from: "Voltaite Ed <enviaremail@fce.edu.br>",
      to: email,
      subject: "Inscrição de curso Voltaire Educacional",
      template: "send",
      context: { ad }
    });
    return res.json(ad);
  }

  async update(req, res) {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(ad);
  }
  async destroy(req, res) {
    await Ad.findByIdAndDelete(req.params.id);
    return res.send(Ad);
  }
}

module.exports = new AdController();
