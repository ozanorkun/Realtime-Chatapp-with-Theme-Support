const _ = require("lodash");
const { nanoid } = require("nanoid");
const redisClient = require("../clients/redis");

function Messages() {
  this.client = redisClient.getClient();
}

module.exports = new Messages();

Messages.prototype.upsert = function (messagePackage) {
  let time = Date.now();
  this.client.hset(
    "messages",
    nanoid(5),
    JSON.stringify(_.assignIn(messagePackage, { when: time })),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
};

Messages.prototype.list = function (callback) {
  let messageList = [];

  this.client.hgetall("messages", function (err, messagePackage) {
    if (err) {
      console.error(err);
      return callback([]);
    }

    for (let message in messagePackage) {
      messageList.push(JSON.parse(messagePackage[message]));
    }

    return callback(_.orderBy(messageList, "when", "asc"));
  });
};
