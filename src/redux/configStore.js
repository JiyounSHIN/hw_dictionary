import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import word from "./modules/wordsmd";
// reducer를 묶는 함수 = combindReducers //
// export default 로 reducer  내보낸 값을 받는다.//

// 미들웨어도 하나로 묶어줘야 한다.(배열로 묶기)
const middlewares = [thunk];

const rootReducer =  combineReducers({word});
// 리듀서를 모아서 루트 리듀서  생성 //
// word 는 모듈명으로 출력된다 word : word 모듈명, or 리듀서명// 

// 인핸서 생성 : 미들웨어 옵셔널하게 묶어줌
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);
// 모듈을 모아서 store 생성 // 

export default store;
