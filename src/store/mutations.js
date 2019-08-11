import {FETCH_LIST} from './mutation-type'

export default {
  [FETCH_LIST] (state, {scriptList}) {
    console.log('mutations:getScriptList')
    state.list = scriptList
  }
}
