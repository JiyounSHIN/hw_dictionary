// wordsMD.js
import {db} from "../../firebase";
import {collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Actions (타입을 정해주는 부분)
const LOAD = 'word/LOAD';
const CREATE = 'word/CREATE';
const UPDATE = 'word/UPDATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// 초기값 세팅 (Initial State)
const initialState = {
    //  파이어스토어에서는 고유 key 값이 있기 때문에 id 생략//
    //  리덕스에서는 키 값을 구분짓기 위해 id 를 넣어줘야 함.// 
    list : [
        {// id : 0,
        word : "你好",
        pronunciation : "nǐhǎo", 
        mean :"안녕하세요, 안녕.",
        example : "你好吗？",
        translate : "잘 지내고 있나요?", 
        done : false,
    }, { //id : 1,
        word : "谢谢",
        pronunciation : "Xièxiè", 
        mean :"감사합니다",
        example : "谢谢您的关心",
        translate : "배려에 감사드립니다",
        done : false, 
    }, { //id : 2,
        word : "关系",
        pronunciation : "guānxi", 
        mean :"관계",
        example : "没关系",
        translate : "관계 없다" ,
        done : false,
    }],
};

// Action Creators (액션 생성함수) :CREATE에 대한 액션객체 생성
export function loadWord(word_list) {
    return {type: LOAD, word_list};
}

export function createWord(word) {
    console.log("업데이트 후 액션 생성")
    return {type: CREATE, word:word};
}

export function updateWord(word_id){
    console.log(" 체크한 값을 완료처리할꺼야. ")
    return {type : UPDATE, word_index:word_id};
}

// export function updateWord(word_index) {
// // () 자리에는 몇 번째 를 나타내는 파라미터가 와야 한다.    
//     return {type: UPDATE, word_index};
// }

// middleware 사용 (서버에서 데이터를 가져올 때 시간소요 : 비동기 통신 시//) 
// redux-thunk 를 사용할 때는 하기 구조이다.
export const loadWordFB = () => {
    return async function (dispatch) {
        const word_data = await getDocs(collection(db,"words"));
        console.log(word_data);

        let word_list = [];

        word_data.forEach((doc)=> {
            console.log(doc.data());
            word_list = [...word_list, {id: String(doc.id),...doc.data()}]
            // id도 함께 추가한다 (생성, 수정, 삭제를 위해)

        });
        console.log(word_list)

        dispatch(loadWord(word_list));  // 파이어스토어 데이터 로드 요청 (중)
    }   
};

export const addWordFB = (word) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db,"words"), word);
        // console.log((await getDoc(docRef)).data())
        const _word = await getDoc(docRef);
        const word_list = {id: _word.id, ..._word.data()};
        // console.log(word_list)
        
        dispatch(createWord(word_list));

    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) { 
        case "word/LOAD" : {
            return {list : action.word_list};
        }

        case "word/CREATE": {
            // console.log("리듀서 실행")
            // console.log(state, action)
            // console.log(state.list, action.word)
            const new_word_list = [...state.list];
            // 저장시 자동으로 생성되기 때문에, 기존 값에 + 새로운 값을 안 넣어줘도 된다. // 
            // console.log(new_word_list);
            return {list : new_word_list}; 
            //리턴해주는 어떤 값이 새로운 state 값이 된다.
        } 
        // do reducer stuff
        default: 
        return state;

        case "word/UPDATE": {
            // console.log("이제 클리어체크할꺼야.")
            // console.log(state, action);

            const done_word_list = state.list.map((l,idx)=> {
                // console.log(l.done);
                if(action.word_index === l && l.done === false){
                    return {...l, done:true};
                } else if(action.word_index === l && l.done === true) {
                    return {...l, done:false};
                } else { return l;
                }
            });
            console.log({done_word_list});
            return {list : done_word_list};
        }
    }
}


