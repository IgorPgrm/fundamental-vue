import { createStore } from "vuex";

import { postModule } from "@/store/postModule";

export default createStore({
  state: {                         // состояние

  },
  getters: {                       // computed свойства, кешируемые\изменяемые значения

  },
  mutations: {                     // для изменения состояния используются мутации, функц. 
                                   // меняющие какое-то поле из состояния

  },
  actions: {                        // функции которые внутри себя используют мутации

  },
  modules: {
    post: postModule,
  }
})
