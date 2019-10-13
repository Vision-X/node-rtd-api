require('dotenv').config();

const fs = require('fs');
const path = require('path');
const btoa = require('btoa');
const fetch = require('node-fetch');
const express = require('express');
// const GtfsRealtimeBindings = 
let decode = require('gtfs-realtime-bindings').FeedMessage.decode;
// const decode = GtfsRealtimeBindings.FeedMessage.decode;
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
    let error = null;
    let feed;
    console.log("[[[   PARAMS   ]]]");
    console.log(params);

    fetch(URL, params)
      // .then(res => res.json())
      .then(res => {
        console.log(res.body);
        // var feed = GtfsRealtimeBindings.FeedMessage.decode(res.body);
        var binary = Buffer.concat(data).toString('base64');
        try {
          feed = decode(binary);
        } catch(e) {
          error = e.message
        } finally {
          console.log(e.message);
        }
        // var feed = decode(res.body)
        // feed.entity.forEach(function(entity) {
          // if (entity.trip_update) {
            // console.log(entity.trip_update);
          // }
        });
        console.log(feed);
      // });
});

// localhost development
const port = 8000;
app.listen(port, () => {
  console.log('listening on port ', port);
})
