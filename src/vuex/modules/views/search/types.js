const prefix = 'SEARCH_VIEW'

const ACTIONS = {
  SET: 'SET',
  GET: 'GET',
  ADD: 'ADD'
}

function getFieldStr (prefix, action, propertyName) {
  return (`${prefix}/STATE/${action}_${propertyName}`)
}

const TYPES = {
  STATE: {
    MAX_PRICE: {
      SET: getFieldStr(prefix, ACTIONS.SET, 'MAX_PRICE'),
      GET: getFieldStr(prefix, ACTIONS.GET, 'MAX_PRICE')
    },
    MIN_RATING: {
      SET: getFieldStr(prefix, ACTIONS.SET, 'MIN_RATING'),
      GET: getFieldStr(prefix, ACTIONS.GET, 'MIN_RATING')
    },
    DISTANCE: {
      SET: getFieldStr(prefix, ACTIONS.SET, 'DISTANCE'),
      GET: getFieldStr(prefix, ACTIONS.GET, 'DISTANCE')
    },
    LIST: {
      SET: getFieldStr(prefix, ACTIONS.SET, 'LIST'),
      ADD: getFieldStr(prefix, ACTIONS.ADD, 'LIST'),
      GET: getFieldStr(prefix, ACTIONS.GET, 'LIST')
    }
  }
}

export default TYPES
