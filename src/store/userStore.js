import {login} from "../api/user";

const user = {
    state: () => ({
        token: null,
    }),
    mutations: {
        setToken(state, {token}) {
            console.log("oui" + token);
            state.token = token
        },
    },
    getters: {
        token (state) {
          return state.token
        },
        isConnected (state) {
            return state.token != null
        },
        tokenInformations(state) {
            if(state.token){
                const [header, payload, signature] = state.token.split('.')
                if(typeof header == "string" && typeof payload == "string"){
                    return {
                        header: JSON.parse(atob(header)),
                        payload: JSON.parse(atob(payload)),
                    }
                }
                return null
            }
            return null
        }
    },
    actions: {
        async connexion (context, data) {
            if(!context.getters.isConnected){
                const res = await login(data)

                if (res.status === 200) {
                    context.commit('setToken', {token: res.body.token})
                    return {message: "success"}
                } else {
                    return {message: res.body.message}
                }
            }
            return null
        },
        deconnexion(context) {
            context.commit('setToken',{token: null})
        }
    }

}

export default user