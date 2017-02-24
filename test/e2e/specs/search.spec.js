const elements = {
  maxPriceRange: 'section#max_price_range input[type=range]',
  minRatingRange: 'section#min_rating_range input[type=range]',
  distanceRange: 'section#distance_range input[type=range]',
  sortingSelect: 'select[name=sorting]',
  items: 'section[class="item items-list__item"]'
}

function initPage (browser) {
  const devServer = browser.globals.devServerURL

  browser
    .url(devServer)
    .pause(200)

  return browser
}

module.exports = {
  'default state': function (browser) {
    browser = initPage(browser)
    browser.expect.element(elements.sortingSelect).to.be.present.before(1000)

    browser.expect.element(elements.maxPriceRange).to.be.a('input')
    browser.expect.element(elements.minRatingRange).to.be.a('input')
    browser.expect.element(elements.distanceRange).to.be.a('input')
    browser.expect.element(elements.sortingSelect).to.be.a('select')

    browser.end()
  },
  'get data': function (browser) {
    browser = initPage(browser)

    browser.pause(10)

    browser.assert.elementCount(elements.items, 15)

    browser.end()
  }
}
