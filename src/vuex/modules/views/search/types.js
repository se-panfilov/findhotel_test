const prefix = 'SEARCH_VIEW'

const ACTIONS = {
  SET: 'SET',
  GET: 'GET',
  ADD: 'ADD'
}

function getFieldStr (prefix, action, propertyName) {
  return (`${prefix}/STATE/${action}_${propertyName}`)
}

const TYPES = {}

function addType (name, type) {
  TYPES.STATE = TYPES.STATE || {}
  TYPES.STATE[name] = TYPES.STATE[name] || {}
  TYPES.STATE[name][type] = TYPES.STATE[name][type] || {}
  TYPES.STATE[name][type] = getFieldStr(prefix, type, name)
}

addType('MAX_PRICE', ACTIONS.SET)
addType('MAX_PRICE', ACTIONS.GET)
addType('MIN_RATING', ACTIONS.SET)
addType('MIN_RATING', ACTIONS.GET)
addType('DISTANCE', ACTIONS.SET)
addType('DISTANCE', ACTIONS.GET)
addType('LIST', ACTIONS.SET)
addType('LIST', ACTIONS.ADD)
addType('LIST', ACTIONS.GET)
addType('ITEM_LIKE', ACTIONS.SET)

export default TYPES
