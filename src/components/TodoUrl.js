import React, { Component } from 'react';
import { Card, Spin } from 'antd';
class TodoUrl extends Component {

  render() {
    const { url } = this.props;
    return (
      <div>
        <Card title={url} extra={<a href={url} target="_blank">More</a>} style={{ width: 300 }}>
          <Spin size="large" />
        </Card>
      </div>
    );
  }
}

export default TodoUrl;