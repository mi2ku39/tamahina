export default {
    state: function () {
        return {
            backgroundColor: '#FAFAFA'
        }
    },
    getters: {},
    mutations: {
        setBackgroundColor: (state, color) => state.backgroundColor = color
    }
}