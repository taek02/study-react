// 함수형 컴포넌트
/*import './App.css';

function App() {
  const name = "react";
  return <div className="react">{name}</div>;
}
export default App; */


//클래스형 컴포넌트
import {Componet} from 'react';
import ValidationSample from "./Component/ValidationSample"

class App extends Componet {
  render(){
    return (
      <ValidationSample/>
    );
  }
}

export default App;