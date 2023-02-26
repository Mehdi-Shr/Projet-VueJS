import { createStore } from 'vuex'
import user from "./userStore";

export default createStore({
    modules: {
        user
    }
})