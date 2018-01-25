const UPDATE_MSG = 'UPDATE_MSG'

export default {

    [UPDATE_MSG](state, payload) {
        state.msg = payload.msg;
    }

}
