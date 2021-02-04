import User from "./user.model"

const addUser = user => {
  const myUser = new User(user)
  myUser.save()
}

const findAllUser = () => {
  debug("findAll User")
  const users = User.find()
  return users
}

const findByIdUser = _id => {
  debug("findByID User")
  const user = User.findOne({ _id, status: User.ACTIVE })
  return user
}

const deleteUser = _id => {
  debug("Delete User")
  const userDeleted = User.findOneAndDelete({ _id })
  return userDeleted
}

export default {
  addUser,
  findAllUser,
  findByIdUser,
  deleteUser
}
