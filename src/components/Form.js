import React from 'react';
import { Input, Button } from 'antd';
import './Form.css';
const { TextArea } = Input;
const buttonStyle = {height: '95px', marginLeft: '5px', backgroundColor: '#22b8cf', borderColor: '#22b8cf'};
const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <TextArea type="textarea" rows={4} value={value} onChange={onChange} onPressEnter={onKeyPress}/>
      <Button type="primary" onClick={onCreate} style={buttonStyle}>추가</Button>
    </div>
  );
};

export default Form;