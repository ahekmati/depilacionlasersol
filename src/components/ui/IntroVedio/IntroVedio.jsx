import MuxPlayer from "@mux/mux-player-react";
import React from "react";
import { Button } from "../button";
import Link from "next/link";

const IntroVedio = () => {
  return (
    <div className="">
      <div className="m-auto mt-20 cursor-pointer items-center rounded-xl border bg-transparent p-5 shadow-2xl shadow-slate-400 lg:w-[60%] lg:p-20">
        <MuxPlayer
          style={{
            width: "100%",
            height: "50%",
          }}
          streamType="on-demand"
          // The video you will create in Mux, take its playback ID and replace it here.
          playbackId="tOlz19U3v88aItzvLmOLiuYTA79bCLL8EZzytojRtJ00"
          metadata={{
            video_id: "video-id",
            video_title: "Intro Video",
            viewer_user_id: "user-id",
          }}
          autoPlay
        />

        {/* persona; information here */}

        <div className="space-y-5">
          {/* --------------------------name------------------- */}
          <div>
            <p className="text-lg">Name</p>
            <h1 className="border p-2">Florencia</h1>        
          </div>
          {/* ------------email------------------ */}
          <div>
            <p className="text-lg">Email</p>
            <h1 className="border p-2">depilacionlasersolba@gmail.com</h1>
          </div>
          {/* -----------------phone number----------- */}
          <div>
            <p className="text-lg">Phone</p>
            <h1 className="border p-2">+16463894825</h1>
          </div>
          {/* -----------------website-------------- */}
          <div>
            <p className="text-lg">Website</p>
            <Link href={"https://proppitch.com"}> 
              <h1 className="w-full border p-2">
                <www className="malabarhillcapital com"></www>
              </h1>
            </Link>
          </div>
          {/* ------------------Bio---------------- */}
          <div>
            <p className="text-lg">Bio</p>

            <h1 className="w-full border p-2">
            {" "}
          
            </h1>
          </div>
        </div>

       
        {/* End of form section */}
        <Link href="/vedio1">
          <Button
            type="submit"
            className="px-y mt-10 block h-[2.7rem] w-full border-2 border-black bg-black text-xl text-white hover:text-black"
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default IntroVedio;
