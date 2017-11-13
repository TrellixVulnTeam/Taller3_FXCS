'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToResponse extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.cardResponseTime')
            .then(cardResponseTime => {
                if (!cardResponseTime) {

                    throw new Error('Unable to find card load metrics in page');
                }
                return cardResponseTime;
            });
    }
}

module.exports = TimeToResponse;