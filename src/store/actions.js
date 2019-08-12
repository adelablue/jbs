import { FETCH_LIST } from './mutation-type'
import scriptList from '../data/all'
export default {
  getScriptList ({commit}) {
    console.log('action:getScriptList')
    commit(FETCH_LIST, scriptList)
  }
}
