const defaultState = {
  inputValue: '你好我是redux',
  list:[1,2,3]
}
export default (state=defaultState, action)=>{
  if(action.type === 'change_input'){ // 如果dispatch过来的action是修改input的值
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    console.log(newState)
    return newState
  }
  if(action.type === 'change_list') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue=''
    return newState
  }
  return state
}
