import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './TodoItem.css';
import TodoUrl from './TodoUrl.js';
const regexURL = /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi;
class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    const arr = [];
    text.replace(regexURL, function (n) {
      arr.push(n);
    });
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
          { arr.length > 0 ? (<TodoUrl url={arr[0]} />) : '' }
        </div>
        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }
      </div>
    );
  }
}

export default TodoItem;