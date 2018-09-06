import React, {Component} from 'react'
class TodoListUI extends Component{
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
          renderItem={(item ,index)=> (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}
export default TodoListUI
