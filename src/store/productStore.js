const product = {
    state(){
        return {
            product1: null,
            product2: null,
            search: "",
        }
    },
    getters: {
        search(state) {
          return state.search
        },
        getProducts: (state) => {
            return {product1: state.product1, product2:state.product2 }
        }
    },
    mutations: {
        search(state, search) {
            state.search = search;
        },
        addProduct(state, product) {
            if(!state.product1 && !state.product2){
                state.product1 = product
            } else if(!state.product1) {
                if(state.product2._id != product._id) state.product1 = product;
            } else {
                if(state.product1._id != product._id) state.product2 = product;
            }
        },
        removeProduct(state, product) {
            if(state.product1 && state.product1._id == product._id) state.product1 = null;
            else if(state.product2 && state.product2._id == product._id) state.product2 = null;
        },
        reset(state) {
            state.product1 = null;
            state.product2 = null;
        }
    }
}

export default product