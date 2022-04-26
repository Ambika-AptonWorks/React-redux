import { keyboard } from "@testing-library/user-event/dist/keyboard";

const initial=[];

export default function reducer(state=initial,action){
    const {type,payload}=action;
    switch(type){
        case "Add":
            return [...state,payload];
        case "Remove":
            return state.filter(product => product.name !== payload.name);
        default:
            return state;
    }
}