const grpc = require('grpc');

const protoPath = require('path').join(__dirname, '../..', 'proto');
const proto = grpc.load({root: protoPath, file: 'eligible_work.proto' });

//Create a new client instance that binds to the IP and port of the grpc server.
const client = new proto.eligible_work.EligibleCandidateForWorkService('localhost:50050', grpc.credentials.createInsecure());

const candidates = {
  candidate_1: {
    candidate_id: 1,
    name: 'Corç Kluni',
    position: "FE",
    skills: ["test", "vuejs", "fastify", "micro_frontend"]
  },
  candidate_2: {
    candidate_id: 2,
    name: 'Maykıl Ceksın',
    position: "FE",
    skills: ["test", "vuejs"]
  },
  candidate_3: {
    candidate_id: 3,
    name: 'Riçırd Stolmın',
    position: "BE",
    skills: ["rest", "rpc", "nosql", "docker", "kubernetes"]
  },
  candidate_4: {
    candidate_id: 4,
    name: 'Demet Akalın',
    position: "BE",
    skills: ["rpc"]
  }
}

client.eligibleForWork(candidates.candidate_4, (error, response) => {
  if (!error) {
    if (response.eligible) {
        console.log(response);
    } else {
      console.log(response);
    }
  } else {
    console.log("Error:", error.message);
  }
});
