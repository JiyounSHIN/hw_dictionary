import React from "react";
import styled from "styled-components";
import './App.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createWord, loadWordFB, addWordFB } from "./redux/modules/wordsmd";


const Word = (props) => {
    const history = useHistory();
    const word = React.createRef();
    const pronunciation = React.createRef();
    const mean = React.createRef();
    const example = React.createRef();
    const translate = React.createRef();

    const dispatch = useDispatch();

    // React.useEffect( () => {
    //     dispatch(loadWordFB());
    // }, []);

    const addWordList = () => {
        // dispatch(createWord(
        //     {
        //         word: word.current.value,
        //         pronunciation: pronunciation.current.value,
        //         mean: mean.current.value,
        //         example: example.current.value,
        //         translate: translate.current.value,
        //         done : false
        //     }
        // ));
        
        if (word.current.value&&pronunciation.current.value&&mean.current.value&&example.current.value&&translate.current.value) {
            dispatch(addWordFB(
                {
                    word: word.current.value,
                    pronunciation: pronunciation.current.value,
                    mean: mean.current.value,
                    example: example.current.value,
                    translate: translate.current.value,
                    done : false
                }
            ));
            history.push("./");
        } else {
            window.alert("비어있는 값이 있습니다.");
        }
        
        console.log(word.current.value, pronunciation.current.value, mean.current.value, example.current.value, translate.current.value);
        console.log("여러값 한번에 입력!!!")

        //액션객체는 dictionary 형태로 생겼다. ex. {type: "", data}
        // 액션 객체를 매번 만들기 귀찮아서 --> 액션생성함수?  = 모듈에서 만든 함수 액션을 return 해주는 역할
        // 즉시실행 = 함수명() <-- 괄호를 넣으면 즉시실행된다.
    };

    return (
        <WrapsWord>
            <p style={{fontSize : "22px", margin:"5px", width : "400px", color : "#6d6875", fontFamily: "jua"}}> 단어 추가하기 </p>
            <Text>단어</Text>
            <InputBox type="text" ref={word} />
            <Line />
            <Text>병음</Text>
            <InputBox type="text" ref={pronunciation} />
            <Line />
            <Text>의미</Text>
            <InputBox type="text" ref={mean} />
            <Line />
            <Text>예문</Text>
            <InputBox type="text" ref={example} />
            <Line />
            <Text>해석</Text>
            <InputBox type="text" ref={translate} />
            <Line />
            <Btn onClick={addWordList}>저장하기</Btn>
        </WrapsWord>
    )

}

const WrapsWord = styled.div`
align-items: center;
margin-left : -80px;
`;

const Text = styled.p`
width : 400px;
font-size : 16px;
font-family : jua;
color : #6d6875;
padding : 7px;
margin-bottom : -20px;
text-align : left;
`;

const InputBox = styled.input`
    width : 400px;
    height : 20px;
    margin-top : 10px;
    font-size : 15px;
    background : transparent;
    border : 0 solid transparent;
    outline : none;
`;

const Line = styled.hr`
    width : 400px;
    margin: 5px 0px;
    border: 2px dashed #ffcdb2;
`;

const Btn = styled.button`
    width :  150px;
    height : 40px;
    font-size : 25px;
    font-family : jua;
    text-align : bottom;
    border-radius : 20px;
    margin-top : 20px;
    background : #f8edeb;
    border : 2px solid #6d6875;
    color : #6d6875;
    cursor : pointer;
`;


export default Word;



