import TYPES from './types'

const actions = {
  [TYPES.STATE.MAX_PRICE.SET]: ({commit}, price) => {
    commit(TYPES.STATE.MAX_PRICE.SET, price)
  },
  [TYPES.STATE.MIN_RATING.SET]: ({commit}, rating) => {
    commit(TYPES.STATE.MIN_RATING.SET, rating)
  },
  [TYPES.STATE.DISTANCE.SET]: ({commit}, distance) => {
    commit(TYPES.STATE.DISTANCE.SET, distance)
  },
  [TYPES.STATE.LIST.SET]: ({commit}, list) => {
    commit(TYPES.STATE.LIST.SET, list)
  },
  [TYPES.STATE.LIST.ADD]: ({commit}, item) => {
    commit(TYPES.STATE.LIST.ADD, item)
  },
  [TYPES.STATE.ITEM_LIKE.SET]: ({commit}, {item, isLike}) => {
    commit(TYPES.STATE.ITEM_LIKE.SET, {item, isLike})
  },
  [TYPES.STATE.SORTING.SET]: ({commit}, sorting) => {
    commit(TYPES.STATE.SORTING.SET, sorting)
  }
}

export default actions
