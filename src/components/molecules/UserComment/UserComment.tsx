/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ProfileIcon } from "@/components/atoms/ProfileIcon/ProfileIcon";
import { TextLine } from "@/components/atoms/TextLine/TextLine";
import React from "react";

interface IUserComment {
  user: string;
  url: string;
  text: string;
  likes: string;
  repliesCount: number;
}

export const UserComment: React.FC<IUserComment> = ({
  user,
  url,
  text,
  likes,
  repliesCount,
}) => {
  return (
    <div className="flex items-start gap-2">
      <ProfileIcon src={url} />
      <div>
        <TextLine text={user} className="text-sm font-semibold" />
        <TextLine className="flex items-start gap-2" />
        <ProfileIcon src={url} />
        <div>
          <TextLine text={user} className="text-sm font-semibold" />
          <TextLine text={text} className="text-gray-700" />
          <div className="flex items-center gap-4 text-gray-600 text-sm mt-1">
            <button className="flex items-center gap-1 hover:text-blue-500">
              <img src="/assets/icons/thumb_up.png" /> {likes}
            </button>
            <button className="hover:underline">{repliesCount} replies</button>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-600 text-sm mt-1">
          <button className="flex items-center gap-1 hover:text-blue-500">
            <img src="/assets/icons/thumb_up.png" /> {likes}
          </button>
          <button className="hover:underline">{repliesCount} replies</button>
        </div>
      </div>
    </div>
  );
};
