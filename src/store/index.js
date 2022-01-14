import { createStore } from "vuex";

export default createStore({
  state: {                         // состояние
    likes: 2,
    isAuth: false
  },
  getters: {                       // computed свойства, кешируемые\изменяемые значения
    doubleLikes(state){
      return state.likes * 2
    }
  },
  mutations: {                     // для изменения состояния используются мутации, функц. 
    incrementLikes(state){         // меняющие какое-то поле из состояния
      state.likes +=1
    },
    decrementLikes(state) {
      state.likes -=1
    }
  },
  actions: {                        // функции которые внутри себя используют мутации

  },
  modules: {

  }
})
