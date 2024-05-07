import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
    
  },
  getters: {
    setCharacters(state, payload ){
      state.characters = payload
    },

    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  mutations: {
    async getCharacters({commit}){
      try{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
      console.log(data)

      }catch(error){
      console.error(error)
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
