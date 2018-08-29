'use strict';

const Gatherer = require('lighthouse').Gatherer;

class ApiRequest extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.APIRequestTime')
            .then(APIRequestTime => {
                if (!APIRequestTime) {
                    throw new Error('Unable to find card load metrics in page');
                }
                return APIRequestTime;
            });
    }
}

module.exports = ApiRequest;