import Image from "next/image";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { feedVideos } from "./util/data";

export default function Home() {
  return (
    <div className="flex flex-col px-8 py-4 md:flex-row flex-wrap gap-10 lg:gap-4 flex-1">
      {feedVideos.map((video) => (
        <div className="flex flex-col gap-3 w-[340px]">
          <div className="">
            <Image
              src={video.thumbnailUrl}
              height={180}
              width={340}
              alt="thumbnail"
              className="rounded-lg"
            />
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
                height={40}
                width={40}
                alt="user image"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="font-semibold text-white max-w-[80%]">
                  {video.title}
                </span>
                <BsThreeDotsVertical />
              </div>
              <div className="text-sm text-zinc-400">
                <span>{video.channelName}</span>
                <div className="flex items-center">
                  <span>{video.viewCount}</span>
                  <BsDot />
                  <span>{video.createdAt.toDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
