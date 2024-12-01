"use server"

import connectDB from "@/lib/db"
import { User } from "@/models/User"
import { redirect } from "next/navigation"

const register = async (formData: FormData) => {
  const firstname = formData.get("firstname") as string
  const lastname = formData.get("lastname") as string
  const email = formData.get("email")
  const password = formData.get("password")

  console.log(firstname, lastname, email, password)

  if (!firstname || !lastname || !email || !password) {
    throw new Error("Plaese fill all the feilds")
  }

  await connectDB()
  //search of existing user
  const existingUser = await User.findOne({
    //  email: email,
    // as key and value hav ethe same name
    email,
  })

  if (existingUser) {
    throw new Error("User already exist.")
  }
  await User.create({
    firstname,
    lastname,
    email,
    password,
    // password: hashedPassword,
  })
  console.log("!!!!!!!!!!User created !!!!!!!!!!!")

  redirect("/login")
}

export { register }
