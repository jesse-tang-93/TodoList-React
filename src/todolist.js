import React,{Component} from 'react';
import TodoItem from './todoitem';
import './style.css';
class TodoList extends Component{
  constructor(props){
    super(props)
    this.state ={
      insertValue: '',
      list:[]
    }
  }
  render(){
    return (
      <div className="todoBox">
        <div>
          <h1 className="title">TODOLIST</h1>
          <label htmlFor="insertArea">请输入工作项</label>
          <input className="input" value={this.state.insertValue} id="insertArea" onChange={this.handleChange.bind(this)} onKeyDown={this.handleKey.bind(this)}/>
          <button className="btn" type="button" onClick={this.btnClick.bind(this)}>提交</button>
        </div>
        {/*计划列表*/}
        <ul className="item_box">
          {
            this.state.list.map((item,index)=>{
              return (
                <TodoItem content={item} key={index} delItem={this.handleItemDelete.bind(this)} index={index}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
  handleChange(e){
    const value =e.target.value
    this.setState(()=>{
      return {insertValue: value }
    })
  }
  btnClick(){
    const value = this.state.insertValue
    if (value === ''){
      alert("请输入工作项")
      return false
    }
    this.setState((prevState)=>{
      return ({
        insertValue:'',
        list: [...prevState.list, value]
      })
    })
  }
  handleItemDelete(index){
    this.setState((prevState)=>{
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
  // 工作项输入监听键盘事件
  handleKey(e){
    const keyItem= e.keyCode
    if(keyItem === 13){ // 如果是回车点击
      this.btnClick()
    }
  }
  // 完成按钮
  handleItemSuccess(index){
    this.setState((prevState)=>{
      const itemStatus=prevState.itemStatus
      return ({itemStatus: !itemStatus})
    })
  }
  // 数据
  getItem(){
    return this.state.list.map((item, index)=>{
      return (<li key={index} className="todo_item"><span className={this.state.itemStatus ? "item_success" : ""}>{index+1}、{item}</span><span className="del_btn" onClick={this.handleItemDelete.bind(this,index)}>删除</span><span className="del_btn" onClick={this.handleItemSuccess.bind(this,index)}>完成</span></li>)
    })
  }
}
export default TodoList
