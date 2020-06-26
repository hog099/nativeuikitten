import produce from 'immer';

const initialState = {
    user: null,
    token: null,
    signed: false,
    ableAcess: false,
};

export default (state = initialState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case '@auth/SIGN_IN_SUCCESS': {
                draft.token = payload.token;
                draft.user = payload.user;
                draft.signed = true;
                draft.ableAcess = true;
                break;
              }
              case '@auth/USERDATA_UPDATE': {
                draft.user = payload;
                break;
              }
              case '@auth/UPDATED_USER_SUCCESS': {
                draft.user = payload.user;
                break;
              }
            //   case '@auth/SIGN_FAILURE': {
            //     draft.loading = false;
            //     break;
            //   }
              case '@auth/ABLEACESS': {
                draft.ableAcess = payload;
                break;
              }
              case '@auth/SIGN_OUT': {
                draft.token = null;
                draft.signed = false;
                draft.user = null;
                draft.ableAcess = false;
                break;
              }
            default:
        }
    });
};
