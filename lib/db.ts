import mongoose, { Mongoose } from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!)
    console.log("SUCCESFULLLY CONNECT TO DB!!!!!!")
  } catch (error: any) {
    console.error(`error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
