import React , {Component} from 'react'

class TodoItem extends Component {
  constructor(props){
    super(props)
    this.state={
      itemStatus:false
    }
  }
  render(){
    const {content,index} = this.props
    const texts =(index +1 ) +'、' + content
    return(
      <li className="todo_item"><span className={this.state.itemStatus ? "item_success" : ""} dangerouslySetInnerHTML={{__html: texts}}></span><span className="del_btn" onClick={this.delItems.bind(this)}>删除</span><span className="del_btn" onClick={this.ItemSuccess.bind(this)}>完成</span></li>
    )
  }
  delItems(){
    const {delItem,index}= this.props
    delItem(index)
    this.setState(()=>{
      return ({
        itemStatus:false
      })
    })
  }
  ItemSuccess(){
    console.log(this)
    this.setState((prevState)=>{
      const itemStatus = !prevState.itemStatus
      return ({
        itemStatus:  itemStatus
      })
    })
  }
}
export default TodoItem
