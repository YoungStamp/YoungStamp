import { formatAgo } from "./FormatAgo.ts";
import { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "@/Components/YouTube/Youtube.scss";
import "@/Components/Modal/Modal.scss";
export default function( {video}:YoutubeType ) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const { isVisible, show, hide } = useModal();

  const handleClick = () => {
    show();
  };
  return (
    <>
      <li className={'video-items'}>
        <img
          className={"thumbnail"}
          onClick={handleClick}
          src={thumbnails.medium.url} alt={title} />
        <div>
          <p className={'title'}>{title}</p>
          <div className={'content-box'}>
            <p className={'channel-title'}>{channelTitle}</p>
            <p className={'make-date'}>{formatAgo(publishedAt, "ko")}</p>
          </div>
        </div>
      </li>
      {isVisible && (
        <div className={"modal-overlay"}
             style={{display: isVisible? "flex" : "none"}}>
          <div className="modal-window">
            {viewYoutube(video)}
          <button
            className="modal-close"
            onClick={hide}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

function useModal() {
  const [isVisible, setIsVisible] = useState(false);
  function show() {
    setIsVisible(true);
  }
  function hide() {
    setIsVisible(false);
  }
  return { isVisible, show, hide };
}

function viewYoutube( video:YoutubeType ) {
  const opts: YouTubeProps["opts"] = {
    height: "540",
    width: "600",
    playerVars: {
      autoplay: 1
    }
  };
  return (
        <YouTube videoId={video.id} opts={opts}  />
  );
}

interface YoutubeType {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId?: string;
  };
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
  };
}