import { Component } from 'react'
import Todo from '../Todo'

const startingTodos = [
  { id: 1, content: "Todo1", urgent:false, },
  { id: 2, content: "Todo2",urgent:true },
  { id: 3, content: 'Todo3', urgent:true },
]

export default class TodoList extends Component {
  // defining states for the app
  state = { todos: startingTodos, urgent: false,  content: '', top:false}

  handleInputChange = (event, stateToUpdate) => {
    console.log('event',event.target.checked)
    switch (stateToUpdate) {
      case 'urgent':
        this.setState({ urgent: event.target.checked })
        break
      case 'top':
          this.setState({ top: event.target.checked })
          break
      case 'content':
        this.setState({ content: event.target.value })
        break
      default:
        break
    }
  }

  handlePost = () => {
    const todos = this.state.todos
   
    const newTweet = {urgent: this.state.urgent, content: this.state.content,
      id: Math.random(),
    }
    console.log('this.state.top', this.state.top)
    if(this.state.top|| this.state.urgent){
      this.setState({
        todos: [newTweet,...todos],
        urgent: false, top: false, content: '', 
      })
    }
    else{
      this.setState({
        todos: [...todos, newTweet], 
        urgent: false, top: false, content: '', 
      })
    }
    
  }

  handleClear = () => {  this.setState({ todos: [] }) }

  handleRemoveElement = (position) => {
    if (position === 'first') {
      this.state.todos.shift()
      this.setState({ todos: this.state.todos })
    }
  }
  filterurgent = () => {
    console.log('todos',this.state)
    const filterurgent = this.state.todos.filter((item) =>item.urgent === true )
    this.setState({ todos: filterurgent }) }


  render() {
    return (
      <>
        <p>Todo: {this.state.content}</p>
        <input style={{ marginRight: 20 }} type="text"
          onChange={(event) => this.handleInputChange(event, 'content')}
          value={this.state.content}
        />

          <label>urgent?</label>
          <input  type='checkbox'  onChange={(event) => this.handleInputChange(event, 'urgent')} 
          value={this.state.urgent} 
          checked={this.state.urgent}
         />
 <label  style={{ marginLeft: 40 }}>AddToTop (default bottom)</label>
<input  type='checkbox'  onChange={(event) => this.handleInputChange(event, 'top')} 
          value={this.state.top} 
          checked={this.state.top}/>
       
        <button style={{ marginRight: 20, marginLeft: 20 }} onClick={this.handlePost}> AddTodo  </button><br></br>
        <button  style={{ marginRight: 20 }}  onClick={() => this.handleRemoveElement('first')} >Remove first </button>
       
        <button style={{ marginRight: 20 }} onClick={this.handleClear}> Clear </button>
        <button style={{ marginRight: 20 }} onClick={this.filterurgent}>Filter Urgent</button>
        {
        this.state.todos.map((todo) => {
          return (
            <Todo  key={todo.id}  urgent={todo.urgent}  content={todo.content}/>
          )
        })}
      </>
    )
  }
}
