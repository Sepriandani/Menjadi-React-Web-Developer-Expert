import { ActionType } from "./action";

function authUserReducer(authUser = null, action = {}) {
    switch(action.type) {
        case ActionType.SET_AUTH_USER:
            return action.payload.authUser;
        case ActionType.UNSER_AUTH_USER:
            return null;
        default:
            return authUser;
    }
}

export default authUserReducer;
