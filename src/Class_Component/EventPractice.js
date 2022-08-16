/* 클래스 컴포넌트 형식으로 구현
import { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }
  /* 생성자 사용할 때 이벤트 핸들링 
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message:e.target.value
    });
  }

  handleClick(){
    alert(this.state.message);
    this.setState({
      message:''
    });
  }
  */

  /* 메서드 바인딩은 생성자 메서드에서 하는 것이 정석이다, 하지만 이 작업이 불편하다고 느낄 수 있고 새 메서드를
  만들 때마다 constructor(생성자)를 수정해야 하기 때문이다. 이 작업을 조금 더 간단하게 하는 방법
  transform-class-properties 문법을 사용하는 것이다.
  그 방법의 예시는 아래와 같다. */

  // 여려개의 인풋을 받을 때 핵심코드
  /*
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  } 

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message:''
    });
  }


  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input 
        type="text"
        name="username"
        placeholder="사용자명"
        value={this.state.username}
        //외부에 함수를 만들어서 값을 전달하는 방법
        onChange={this.handleChange}
        />
        <input 
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={this.state.message}
        //외부에 함수를 만들어서 값을 전달하는 방법
        onChange={this.handleChange}
        /* 내부에 함수를 만들어서 값을 전달하는 방법
        onChange={
          (e)=>{
            this.setState({
              message: e.target.value
            })
          }
        }
        />
        
        <button onClick = {this.handleClick}>확인</button>
        
      </div>
    );
  }
}

export default EventPractice;
*/

// 함수 컴포넌트로 구현

import {useState} from 'react';

const EventPractice = () =>{
  const[username,setUsername] = useState('');
  const[message , setMessgae] = useState('');
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessgae(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessgae('');
  };
  const onKeyPress = e =>{
    if(e.key === 'Enter'){
      onClick();
    }
  };
  return(
    <div>
        <h1>이벤트 연습</h1>
        <input 
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
        />
        <input 
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
        />
        
        <button onClick = {onClick}>확인</button>
   </div>
  );
};

export default EventPractice;