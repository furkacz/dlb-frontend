import types from './mutation-types';

export default {
  [types.SET_IMAGE](state, payload) {
    state.image = payload;
  },
  [types.SET_TAGS](state, payload) {
    state.tags = payload;
  },
};
