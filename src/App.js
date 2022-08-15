// 함수형 컴포넌트
/*import './App.css';

function App() {
  const name = "react";
  return <div className="react">{name}</div>;
}
export default App; */


//클래스형 컴포넌트
import React,{ Component } from 'react';
import IterationSample from './Component/IterationSample';
import Say from './Component/Say';
import ValidationSample from './Component/ValidationSample';

class App extends Component {
  render() {
    return (
      <IterationSample/>
    );
  }
}

export default App;