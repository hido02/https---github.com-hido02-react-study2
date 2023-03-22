// 액션
// export를 주면 외부에서 쓸 수 있다
export const increase = () => (
    {type:"INCREMENT"}
);

export const decrease = () => (
    {type:"DECREMENT"}
);


// 상태 
const initstate = {
    number: 0,
    
    // state에 객체나 배열로도 넣을 수 있음
    users: [
        {id: 0, }
    ],
    user: {

    },
};

const initstate2 = {
    hello: 0,
}


// reducer는 액션의 결과를 걸러냄
const reducer = (state = initstate, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {number : state.number + 1};
            // return되면 그걸 호출한 쪽에서 받는게 아니라 return되는 순간 ui가 변경됨 (state가 자동으로 변경되기 때문)
            case "DECREMENT": 
            return {number : state.number - 1};
            default:
                return state;
    }
}

export default reducer;