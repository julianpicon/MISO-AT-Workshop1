'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 2000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            // Se agrega la propiedad "id"
            // El nombre de la propiedad "name" se reemplaza por "title"
            category: 'MyPerformance',
            id: 'card-audit',
            scoreDisplayMode: "informative",
            scoreDisplayMode: Audit.SCORING_MODES.INFORMATIVE,
            title: 'card-audit',
            description: 'Schedule card initialized and ready ',
            failureTitle: 'Schedule Card slow to initialize',
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' card is shown.',
            informative: true,
            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToCard;

        const belowThreshold = (MAX_CARD_TIME - loadedTime) / MAX_CARD_TIME;
        const scoreNum = belowThreshold>0?1:0;
        console.log(loadedTime);
        console.log(belowThreshold);

        return {
            score: scoreNum,
            rawValue: loadedTime,
            displayValue: loadedTime.toFixed(3)+"ms",
        };
    }
}

module.exports = LoadAudit;

