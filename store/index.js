import Vuex from "vuex"
// import router from '@/router';

const createStore = () => {
    return new Vuex.Store({
        state: {
            userData: {},
            token: null,
            userKey: null,
            product: [],
            productDetail: {}
        },
        getters: {
            getUserData(state) {
                return state.userData
            },
            getUserToken(state) {
                return state.token
            },
            isAuthenticated(state) {
                return state.token != null
            },
            getProduct(state) {
                return state.product
            },
            getProductDetail(state) {
                return state.productDetail
            }
        },
        mutations: {
            setUserData(state, user) {
                state.userData = user
            },
            setToken(state, token) {
                state.token = token
            },
            logout(state) {
                this.$cookies.remove("token")
                this.$cookies.remove("expiresIn")
                this.$cookies.remove("userId")
                state.token = null;
                state.userData = {};
            },
            setUserKey(state, key) {
                state.userKey = key
            },
            setProductData(state, product) {
                state.product = product
            },
            setProductDetail(state, detail) {
                state.productDetail = detail

            },
        },
        actions: {
            async nuxtServerInit({ commit, dispatch }) {
                const token = this.$cookies.get("token")
                if (token) {
                    const expiresIn = this.$cookies.get("expiresIn")
                    if (new Date().getTime() < +expiresIn) {
                        const userId = this.$cookies.get("userId")
                        commit('setToken', token)
                        await dispatch('getUser', userId)

                    }
                    else {
                        commit('logout')

                    }
                }
            },
            async getRegister({ dispatch, commit }, payload) {
                const webApiKey = "AIzaSyA92ulTYrryq5dd9d_21SNUoWnfHFuWbW8"
                const registerData = {
                    email: payload.emailAdress,
                    password: payload.password,
                    returnSecureToken: true
                }
                try {
                    const data = await this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${webApiKey}`, registerData)
                    const userData =
                    {
                        id: data.localId,
                        fullName: payload.fullname,
                        userName: payload.username,
                        email: payload.emailAdress,
                        image: 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg '
                    }
                    commit("setToken", data.idToken)
                    dispatch("addUser", { userData, token: data.idToken })

                }
                catch (error) {
                    console.log(error)
                }

            },
            async getLogin({ commit, dispatch }, payload) {
                const webApiKey = "AIzaSyA92ulTYrryq5dd9d_21SNUoWnfHFuWbW8"
                const loginData = {
                    email: payload.emailAdress,
                    password: payload.password,
                    returnSecureToken: true
                }
                try {
                    const response = await this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${webApiKey}`, loginData)
                    const expiresIn = new Date().getTime() + Number.parseInt(response.expiresIn) * 1000
                    const idToken = response.idToken
                    const userId = response.localId
                    this.$cookies.set('expiresIn', expiresIn)
                    this.$cookies.set('token', idToken)
                    this.$cookies.set('userId', userId)
                    commit("setToken", idToken)
                    await dispatch("getUser", userId)
                }
                catch (error) {
                    console.log(error)
                }

            },
            async addUser({ commit }, { userData, token }) {

                try {
                    const dataAddUser = await this.$axios.$post(`/user.json?auth=${token}`, userData)
                    this.$router.push('/login')
                } catch (error) {
                    console.log(error)
                }
            },
            async editUser({ commit, state }, userData) {
                console.log(userData)
                try {
                    const editData = await this.$axios.$put(`/user/${state.userKey}.json?auth=${state.token}`, userData)

                } catch (error) {
                    console.log(error)
                }
            },

            async getUser({ commit }, userId) {
                try {

                    const data = await this.$axios.$get(`/user.json`)
                    for (var i in data) {
                        if (data[i].id == userId) {
                            commit('setUserData', data[i])
                            commit('setUserKey', i)
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            },

            async getProduct({ commit }) {
                try {
                    const data = await this.$axios.$get(`/products.json`)
                    const dataArr = []
                    for (var i in data) {
                        dataArr.push({ id: i, ...data[i] })
                    }
                    commit('setProductData', dataArr)
                }
                catch (error) {
                    console.log(error)
                }
            },

            async getProductDetail({ commit }, productId) {
                try {
                    const data = await this.$axios.$get(`/products/${productId}.json`)
                    commit('setProductDetail', data)
                }
                catch (error) {
                    console.log(error)
                }
            }
        }



    })
}
export default createStore;