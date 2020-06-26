import produce from 'immer';

const initialState = {
    env_prod: true,
    server: null,
    darktheme: false,
};

export default (state = initialState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case '@config/CHANGE_API_URL_ENV': {
                draft.env_prod = !env_prod;
                break;
            }
            case '@config/CHANGE_SERVER_SUCCESS': {
                draft.server = payload;
                break;
            }
            case '@config/CHANGE_THEME': {
                draft.darktheme = !draft.darktheme;
                break;
            }
            default:
        }
    });
};
