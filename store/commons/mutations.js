import {
    CHANGE_USER_STATE
} from './const'

const mutations = {
    [CHANGE_USER_STATE](state,payload){
        state.user_state = payload.user_state
        console.log(state.user_state)
    }
}
export default mutations