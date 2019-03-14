const scores = require('./scores')

const calculators = {
    calculate_eligible_score_for_fe: (skills) => {
        let eligibleScore = 0
        if (skills.includes("test")) {
            eligibleScore += scores.test
        }

        if (skills.includes("vuejs")) {
            eligibleScore += scores.vuejs
        }

        if (skills.includes("fastify")) {
            eligibleScore += scores.fastify
        }

        if (skills.includes("micro_frontend")) {
            eligibleScore += scores.micro_frontend
        }

        if (skills.includes("ui/ux")) {
            eligibleScore += scores["ui/ux"]
        }

        return eligibleScore
    },
    calculate_eligible_score_for_be: (skills) => {
        let eligibleScore = 0
        if (skills.includes("rest")) {
            eligibleScore += scores.rest
        }

        if (skills.includes("rpc")) {
            eligibleScore += scores.rpc
        }

        if (skills.includes("nosql")) {
            eligibleScore += scores.nosql
        }

        if (skills.includes("docker")) {
            eligibleScore += scores.docker
        }

        if (skills.includes("kubernetes")) {
            eligibleScore += scores.kubernetes
        }
        return eligibleScore
    }
}

module.exports = calculators
