import { Component } from 'react'
import './index.css'

export default class Todo extends Component {
  render() {
    //console.log('todo.js--props',this.props)
    return (
      <div className="Todos">
        <strong className="content">{this.props.content}</strong>
        { this.props.urgent &&
          <strong className="urgent">URGENT</strong>
        }
      </div>
    )
  }
}
