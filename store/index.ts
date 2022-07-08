import { Store } from 'vuex'
import Todo from '~/store/todo/index'

export function createStore() {
  return new Store({
    modules: {
      Todo
    },

  })
}

