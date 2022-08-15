import {Componet} from 'react';
import './ValidationSample.css';

class ValidationSample extends Componet{
  state = {
    password: '',
    clicked: false,
    validated: false
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    })
  }

  render(){
    return(
      <div>
        <input 
        typed="password"
        value = {this.state.password}
        onChange={this.handleChange}
        clasNmae={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        />
        <button onCick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;