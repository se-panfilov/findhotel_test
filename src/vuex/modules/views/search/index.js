import types from './types'
import actions from './actions'
import getters from './getters'

const SORTING_TYPES = {
  price: {
    name: 'price',
    type: 'number'
  },
  name: {
    name: 'name',
    type: 'string'
  }
}

const state = {
  current: {
    filters: {
      maxPrice: 0,
      minRating: 0,
      distance: 0
    },
    sorting: SORTING_TYPES.price,
    sortingTypes: SORTING_TYPES,
    list: []
  }
}

const mutations = {
  [types.STATE.MAX_PRICE.SET] (state, price) {
    state.current.filters.maxPrice = price
  },
  [types.STATE.MIN_RATING.SET] (state, rating) {
    state.current.filters.minRating = rating
  },
  [types.STATE.DISTANCE.SET] (state, distance) {
    state.current.filters.distance = distance
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
  },
  [types.STATE.SORTING.SET] (state, sorting) {
    if (!SORTING_TYPES[sorting]) throw new Error('Invalid sorting type')
    state.current.sorting = Object.assign({}, SORTING_TYPES[sorting])
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  types
}
