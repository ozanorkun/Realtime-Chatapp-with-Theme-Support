const redis = require("redis");

const getClient = () => {
  return redis.createClient({
    host: "ec2-54-75-41-243.eu-west-1.compute.amazonaws.com",
    port: 15279,
    password:
      "pce645556c0992b06d88179b144aa6bcd9a1b414c5be10ad0ebbeb1f5006552bb",
  });
};

module.exports.getClient = getClient;
