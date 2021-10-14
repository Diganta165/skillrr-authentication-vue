import axios from 'axios'
export const login = {
    namespaced: true,
    state:{
        loginError: "",
        userData: {}
    },
    mutations: {
        async login(state, payload) {

            // console.log(payload)
            try {
                let response = await axios.post("http://192.168.0.132:8080/api/login/", payload)
                state.userData = response.data.data.token
                 
            }
            catch (err) {

                state.loginError = err.response.data.errors.error
                state.userData = {}
            }


        }
    },
    actions: {
        userLogin(context, payload) {
            return context.commit('login', payload);
        }
    },
}