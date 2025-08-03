import React, { useState, useEffect } from "react";
import teamLogo1 from "../assets/images/team-logo-1.png";
import teamLogo2 from "../assets/images/team-logo-2.png";
import teamLogo3 from "../assets/images/team-logo-3.png";
import teamLogo4 from "../assets/images/team-logo-4.png";
import teamLogo5 from "../assets/images/team-logo-5.png";
import teamLogo6 from "../assets/images/team-logo-6.png";
import { TiSocialYoutube } from "react-icons/ti";
import { PiTwitchLogoBold } from "react-icons/pi";

function Matches() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function parseDateTime(isoString) {
    const date = new Date(isoString);

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; // Convert "0" to "12"

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    setTime(`${hours}:${minutes} ${ampm}`);
    setDate(`${year}-${month}-${day}`);
  }

  useEffect(() => {
    const isoString = "2023-10-15T14:30:00Z";
    parseDateTime(isoString);
  }, []);

  return (
    <section
      id="matches"
      className="flex-col justify-center items-center  w-[100dvw] h-auto "
    >
      <div className="py-12 px-5 md:px-40 lg:px-64">
        <p className="uppercase mb-2 font-robert-regular text-foreground ">
          upcomming matches
        </p>
        <h1 className="sub-heading mb-5 ">
          Where Legends will <span className="font-MyFont">Collide</span>
        </h1>
        {/* list of upcomming matches  */}
        <div className="flex  justify-center items-center  w-full h-[14vmax] mb-6 ">
          <div className="relative w-[45%] md:w-[40%]   h-full   ">
            <div className="rounded-xl absolute right-0 bottom-0 z-20  h-[70%] w-full [clip-path:polygon(0_0,69%_0,100%_100%,0%_100%)] bg-secondary/70  ">
              <div className="absolute bottom-0 left-0 p-2 md:p-4">
                <h3 className=" font-general font-bold capitalize text-white text-[2vmax]  ">
                  Crimson Vipers
                </h3>
                <p className=" text-white font-robert-regular text-[0.7vmax] ">
                  Summer Showdown | match 02f
                </p>
              </div>
            </div>
            <img
              src={teamLogo1}
              alt="#teamLogo"
              className="w-[60] h-[60%] absolute top-0 left-0 z-30 object-contain"
            />
          </div>
          <div className="flex flex-col h-full justify-end pb-5 gap-1 items-center ">
            <p className="text-[0.9vmax] text-green-400 mb-1 font-bold">ongoing</p>
            <h1 className="text-[2vw]    font-robert-regular text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] tracking-widest">
              {time}
            </h1>
            <p className="font-robert-regular bold text-[0.7vmax]">{date}</p>
            <TiSocialYoutube className="  w-6    h-6  md:w-7  md:h-7   transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" />
          </div>
          <div className="relative w-[45%] md:w-[40%] h-full   ">
            <div className="rounded-xl absolute left-0 bottom-0 z-20  h-[70%] w-full [clip-path:polygon(31%_0,100%_0,100%_100%,0%_100%)] bg-secondary/70  ">
              <div className="absolute bottom-0 right-0 p-2 md:p-4 ">
                <h3 className=" font-general font-bold capitalize text-white text-[2vmax]">
                  Night wolves{" "}
                </h3>
                <p className=" text-white font-robert-regular text-right text-[0.7vmax]">
                  Summer Showdown | match 004g
                </p>
              </div>
            </div>
            <img
              src={teamLogo2}
              alt="#teamLogo"
              className="w-[60] h-[60%] absolute top-0 right-0  z-30 object-contain"
            />
          </div>
        </div>
        {/* 2 */}
        <div className="flex  justify-center items-center  w-full h-[14vmax] mb-6 ">
          <div className="relative w-[45%] md:w-[40%]   h-full  ">
            <div className="rounded-xl absolute right-0 bottom-0 z-20  h-[70%] w-full [clip-path:polygon(0_0,69%_0,100%_100%,0%_100%)] bg-secondary/70  ">
              <div className="absolute bottom-0 left-0 p-2 md:p-4">
                <h3 className=" font-general font-bold capitalize text-white text-[2vmax]  ">
                  Crimson Vipers
                </h3>
                <p className=" text-white font-robert-regular text-[0.7vmax] ">
                  Summer Showdown | match 02f
                </p>
              </div>
            </div>
            <img
              src={teamLogo4}
              alt="#teamLogo"
              className="w-[60] h-[60%] absolute top-0 left-0 z-30 object-contain"
            />
          </div>
          <div className="flex flex-col h-full justify-end pb-5 gap-1 items-center ">
             <p className="text-[0.9vmax] text-blue-700 mb-1 font-bold">upcomming</p>
            <h1 className="text-[2vw]    font-robert-regular text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] tracking-widest">
              {time}
            </h1>
            <p className="font-robert-regular bold text-[0.7vmax]">{date}</p>
            <TiSocialYoutube className="  w-6    h-6  md:w-7  md:h-7   transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" />
          </div>
          <div className="relative w-[45%] md:w-[40%] h-full   ">
            <div className=" rounded-xl absolute left-0 bottom-0 z-20  h-[70%] w-full [clip-path:polygon(31%_0,100%_0,100%_100%,0%_100%)] bg-secondary/70  ">
              <div className="absolute bottom-0 right-0 p-2 md:p-4 ">
                <h3 className=" font-general font-bold capitalize text-white text-[2vmax]">
                  Night wolves{" "}
                </h3>
                <p className=" text-white font-robert-regular text-right text-[0.7vmax]">
                  Summer Showdown | match 004g
                </p>
              </div>
            </div>
            <img
              src={teamLogo3}
              alt="#teamLogo"
              className="w-[60] h-[60%] absolute top-0 right-0  z-30 object-contain"
            />
          </div>
        </div>
        {/* 3 */}
        <div className="flex  justify-center items-center  w-full h-[14vmax] mb-6 ">
          <div className="relative w-[45%] md:w-[40%]   h-full  ">
            <div className="rounded-xl absolute right-0 bottom-0 z-20  h-[70%] w-full [clip-path:polygon(0_0,69%_0,100%_100%,0%_100%)] bg-secondary/70  ">
              <div className="absolute bottom-0 left-0 p-2 md:p-4">
                <h3 className=" font-general font-bold capitalize text-white text-[2vmax]  ">
                  Crimson Vipers
                </h3>
                <p className=" text-white font-robert-regular text-[0.7vmax] ">
                  Summer Showdown | match 02f
                </p>
              </div>
            </div>
            <img
              src={teamLogo5}
              alt="#teamLogo"
              className="w-[60] h-[60%] absolute top-0 left-0 z-30 object-contain"
            />
          </div>
          <div className="flex flex-col h-full justify-end pb-5 gap-1 items-center ">
             <p className="text-[0.9vmax] text-red-500 mb-1 font-bold">Finished</p>
            <h1 className="text-[2vw]    font-robert-regular text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] tracking-widest">
              {time}
            </h1>
            <p className="font-robert-regular bold text-[0.7vmax]">{date}</p>

            <TiSocialYoutube className="  w-6    h-6  md:w-7  md:h-7   transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" />
          </div>
          <div className="relative w-[45%] md:w-[40%] h-full   ">
            <div className="rounded-xl absolute left-0 bottom-0 z-20  h-[70%] w-full [clip-path:polygon(31%_0,100%_0,100%_100%,0%_100%)] bg-secondary/70  ">
              <div className="absolute bottom-0 right-0 p-2 md:p-4 ">
                <h3 className=" font-general font-bold capitalize text-white text-[2vmax]">
                  Night wolves{" "}
                </h3>
                <p className=" text-white font-robert-regular text-right text-[0.7vmax]">
                  Summer Showdown | match 004g
                </p>
              </div>
            </div>
            <img
              src={teamLogo6}
              alt="#teamLogo"
              className="w-[60] h-[60%] absolute top-0 right-0  z-30 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Matches;
