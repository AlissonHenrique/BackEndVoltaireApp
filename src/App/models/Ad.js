const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const AdSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  celular: {
    type: String,
    required: false
  },
  modalidade: {
    type: String,
    required: false
  },
  curse: {
    type: String,
    required: false
  },
  datebirth: {
    type: String,
    required: false
  },
  cpf: {
    type: String,
    required: false
  },
  rg: {
    type: String,
    required: false
  },
  cep: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  neighborhood: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  uf: {
    type: String,
    required: false
  },
  number: {
    type: String,
    required: false
  },

  complement: {
    type: String,
    required: false
  },
  aceite: {
    type: String,
    required: false,
    default: "Não" 
  },
  created_at_aceite: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

AdSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Ad", AdSchema);
