const createAction = (type, payload, error) => {
    let action = { type };
    if(!Helper.isNil(payload))
        action.payload = payload;
    if(!Helper.isNil(error))
        action.payload = error;
    return action;
}

export const APP_ACTION_TYPES = {
    DEV_SWITCH_USER: 'DEV_SWITCH_USER'
}

export const dev_switchUser = (user) => createAction(APP_ACTION_TYPES.DEV_SWITCH_USER, user);
