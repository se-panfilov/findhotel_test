import types from './types'
import actions from './actions'
import getters from './getters'

const state = {
  current: {
    maxPrice: 0,
    minRating: 0,
    distance: 0,
    list: []
  }
}

const mutations = {
  [types.STATE.MAX_PRICE.SET] (state, price) {
    state.current.maxPrice = price
  },
  [types.STATE.MIN_RATING.SET] (state, rating) {
    state.current.minRating = rating
  },
  [types.STATE.DISTANCE.SET] (state, distance) {
    state.current.distance = distance
  },
  [types.STATE.LIST.SET] (state, list) {
    state.current.list = [...list]
  },
  [types.STATE.LIST.ADD] (state, item) {
    state.current.list.push(item)
  },
  [types.STATE.ITEM_LIKE.SET] (state, {item, isLike}) {
    const index = state.current.list.findIndex((elem, index, arr) => elem.name === item.name)
    state.current.list[index].isLike = !!isLike
    // Bad practice, cause 'JSON.parse' can affect dates
    state.current.list = JSON.parse(JSON.stringify(state.current.list))
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  types
}
