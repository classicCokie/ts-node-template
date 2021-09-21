import { connect } from 'mongoose'
export { insertUserDb } from './inserts'
export { getUserDb } from './queries'

export const databaseInit = async () => {
  if (!process.env.MONGO_URL) {
    throw Error('NO DATABASE URL DEFINED IN ENVS')
  }
  await connect(process.env.MONGO_URL)
}
