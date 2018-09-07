import React, {Component} from 'react'
import { connect} from 'react-redux'
class AddTodo extends Component {
  render(){
    return (
      <div>
        <div>
          <input value ={this.props.inputValue} onChange={this.props.inputChange} onKeyDown={this.props.keyDown.bind(this)}/>
          <button onClick={this.props.btnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index)=>{
              return <li key={index} onClick={this.props.delItem.bind(this,index)}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
  componentDidMount(){
  }
}
// 连接方式  mapStateToProps  将store数据传给props   就是将store数据映射到组件的props里面
// 该mapStateToProps方法 固定接收一个state参数，即store中的数据，并return 一个对象
const mapStateToProps = (state)=>{
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    inputChange(e){
      const action ={
        type :'input_change',
        value:e.target.value
      }
      dispatch(action)
    },
    btnClick(){
      console.log(this.props)
      if(this.props.inputValue === ''){
        alert('请输入内容')
        return false
      }
      const action ={
        type: 'add_list'
      }
      dispatch(action)
    },
    keyDown(e){
      if(e.keyCode === 13){
        this.props.btnClick.call(this)
      }
    },
    delItem(index){
      console.log(index)
      const action ={
        type: 'del_item',
        index
      }
      dispatch(action)
    }
  }
}
// 如果对store的数据进行修改：
// 将store的dispatch方法挂在到props上,并将return中的方法映射到组件的props上，也就是props中既有了dispatch方法，也有的操作组件的既return中的方法



// 导出connect方法 让 组件和store做连接
// 将组件名传给connect方法
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)

// 也就是说connect方法将store中的数据和dispatch方法映射到了组件的props中
