import { useState, useEffect } from "react";
import Location from "./Location";
import getUserLocation from "../utils/getUserLocation";

export default function Time() {
  const [userInfo, setUserInfo] = useState({ ip: "", city: "", country: "" });

  useEffect(() => {
    async function userInfo() {
      const info = await getUserLocation();

      setUserInfo({
        ip: info.IP,
        city: info.city,
        country: info.country_code,
      });
    }

    userInfo();
  }, []);

  return (
    <div>
      <h1 className="text-[200px] font-bold text-white">{userInfo.country}</h1>
      <Location city={userInfo.city} country={userInfo.country} />
    </div>
  );
}
