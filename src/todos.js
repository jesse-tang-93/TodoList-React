import React,{Component} from 'react'
import store from './stores'
class Todo extends Component{
  constructor(props){
    super(props)
    this.state=store.getState()
    this.inputChange =this.inputChange.bind(this)
    this.stateChange=this.stateChange.bind(this)
    store.subscribe(this.stateChange)
  }
  stateChange(){
    this.setState(()=>(store.getState()))
  }
  inputChange(e){
    const value = e.target.value
    const action ={
      type:'input_change',
      value:value
    }
    store.dispatch(action)
  }
  btnClick(){
    const action={
      type:'list_change'
    }
    store.dispatch(action)
  }
  delItem(index){
    const action ={
      type:'del_item',
      value: index
    }
    store.dispatch(action)
  }
  render(){
    return (
      <div>
        <input placehloder="todo info" value={this.state.inputValue} onChange={this.inputChange}/>
        <button onClick={this.btnClick}>提交</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li key={index} onClick={this.delItem.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default Todo
