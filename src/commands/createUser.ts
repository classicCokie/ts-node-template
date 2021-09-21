import { v4 as uuidv4 } from 'uuid'
import { User } from '../../types'
import { insertUserDb } from '../database/inserts/insertUserDb'

export const createUser = async (name: string): Promise<User |null> => {
  const user = {
    id: uuidv4(),
    name
  }

  return await insertUserDb(user)
}
