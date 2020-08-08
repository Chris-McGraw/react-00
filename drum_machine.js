'use strict';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: "on"
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, I'm made from JSX.</h1>
      </div>
    );
  }
}

// ReactDOM.render(JSX, document.getElementById('root'));
const domContainer = document.querySelector('#drum_machine');
ReactDOM.render(<DrumMachine />, domContainer);
