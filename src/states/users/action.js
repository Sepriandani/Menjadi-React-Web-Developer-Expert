import api from "../../utils/api";

const ActionType = {
    RECEIVER_USERS: "RECEIVE_USERS",
};

function receiveUserActionCreator(users) {
    return {
        type: ActionType.RECEIVER_USERS,
        payload: {
            users,
        },
    };
}

function asyncRegisterUser({ name, email, password }) {
    return async () => {
        try {
            await api.register({ name, email, password });
        } catch (error) {
            alert(error.message);
        }
    };
}

export { ActionType, receiveUserActionCreator, asyncRegisterUser};
