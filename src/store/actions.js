import { FETCH_LIST } from './mutation-type'
import scriptList from '../data/db'
export default {
  getScriptList ({commit}) {
    console.log('action:getScriptList')
    commit(FETCH_LIST, scriptList)
  }
}
