import MuxPlayer from "@mux/mux-player-react";

const page = () => {
  return (
    <div>
      <MuxPlayer
        style={{
          width: "100%",
          height: "50%",
        }}
        streamType="on-demand"
        // The video you will create in Mux, take its playback ID and replace it here.
        playbackId="2Lcg8w01iyLWAe3Bb00zRbz22ssiEYq7rx6101P700H2YUM"
        metadata={{
          video_id: "video-id",
          video_title: "Intro Video",
          viewer_user_id: "user-id",
        }}
        autoPlay
      />
    </div>
  );
};

export default page;
