import { CHANGE_INPUT_VALUE,CHANGE_LIST,ITEM_DEL} from './actionType'
const defaultState = {
  inputValue: '',
  list:[]
}
export default (state=defaultState, action)=>{
  if(action.type === CHANGE_INPUT_VALUE){ // 如果dispatch过来的action是修改input的值
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === CHANGE_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue=''
    return newState
  }
  if(action.type === ITEM_DEL){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}
