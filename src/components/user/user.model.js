import mongoose from "mongoose"

const Schema = mongoose.Schema

const mySchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"]
  },
  lastname: {
    type: String,
    required: [true, "El nombre es requerido"]
  },
  email: {
    type: String,
    unique: true,
    required: [true, "El correo electrónico es requerido"]
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerido"]
  },

  status: {
    type: Boolean,
    default: true
  }
})

const model = moongose.model("Usuarios", mySchema)
export default model
