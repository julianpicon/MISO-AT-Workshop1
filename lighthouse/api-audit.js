'use strict';

const Audit = require('lighthouse').Audit;

const MAX_REQUEST_TIME = 3000;

class ApiTimeAudit extends Audit {
    static get meta() {
        return {
            // Se agrega la propiedad "id"
            // El nombre de la propiedad "name" se reemplaza por "title"
            category: 'MyPerformance',
            id: 'api-audit',
            title: 'api-audit',
            scoreDisplayMode: "informative",
            scoreDisplayMode: Audit.SCORING_MODES.INFORMATIVE,
            description: 'Api time initialized and ready',
            failureTitle: 'API request requires more than 3 seconds',
            failureDescription: 'API request requires more than 3 seconds',
            helpText: 'Used to measure time to request ratp Api',
            requiredArtifacts: ['ApiRequest', 'traces', 'devtoolsLogs'],
            informative: true,

        };
    }

    static audit(artifacts, context) {
       /* const loadedTime = artifacts.ApiRequest;
        const belowThreshold = (MAX_REQUEST_TIME - loadedTime) / MAX_REQUEST_TIME;
        console.log(loadedTime);
        console.log(belowThreshold);
        return {
            rawValue: loadedTime,
            score: belowThreshold
        };*/

        const loadedTime = artifacts.ApiRequest;
        const belowThreshold = (MAX_REQUEST_TIME - loadedTime) / MAX_REQUEST_TIME;
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



module.exports = ApiTimeAudit;