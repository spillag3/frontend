import React, { Component } from 'react';

class MyComponent extends Component {
constructor(props) {
super(props);
this.state = { count: 0 };
}

handleButtonClick = () => {
this.setState({ count: this.state.count + 1 });
};

render() {
return (
<div>
<p>Count: {this.state.count}</p>
<button onClick={this.handleButtonClick}>Increment Count</button>
</div>
);
}
}

class App extends Component {
render() {
return <MyComponent />;
}
}

export default App;

