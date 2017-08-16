var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://127.0.0.1:1883');

client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Hello mqtt');
  client.publish('presence', 'Hello mqtt111');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
