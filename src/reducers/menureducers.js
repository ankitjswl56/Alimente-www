export default (state = [], action)=>{
    switch(action.type){
        case 'FETCH_MENU' : 
            return action.payload
        default :
            return state
    }
}