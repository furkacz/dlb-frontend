import api from '@/api';
import types from './mutation-types';
// import initialState from './state';

export default {
  setImage({ commit, state }, file) {
    if (state !== '') URL.revokeObjectURL(state);
    const url = URL.createObjectURL(file);
    commit(types.SET_IMAGE, url);
  },
  setTags({ commit }, value) {
    commit(types.SET_TAGS, value);
  },
  async sendImageToGetTagged({ commit }, file) {
    const requestData = file;
    const response = await api.Tag(requestData, file);
    commit(types.SET_TAGS, response);
  },
};
