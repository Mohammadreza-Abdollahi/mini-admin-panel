export const init = {
    postData: {
        userId: "",
        id: "",
        body: "",
        title: "",
    },
    users: []
}
export const dataReducer = (state , action)=>{
    switch (action.type) {
        case 'changeUsers':
            return {
                ...state , users: action.payload
            }
        case 'setUpdate':
            return {
                ...state , postData: action.payload
            }
        case 'setInputValue':
            return {
                ...state , postData:{
                ...state.postData,
                [action.propName]: action.propValue
            }}
        default:
            return state;
    }
}