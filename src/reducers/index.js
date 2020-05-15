const initialState = {
    userData: {},
    isFetching: false,
    isError: false
};

const asyncReducer = (state = initialState , action) => {
   switch(action.type) {
       case "FETCH_USER": 
       return Object.assign({},state, {
           isFetching: true,
           userData: {},
           isError: false
       });
       case "FETCHED_USER": 
        return Object.assign({},state,{
            isError: false,
            isFetching: false,
            userData: action.data
        });
        case "RECIEVE_ERROR": 
          return Object.assign({}, state, {
              isFetching: false,
              isError: true,
              userData: {}
          });
        default: 
          return state
   }
};

export default asyncReducer;

