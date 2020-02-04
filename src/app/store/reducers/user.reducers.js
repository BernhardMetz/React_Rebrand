import * as Actions from '../actions';

const initialState = {
    email       : '',
    discordid   : ''
};

const user = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_USER_DATA:
        {
            return {
                ...state,
                email       : action.payload.email,
                discordid   : action.payload.discordid
            };
        }
        default:
        {
            return state;
        }
    }
};

export default user;
