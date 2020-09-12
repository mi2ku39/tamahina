export default {
    state: function () {
        return {
            backgroundColor: '#FAFAFA',
            visitIn: 'index'
        }
    },
    getters: {},
    mutations: {
        setBackgroundColor: (state, color) => state.backgroundColor = color,
        setVisitIn: (state, pageName) => state.visitIn = pageName
    }
}