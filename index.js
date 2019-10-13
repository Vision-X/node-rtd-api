require('dotenv').config();

const fs = require('fs');
const path = require('path');
const btoa = require('btoa');
const fetch = require('node-fetch');
const express = require('express');
const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const app = express();

const morgan = require('morgan');
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'morgan-reqs.log'), { flags: 'a' })
}))

app.get("/", function() {
    let URL = "http://www.rtd-denver.com/google_sync/VehiclePosition.pb";
    let params = {
      method: 'GET',
      headers: {
        'Authorization': `Basic ` + btoa(unescape(encodeURIComponent(`${process.env.USERNAME}:${process.env.PASSWORD}`))),
      }
    };

    console.log("[[[   PARAMS   ]]]");
    console.log(params);

    fetch(URL, params)
      .then(res => res.json())
      .then(res => {
        console.log(res.body);
        var feed = GtfsRealtimeBindings.FeedMessage.decode(res.body);
        feed.entity.forEach(function(entity) {
          if (entity.trip_update) {
            console.log(entity.trip_update);
          }
        });
      });
});

// localhost development
const port = 8000;
app.listen(port, () => {
  console.log('listening on port ', port);
})
