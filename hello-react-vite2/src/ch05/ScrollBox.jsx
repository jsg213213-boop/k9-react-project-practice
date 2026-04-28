import { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    return (
      <div
        style={{
          border: '1px solid black',
          height: '300px',
          width: '300px',
          overflow: 'auto',
        }}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div
          style={{
            height: '650px',
            background: 'linear-gradient(white, black)',
          }}
        />
      </div>
    );
  }
}

export default ScrollBox;
