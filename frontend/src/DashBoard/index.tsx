import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import date from "date-and-time";
import { getTimePickerToolbarUtilityClass } from "@mui/x-date-pickers/TimePicker/timePickerToolbarClasses";
import internal from "stream";
import {
  CartesianGrid,
  Legend,
  LineChart,
  Pie,
  Line,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Link } from "react-router-dom";

interface IDashboard {
  isLoggedIn: boolean;
  setIsLoggedIn: any;
}

interface IHTTPResponse {
  missing: string[];
  pass: boolean;
  dat: { t: number; i: number };
  img: string;
}

interface ILineData {
  time: number;
  fail: number;
}

const tempdata: IHTTPResponse[] = []

const DashBoard: React.FC<IDashboard> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [goodData, setGoodData] = useState<IHTTPResponse[]>([]);
  const [badData, setBadData] = useState<IHTTPResponse[]>([]);
  const [date, setDate] = useState<Dayjs>(dayjs().set('hour', 0).set('minute', 0).set('second', 0));

  useEffect(() => {
    fetch("http://localhost:8000/GetGood")
    .then((response) => response.json())
    .then((data) => setGoodData(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/GetBad")
    .then((response) => response.json())
    .then((data) => setBadData(data))
  }, []);

  let unixDate;

  unixDate = date.valueOf();
  console.log(date);
  console.log(unixDate);

  const filteredGood = [];

  for(let i = 0; i < goodData.length; ++i) {
    if (goodData[i].dat.i >= unixDate && goodData[i].dat.i < unixDate + (86399 * 1000)) {
      filteredGood.push(goodData[i]);
    }
  }

  const filteredBad = []

  for(let i = 0; i < badData.length; ++i) {
    if (badData[i].dat.i >= unixDate && badData[i].dat.i < unixDate + (86399 * 1000)) {
      filteredBad.push(badData[i]);
    }
  }


  let lineData: ILineData[] = [];

  for (let i = 0; i < 24; ++i) {
    let fails = 0;
    for (let j = 0; j < badData.length; ++j) {
      if (
        badData[j]?.dat?.i >= unixDate &&
        badData[j]?.dat?.i < unixDate + 3600 &&
        badData[j].pass == false
      ) {
        fails++;
      }
    }
    var newDate = new Date(unixDate * 1000);
    lineData.push({ time: newDate.getHours(), fail: fails });
    unixDate += 3600;
  }

  function compare(a: any, b: any) {
    if (a.time < b.time) {
      return -1;
    }
    if (a.time > b.time) {
      return 1;
    }
    return 0;
  }

  lineData.sort(compare);

  console.log(lineData);

  ///////////GETTING DATA FOR PIE GRAPH////////f/////////
  var allMissing: string[] = [];
  for (let i = 0; i < badData.length; ++i) {
    for (let j = 0; j < badData[i].missing.length; ++j) {
      allMissing.push(badData[i].missing[j]);
    }
  }

  var parts: string[] = [];
  for (let i = 0; i < allMissing.length; ++i) {
    if (!parts.includes(allMissing[i])) {
      parts.push(allMissing[i]);
    }
  }

  var pieData: { name: string; value: number }[] = [];

  for (let i = 0; i < parts.length; ++i) {
    let num = 0;
    for (let j = 0; j < allMissing.length; ++j) {
      if (parts[i] == allMissing[j]) {
        num++;
      }
    }
    pieData.push({ name: parts[i], value: num });
  }

  return (
    <div className="h-[90vh] flex-col">
      <div className="h-[80%] mt-2">
        <div className="mx-8">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select date"
              value={date}
              onChange={(newValue) => {
                if (newValue) {
                  setDate(newValue.set('hour', 0).set('minute', 0).set('second', 0));
                }
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="grid h-1/2 grid-cols-3 gap-4 my-4 mx-8">
          <div className="col-span-2 border border-grey-300">
            <div className="font-bold text-lg p-2">
              Number of fails per hour
            </div>
            <LineChart
              width={800}
              height={250}
              data={lineData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="fail"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
          <div className="col-span-1 border border-grey-300">
            <div className="font-bold text-lg p-2">
              Number of each component missing
            </div>
            <div className="px-28 py-4">
              <PieChart width={200} height={200}>
                <Pie
                  dataKey="value"
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                />
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>
        <div className="grid h-1/2 grid-cols-2 mx-8 my-4 gap-4">
          <div className="col-span-1 border border-grey-300">
            
          </div>
          <div className="col-span-1 border border-grey-300">asdasdasd</div>
        </div>
      </div>
    </div>
  );
};

interface IPics {
  link: string;
  name: string;
}

const ResultPics: React.FC<IPics> = ({link, name}) => {
  return (
    <div className="flex">
      <a href={link}>{name}</a>
    </div>
  )
}


export default DashBoard;
