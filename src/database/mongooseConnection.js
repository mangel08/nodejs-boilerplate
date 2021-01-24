import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connect = () => {
  mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true, useUnifiedTopology: true })
}

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function() {
  console.log("Se ha conectado a la base de datos exitosamente")
})

export default connect
