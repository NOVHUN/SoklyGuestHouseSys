function initialState() {
  return {
    entry: {
      id: null,
      room_type_id: null,
      room_name: '',
      price_per_night: '',
      max_people: '',
      description: '',
      image_url: [],
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      room_type: []
    },
    loading: false
  }
}

const route = 'rooms'

const getters = {
  entry: state => state.entry,
  lists: state => state.lists,
  loading: state => state.loading
}

const actions = {
  storeData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      axios
        .post(route, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  updateData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      params.set('_method', 'PUT')
      axios
        .post(`${route}/${state.entry.id}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  setRoomType({ commit }, value) {
    commit('setRoomType', value)
  },
  setRoomName({ commit }, value) {
    commit('setRoomName', value)
  },
  setPricePerNight({ commit }, value) {
    commit('setPricePerNight', value)
  },
  setMaxPeople({ commit }, value) {
    commit('setMaxPeople', value)
  },
  setDescription({ commit }, value) {
    commit('setDescription', value)
  },
  insertImageUrlFile({ commit }, file) {
    commit('insertImageUrlFile', file)
  },
  removeImageUrlFile({ commit }, file) {
    commit('removeImageUrlFile', file)
  },
  setCreatedAt({ commit }, value) {
    commit('setCreatedAt', value)
  },
  setUpdatedAt({ commit }, value) {
    commit('setUpdatedAt', value)
  },
  setDeletedAt({ commit }, value) {
    commit('setDeletedAt', value)
  },
  fetchCreateData({ commit }) {
    axios.get(`${route}/create`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchEditData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      commit('setEntry', response.data.data)
      commit('setLists', response.data.meta)
    })
  },
  fetchShowData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  resetState({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setEntry(state, entry) {
    state.entry = entry
  },
  setRoomType(state, value) {
    state.entry.room_type_id = value
  },
  setRoomName(state, value) {
    state.entry.room_name = value
  },
  setPricePerNight(state, value) {
    state.entry.price_per_night = value
  },
  setMaxPeople(state, value) {
    state.entry.max_people = value
  },
  setDescription(state, value) {
    state.entry.description = value
  },
  insertImageUrlFile(state, file) {
    state.entry.image_url.push(file)
  },
  removeImageUrlFile(state, file) {
    state.entry.image_url = state.entry.image_url.filter(item => {
      return item.id !== file.id
    })
  },
  setCreatedAt(state, value) {
    state.entry.created_at = value
  },
  setUpdatedAt(state, value) {
    state.entry.updated_at = value
  },
  setDeletedAt(state, value) {
    state.entry.deleted_at = value
  },
  setLists(state, lists) {
    state.lists = lists
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  resetState(state) {
    state = Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
