import {FETCH_LIST} from './mutation-type'

export default {
  [FETCH_LIST] (state, {scriptList}) {
    console.log('mutations:getScriptList')
    state.listTmp = scriptList
    console.log(state.listTmp)
  }
}
