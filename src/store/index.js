import Vue from 'vue'
import Vuex from 'vuex'

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
    ]
  },
  mutations: {

  },
  actions: {

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
    }
  }
})
