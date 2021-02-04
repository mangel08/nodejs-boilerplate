import userStore from "./userStore"
import { Success, Error } from "../../utils/response"

const getUsers = async (req, res) => {
  try {
    const users = await userStore.findAllUser()
    if (!users) return Error({ message: "Users not found", status: 404 }, res)
    Success(res, { data: users, model: "users" })
  } catch (error) {
    Error(error, res)
  }
}

const getUser = async (req, res) => {
  try {
    const { _id } = req.params
    debug("getUser")
    const user = await userStore.findByIdUser(_id)
    if (!user) return Error({ message: "User not found", status: 404 }, res)
    Success(res, { data: user, model: "user" })
  } catch (error) {
    Error(error, res)
  }
}

const deleteUser = async (req, res) => {
  const { _id } = req.params
  try {
    debug("deleteUser")
    await userStore.deleteUser(_id)
    Success(res)
  } catch (error) {
    Error(error, res)
  }
}

export default {
  getUsers,
  getUser,
  deleteUser
}
