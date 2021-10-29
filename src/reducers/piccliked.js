// eslint-disable-next-line import/no-anonymous-default-export
export default (state = '',action) =>{
    switch(action.type){
        case 'PIC_CLICKED':
            return action.payload
        default :
            return state
    }
}