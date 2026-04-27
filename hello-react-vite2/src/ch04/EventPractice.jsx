import React, { Component } from 'react';

// 자식 컴포넌트
class EventPractice extends Component {
  state = { message: '' };

  render() {
    return (
      <div>
        <h2>EventPractice 작업중</h2>
        <h3>message : {this.state.message}</h3>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({ message: e.target.value });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({ message: '' });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
