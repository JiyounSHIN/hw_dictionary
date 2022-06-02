import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { createWord, updateWord} from "./redux/modules/wordsmd"
// 액션 생성함수를 넣기 위해 호출한다.
import { useParams } from "react-router-dom"
// 파라미터 (인덱스 값)를 가지고 오기 위해, useParams router Hook 사용
import { useSelector } from "react-redux";
// 카드 내용 가지고 오기위해 useSelector 라우터훅 사용.

const Detail = (props) => {
    const params = useParams();  // index 값 변수 선언
    const word_list = useSelector((state) => state.word.list);
    const word_index = params.index  // 해당 단어의 index 값 선언
    console.log(word_list);
    console.log(params);
    console.log(word_list[word_index]);

    const word = React.createRef();
    const pronunciation = React.createRef();
    const mean = React.createRef();
    const example = React.createRef();
    const translate = React.createRef();
    const dispatch = useDispatch();

    return (
        <WrapsWord>
            <p style={{fontSize : "22px", margin:"5px", width : "400px", color : "#6d6875", fontFamily: "jua"}}> 단어 수정하기 </p>
            <Text>단어</Text>
            <InputBox type="text" placeholder={word_list[word_index].word} ref={word} />
            <Line />
            <Text>병음</Text>
            <InputBox type="text" placeholder={word_list[word_index].pronunciation} ref={pronunciation} />
            <Line />
            <Text>의미</Text> 
            <InputBox type="text" placeholder={word_list[word_index].mean} ref={mean} />
            <Line />
            <Text>예문</Text>
            <InputBox type="text" placeholder={word_list[word_index].example} ref={example} />
            <Line />
            <Text>해석</Text>
            <InputBox type="text" placeholder={word_list[word_index].translate} ref={translate}/>
            <Line />
            <Btn onClick ={() => {
                dispatch(updateWord(word_index));
                console.log(word_index)
                
            }} >수정하기</Btn>
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


export default Detail;



