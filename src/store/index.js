import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loadedThinkPlants: [
      {
        id: '123dkdkd',
        title: '영상회의',
        content: '머신러닝을 활용한 얼굴안면인식 사용자 등록및 출석체크',
        ispublic: true,
        tag: 'MachineLearning'
      },
      {
        id: '123dkdkd111',
        title: '내방객안내시스템',
        content: 'WebRTC를 통한 음성/영상통화 ',
        ispublic: true,
        tag: 'WebRTC'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }

  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedThinkPlants (state) {
      console.log('loadedThinkPlants')
      return state.loadedThinkPlants.sort((meetupA, meetupB) => {
        return meetupA.id > meetupB.id
      })
    },
    featuredThinkPlants (state, getters) {
      console.log('featuredThinkPlants')
      return getters.loadedThinkPlants.slice(0, 5)
    },
    loadedThinkPlant (state) {
      console.log('loadedThinkPlant')
      return (thinkplantId) => {
        return state.loadedThinkPlants.find((thinkplant) => {
          return thinkplant.id === thinkplantId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
