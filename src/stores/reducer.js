const defaultState={
  inputValue :'你好，redux成功了',
  list:[1,2]
}
export default (state=defaultState, action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type==='input_change'){
    newState.inputValue=action.value
    return newState
  }
  if(action.type ==='list_change'){
    newState.list.push(newState.inputValue)
    newState.inputValue=''
    return newState
  }
  if(action.type==='del_item'){
    const indexs = action.value
    newState.list.splice(indexs,1)
    return newState
  }
  return state
}
