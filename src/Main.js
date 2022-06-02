import React from "react";
import styled from "styled-components";
import './App.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; // 리덕스에 있는 data 가져오기
import { loadWordFB, updateWord } from "./redux/modules/wordsmd";


const Main = (props) => {

    const history = useHistory();
    // page 이동을 위한 hook
    const my_words = useSelector((state) => state.word.list);
    console.log(my_words)
    // useSelector  hook으로 Redux에 있는 모든 data 가져오기
    // 전체는 state , list 값은 state.word.list //

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadWordFB());
        dispatch(updateWord());
    }, []);

    return (
        <div>
            {my_words.map((word, index) => {
                console.log(word);
                return (
                    <CardBox done={word.done} key={index.value} onClick={() => {
                        history.push("./detail/" + index);
                    }}>
                        <div>
                                <p style={{fontSize: "35px", margin: "-5px 0px -20px 5px", textAlign: "left", textDecoration: "underline" }}>{word.word}</p>
                                <p style={{fontSize: "20px", margin: "20px 0px 0px 10px", textAlign: "left" }}>{word.pronunciation}</p>
                                <p style={{fontSize: "20px", margin: "5px 0px 0px 10px", textAlign: "left" }}>{word.mean}</p>
                                <p style={{fontSize: "13px", margin: "5px 0px 0px 20px", textAlign: "left", color: "#457b9d" }}>{word.example}</p>
                                <p style={{fontSize: "13px", margin: "5px 0px 10px 20px", textAlign: "left", color: "#457b9d" }}>{word.translate}</p>
                         </div>
                        <Check onClick={(event) => {
                            event.stopPropagation();
                            dispatch(updateWord(word));
                            console.log(word);
                        }}>Check</Check>
                    </CardBox>

                );
            })}
        </div>
    );
};

// const Wraps = styled.div`
// display : flex;
// flex-direction: row;
// min-width: 400px;
// background-color: ${props => props.color || "blue"};
// margin: 20px auto;
// border-radius: 5px;
// border: 1px solid #ddd;
// `;

// 완료하기 버튼 // 
const Check = styled.button`
position : absolute;
right : 20px;
top : 15px;
width :  70px;
height : 25px;
border-radius : 20px;
background : #B5838d;
border : 1px solid #6D6875;
box-shadow : 1px 1px 2px #6D6875;
color : #f8edeb;
cursor : pointer;

`;

// 카드박스 
const CardBox = styled.div`
display: flex;
position : relative;
float: left;
width : calc(25% - 10px);
min-width : 300px;
max-height : 25vh;
padding: 15px;
margin: 8px;
background-color: ${(props) => props.done ? "#B5838d" : "#f8edeb"};
color : ${(props) => props.done ? "#f8edeb" : "#6D6875"};
border-radius : 10px;
border : 2px solid #e5989b;
&:hover{
    box-shadow : 1px 1px 5px gray;
}
`;




export default Main;