import React,{ Component } from 'react'
import { Input,Button,List } from 'antd';
import store from './store'
import 'antd/dist/antd.css';

class NewTodo extends Component{
  constructor(props) {
    super(props)
    this.state=store.getState()
    this.inputChange = this.inputChange.bind(this)
    this.subClick = this.subClick.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.inputKeydown = this.inputKeydown.bind(this)
    // 此处最为关键的一个方法，当store发现数据发生改变时，需要告诉组件--自动调用一个方法
    // subscribe 方法调用组件中的一个函数，该组件中的函数将数据设置为store中发生改变后的新的数据
    store.subscribe(this.storeChange)
  }

  // 当知道store数据发生变化后，重新setState组件的数据
  storeChange() {
    this.setState(()=>(store.getState()))
  }
  // 监听input输入获取input数据
  inputChange(e){
    const value = e.target.value
    const action={
      type :'change_input',
      value: value
    }
    store.dispatch(action)
  }
  // 监听回车键盘事件
  inputKeydown(e) {
    if(e.keyCode === 13 ){
      this.subClick()
    }
  }
  // 点击按钮保存数据到list
  subClick(){
    // 当点击按钮  告诉store要改变list数据
    if(this.state.inputValue===''){
      alert('请输入内容')
      return false
    }
    const action ={
      type : 'change_list'
    }
    // dispatch 派遣发送
    store.dispatch(action)
  }
  render(){
    return (
      <div style={{marginLeft:'10px',marginTop:'10px'}}>
        <div>
          <Input placeholder="todo info" style={{width:'300px',marginRight:'10px'}} value={this.state.inputValue} onChange={this.inputChange} onKeyDown={this.inputKeydown}/>
          <Button type='primary' onClick={this.subClick}>提交</Button>
        </div>
        {/*todo列表*/}
        <List
          style={{width:'300px',marginTop:'10px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}
export default NewTodo
