import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './TodoItem.css';
class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    const textV = text.split(/(\n|\r\n)/g).map( line => {
      return (<span>{line}<br/></span>);
    });
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <Linkify target="_blank">
            {textV}
          </Linkify>
        </div>
        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }
      </div>
    );
  }
}

export default TodoItem;