import * as types from '../types'

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
};

export default function (state = initialState, action) {
    console.log('REDUCER', action.payload);
    switch (action.type) {
        case types.LOGIN_REQUEST:{
            return state;
        }

        default: {
            return state;
        }
    }
}
