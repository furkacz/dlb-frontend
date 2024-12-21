import { createStore } from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

import Tag from './modules/Tag';
import AppState from './modules/AppState';

export default createStore({
  modules: {
    Tag,
    AppState,
  },
  // plugins: [
  //   createPersistedState({
  //     paths: ['Add', 'Search'],
  //     storage: window.sessionStorage,
  //   }),
  // ],
});
