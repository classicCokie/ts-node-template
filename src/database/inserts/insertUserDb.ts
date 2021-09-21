import { UserModel } from '../models'
import { User } from '../../../types'

export const insertUserDb = async (user: User): Promise<User | null> => {
  const doc = new UserModel(user)
  return await doc.save()
}
