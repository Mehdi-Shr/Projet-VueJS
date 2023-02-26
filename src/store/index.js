import { createStore } from 'vuex'
import user from "./userStore";
import product from "@/store/productStore";

export default createStore({
    modules: {
        user,
        product
    }
})