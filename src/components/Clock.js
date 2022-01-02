import { useState, useEffect } from "react";
import Location from "./Location";
import getUserLocation from "../utils/getUserLocation";
import getTime from "../utils/getTime";

function Clock() {
  const [userInfo, setUserInfo] = useState({ ip: "", city: "", country: "" });
  const [time, setTime] = useState({ time: "", abbreviation: "" });

  useEffect(() => {
    async function userInfo() {
      const info = await getUserLocation();

      setUserInfo({
        ip: info.IP,
        city: info.city,
        country: info.country_code,
      });
    }

    async function time() {
      const data = await getTime();
      const event = new Date(data.datetime);
      const time = event.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setTime({ time: time, abbreviation: data.abbreviation });
    }

    userInfo();
    time();
  }, []);

  return (
    <div className="text-white">
      <h1 className="m-0 text-xl font-bold text-white uppercase">
        Good Morning, it's currently
      </h1>
      <p className="text-[250px] font-bold">
        {time.time}
        <span className="text-[75px]">{time.abbreviation}</span>
      </p>
      <div className="flex uppercase">
        <span className="pr-1">In</span>
        <Location city={userInfo.city} country={userInfo.country} />
      </div>
    </div>
  );
}

export default Clock;
