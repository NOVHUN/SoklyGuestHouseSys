function initialState() {
  return {
    entry: {
      id: null,
      customer: '',
      phone_number: '',
      booking_day: '',
      slect_room: [],
      select_service: [],
      total_price: '',
      status: 'pending',
      promotion_id: null,
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      slect_room: [],
      select_service: [],
      status: [],
      promotion: []
    },
    loading: false
  }
}

const route = 'bookings'

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
  setCustomer({ commit }, value) {
    commit('setCustomer', value)
  },
  setPhoneNumber({ commit }, value) {
    commit('setPhoneNumber', value)
  },
  setBookingDay({ commit }, value) {
    commit('setBookingDay', value)
  },
  setSlectRoom({ commit }, value) {
    commit('setSlectRoom', value)
  },
  setSelectService({ commit }, value) {
    commit('setSelectService', value)
  },
  setTotalPrice({ commit }, value) {
    commit('setTotalPrice', value)
  },
  setStatus({ commit }, value) {
    commit('setStatus', value)
  },
  setPromotion({ commit }, value) {
    commit('setPromotion', value)
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
  setCustomer(state, value) {
    state.entry.customer = value
  },
  setPhoneNumber(state, value) {
    state.entry.phone_number = value
  },
  setBookingDay(state, value) {
    state.entry.booking_day = value
  },
  setSlectRoom(state, value) {
    state.entry.slect_room = value
  },
  setSelectService(state, value) {
    state.entry.select_service = value
  },
  setTotalPrice(state, value) {
    state.entry.total_price = value
  },
  setStatus(state, value) {
    state.entry.status = value
  },
  setPromotion(state, value) {
    state.entry.promotion_id = value
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
