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
        async connexion (context, {email, password}) {
            if(!context.getters.isConnected){
                const res = await fetch("http://localhost:3333/users/login", {
                    method: "POST",
                    body: JSON.stringify({
                        email, password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const json = await res.json()

                if (res.status === 200) {
                    console.log(json.token);
                    context.commit('setToken', {token: json.token})
                    return {message: "success"}

                } else {
                    return {message: json.error}
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