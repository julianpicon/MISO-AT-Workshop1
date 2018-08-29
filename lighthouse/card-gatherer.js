'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToCard extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.cardLoadTime')
            .then(cardLoadTime => {
                if (!cardLoadTime) {

                    throw new Error('Unable to find card load metrics in page');
                }
                return cardLoadTime;
            });
    }
}

class TimeToPage extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.pageLoadTime')
            .then(pageLoadTime => {
                if (!pageLoadTime) {

                    throw new Error('Unable to find card load metrics in page');
                }
                return pageLoadTime;
            });
    }
}

module.exports = TimeToCard;