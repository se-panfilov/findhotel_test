import TYPES from './types'

const getters = {
  [TYPES.STATE.MAX_PRICE.GET]: (state) => state.current.maxPrice,
  [TYPES.STATE.MIN_RATING.GET]: (state) => state.current.minRating,
  [TYPES.STATE.DISTANCE.GET]: (state) => state.current.distance,
  [TYPES.STATE.LIST.GET]: (state) => state.current.list
}

export default getters
