export default {
    state: function () {
        return {
            backgroundColor: '#FAFAFA',
            visitIn: 'index',
            navigatorWhite: false
        }
    },
    getters: {},
    mutations: {
        setBackgroundColor: (state, color) => state.backgroundColor = color,
        setVisitIn: (state, pageName) => state.visitIn = pageName,
        setNavigatorWhite: (state, flag) => state.navigatorWhite = flag
    }
}