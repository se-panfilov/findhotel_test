import TYPES from './types'

const getters = {
  [TYPES.STATE.MAX_PRICE.GET]: (state) => state.current.filters.maxPrice,
  [TYPES.STATE.MIN_RATING.GET]: (state) => state.current.filters.minRating,
  [TYPES.STATE.DISTANCE.GET]: (state) => state.current.filters.distance,
  [TYPES.STATE.LIST.GET]: (state) => state.current.list,
  [TYPES.STATE.SORTING.GET]: (state) => state.current.sorting,
  [TYPES.STATE.SORTING_TYPES.GET]: (state) => state.current.sortingTypes
}

export default getters
