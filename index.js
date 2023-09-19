const client = require("./connection.js");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = 8080;
app.use(cors());
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

client.connect();
app.get("/dis_acc", (req, res) => {
  client.query(
    `Select distinct account_number from meterreadings`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

//get reading count
client.connect();
app.get("/count/:id", (req, res) => {
  client.query(
    `Select count(*) from meterreadings where account_number=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

//get account history
client.connect();
app.get("/account/:id", (req, res) => {
  client.query(
    `Select * from meterreadings where account_number=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

//get last reading date
client.connect();
app.get("/date/:id", (req, res) => {
  client.query(
    `Select max(timestamp) from meterreadings where account_number=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

// add meter
app.post("/addmeter", (req, res) => {
  var datetime = new Date().toJSON();
  // let now = new Date();
  // let year = now.getFullYear();
  // let month = String(now.getMonth() + 1).padStart(2, "0"); // zero-padded month
  // let day = String(now.getDate()).padStart(2, "0"); // zero-padded day
  // let hours = String(now.getHours()).padStart(2, "0"); // zero-padded hours
  // let minutes = String(now.getMinutes()).padStart(2, "0"); // zero-padded minutes
  // let seconds = String(now.getSeconds()).padStart(2, "0"); // zero-padded seconds
  // let milliseconds = String(now.getMilliseconds()).padStart(3, "0"); // zero-padded milliseconds
  // let formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;

  console.log(datetime);
  const meterreadings = req.body;
  let timestamp = datetime;
  console.log(meterreadings);
  let insertQuery = `insert into meterreadings(account_number, meter_readings, timestamp) values('${meterreadings.account_number}', '${meterreadings.meter_readings}', 
  '${timestamp}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Added");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//counting  avarage
let latest_Data1 = [];
let latest_Data2 = [];
let meter_Reading1 = [];
let meter_Reading2 = [];
let time_Stamp1 = [];
let time_Stamp2 = [];
let unit_Count = [];
let hour_Count = [];
let day_Count = [];
let daily_Consumption = [];
let daily_Avarage = [];

client.connect();
app.get("/unit/:id", (req, res) => {
  client.query(
    `Select * from meterreadings where account_number=${req.params.id} order by timestamp desc limit 2`,
    (err, result) => {
      if (!err) {
        (latest_Data1 = result.rows[0]),
          (latest_Data2 = result.rows[1]),
          (meter_Reading1 = latest_Data1.meter_readings), // get previous meter reading
          (meter_Reading2 = latest_Data2.meter_readings), // get last meter reading
          (time_Stamp1 = latest_Data1.timestamp), // get previous time stamps
          (time_Stamp2 = latest_Data2.timestamp), // get latest time stamps
          (hour_Count = (time_Stamp1 - time_Stamp2) / (1000 * 60 * 60)), // get hour count
          (day_Count = (time_Stamp1 - time_Stamp2) / (1000 * 60 * 60 * 24)), // get day count
          (unit_Count = meter_Reading1 - meter_Reading2), // get unit count
          (daily_Consumption = (unit_Count / hour_Count) * 24), // get daily consumption
          (daily_Avarage = daily_Consumption / day_Count); // get daily avarage
        let json = { daily_Avarage }; // convert to array
        let daily_Avarage_json = [json]; // convert
        res.send(daily_Avarage_json); // daily avarage as json type
      }
    }
  );

  client.end;
});

//latest_Data1, // all previous meter reading data
//latest_Data2, // all latest meter reading data
// meter_Reading1, // previous meter reading
// meter_Reading2, // last meter reading
// time_Stamp1, // previous time stamp
// time_Stamp2, // last time stamp
// hour_Count, //hour count
// day_Count, //day count
// unit_Count, // unit count
// daily_Consumption, // daily consumption
