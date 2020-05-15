import store from '../store';

export const fetch_post = () => {
    return {
        type: 'FETCH_USER'
    };
};

export const recieve_post = post => {
    return {
        type: 'FETCHED_USER',
        data: post
    };
};

export const recieve_error = () => {
    return {
        type: 'RECIEVE_ERROR'
    };
};

export const thunk_action_creator = username => {
    const user = username.replace(/\s/g,'');
    store.dispatch(fetch_post());

    return function(dispatch,getState) {
        return fetch(`https://api.github.com/users/${user}`)
        .then(data => data.json())
        .then(data => {
            if(data.message === 'Not Found') {
                throw new Error("No such user found !!");
            } else dispatch(recieve_post(data));
        })
        .catch(err => dispatch(recieve_error()));
    };
};