import React, { Component } from 'react';
import { Card } from 'antd';
class TodoUrl extends Component {

  render() {
    const { url } = this.props;
    return (
      <div>
        <Card title="제목" extra={<a href={url} target="_blank">More</a>} style={{ width: 300 }}>
            <p>이미지</p>
            <p>설명</p>
            <p>{url}</p>
        </Card>
      </div>
    );
  }
}

export default TodoUrl;