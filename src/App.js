import React, { useState, useRef } from "react";
import Main from "./Main";
import Detail from "./Detail";
import Word from "./word";
import NotFound from "./NotFound";
// 주소가 올바른 경로로 안 들어올 때 알림페이지 (switch 함수사용)
import './App.css';
import styled, { keyframes, css, createGlobalStyle } from "styled-components";
import './App.css';
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [word, wordList] = React.useState(["할수있다", "할수있고말고"]);
  const text = React.useRef(null);

  // const addBucketList = () => {
  //   // 스프레드 문법! 기억하고 계신가요? :) 
  //   // 원본 배열 list에 새로운 요소를 추가해주었습니다.
  //   setList([...list, text.current.value]);
  // }
  return (
    <div className="App">
      <Title>중국어 단어장</Title>
      <Line />
      <Wraps>
        <Switch>
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <Route path="/" exact>
            <Main word={word} />
            <BtnDeco><Button onClick={() => { history.push("./word") }} >+</Button></BtnDeco>
          </Route>
          <Route path="/detail/:index">
            <Detail />
          </Route>
          <Route path="/word">
            <Word />
          </Route>
          <Route>
            <NotFound />
          </Route>

        </Switch>
      </Wraps>
    </div>
  );
}

const Title = styled.h1`
color : #6D6875;
text-align: center;
margin : 0px  0px -6px 0px;
padding : 5px;
`;

const Line = styled.hr`
margin: 5px 0px;
border: 2px solid #ffcdb2;
`;

const Wraps = styled.div`
display: flex;
height : 100vh;
justify-content : center;
margin : auto auto auto 80px;

`;


const BtnDeco = styled.div`
  margin : 30px 30px;
  position : fixed;
  bottom : 0;
  right : 0;
  width : 60px;
  height : 60px;
  border-radius : 40px;
  background : #B5838d;

`;

const Button = styled.div`
  font-family : Jua;
  font-size : 60px; 
  width : 60px;
  height : 60px;
  margin-top : -2px;
  border-radius : 40px;
  background : transparent;
  color : #f8edeb;
  cursor : pointer;
  // &:active,
  // &:focus {
  //   animation :  2s linear infinite;
  // }
`;

// 애니메이션 주기  (선언값 보다 위에 주기 )
const BtnAnimation = keyframes`
  from {
    transform : rotate(0deg);
  } 
  to {
    transform : rotate(360deg);
  }
`;

export default App;