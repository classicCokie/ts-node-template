import { UserModel } from '../models'
import { User } from '../../../types'

export const getUserDb = async (id: string): Promise<User | null> =>
  await UserModel.findOne({ id: id })
