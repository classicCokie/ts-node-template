import { Schema, model } from 'mongoose'
import { User } from '../../../types'

const schema = new Schema<User>({
  id: { type: String, required: true },
  name: { type: String, required: true }
})

export const UserModel = model<User>('User', schema)
