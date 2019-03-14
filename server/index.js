const grpc = require('grpc');
const calculators = require('./calculators')
const proto = grpc.load('proto/eligible_work.proto');
const server = new grpc.Server();

server.addProtoService(proto.eligible_work.EligibleCandidateForWorkService.service, {
 eligibleForWork(call, callback) {
    let eligibleScore = 0
    if (call.request.position == 'FE') {
      eligibleScore = calculators.calculate_eligible_score_for_fe(call.request.skills)
    } else if (call.request.position == 'BE') {
      eligibleScore = calculators.calculate_eligible_score_for_be(call.request.skills)
    } else {
      callback(new Error('Invalid position provided'));
    }

    if (eligibleScore > 10) {
      callback(null, {
        'name': call.request.name,
        'position': call.request.position,
        eligible: true,
        'total_score': eligibleScore
      });
    } else {
      callback(null, {
        'name': call.request.name,
        'position': call.request.position,
        eligible: false,
        'total_score': eligibleScore
      });
    }
  }
});

//Specify the IP and and port to start the grpc Server, no SSL in test environment
server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());

//Start the server
server.start();
console.log('grpc server running on port:', '0.0.0.0:50050');
