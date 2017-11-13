'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_RESPONSE_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'cardResponse-audit',
            description: 'Schedule card Response is ready',
            failureDescription: 'Schedule Card Response from API slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' card is read from the API.',

            requiredArtifacts: ['TimeToResponse']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToResponse;

        const belowThreshold = loadedTime <= MAX_CARD_RESPONSE_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = LoadAudit;