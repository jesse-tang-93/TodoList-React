const defaultState={
  inputValue:'hello world',
  list:[]
}

export default (state=defaultState,action)=>{
  const newState = JSON.parse(JSON.stringify(state))  // 对state进行深拷贝
  if(action.type === 'input_change'){
    newState.inputValue = action.value
    return newState
  }
  if(action.type === 'add_list'){
    newState.list.push(newState.inputValue);
    newState.inputValue= ''
    return newState
  }
  return state
}
