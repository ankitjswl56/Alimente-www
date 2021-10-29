// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action)=>{
    switch(action.type){
        case 'FETCH_MENU' : 
            return action.payload
        default :
            return state
    }
}