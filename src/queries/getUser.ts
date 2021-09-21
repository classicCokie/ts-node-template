import { User } from '../../types'
import { getUserDb } from '../database'

export const getUser = async (id: string): Promise<User | null> => await getUserDb(id)
