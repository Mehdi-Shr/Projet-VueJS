const product = {
    state: {
        selectedItems: []
    },
    getters: {
        selectedItems: state => state.selectedItems
    },
    mutations: {
        addItem(state, item) {
            if (state.selectedItems.length < 2) {
                state.selectedItems.push(item)
            }
        },
        removeItem(state, item) {
            const index = state.selectedItems.indexOf(item)
            if (index !== -1) {
                state.selectedItems.splice(index, 1)
            }
        },
        reset(state) {
            state.selectedItems = []
        }
    }
}

export default product