import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/main.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: []
  },
  mutations: {
    ...vuexfireMutations,
    CLEAR_STORE: (state) => {
      state.characters = []
      return state
    }
  },
  actions: {
    bindCharacters: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('characters', db.collection('characters'))
    }),
    clearStore: ({ commit }) => {
      commit('CLEAR_STORE')
    }
  },
  getters: {
    getAllCharacters: (state) => state.characters,
    getCharacterById: state => id => state.characters.find(x => x.id === id) || {}
  },
  modules: {
  }
})
