// eslint-disable-next-line import/no-anonymous-default-export
export default (state={},action)=>{
    switch(action.type){
        case 'USER_LOGIN':
            return {...state,login:action.payload}
        default :
            return state
    }
}