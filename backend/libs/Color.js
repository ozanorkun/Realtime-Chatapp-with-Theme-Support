const redisClient = require("../clients/redis");

function Color() {
  this.client = redisClient.getClient();
}

module.exports = new Color();

Color.prototype.upsert = function (color) {
  this.client.set("color", JSON.stringify(color), (err) => {
    if (err) {
      console.error(err);
    }
  });
};

Color.prototype.list = function (callback) {
  this.client.get("color", function (err, color) {
    if (err) {
      console.error(err);
      return callback([]);
    }
    return callback(JSON.parse(color));
  });
};
