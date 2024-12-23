/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

interface Comment {
  id: number;
  user: string;
  text: string;
  likes: number;
  replies: Reply[];
  url?: string;
}

interface Reply {
  id: number;
  user: string;
  text: string;
  likes: number;
}

const commentsData: Comment[] = [
  {
    id: 1,
    user: "@tbc9096",
    text: "So does this mean Trump is the only man to have won an argument with a woman twice now? 😂",
    likes: 19000,
    replies: [],
    url: "/assets/icons/Avatar1.png",
  },
  {
    id: 2,
    user: "@BuddyGalts",
    text: "Thank the Amish in Pennsylvania for voting for the first time ever!!!!",
    likes: 31000,
    replies: [],
    url: "/assets/icons/Avatar2.png",
  },
  {
    id: 3,
    user: "@rmjonsson",
    text: "Who else was sleeping then woke up to see if Trump won? 😂",
    likes: 17000,
    replies: [],
    url: "/assets/icons/Avatar3.png",
  },
  {
    id: 4,
    user: "@Route66-cg5wm",
    text: "I love this man so much. Thank you for voting for him Americans...",
    likes: 31,
    replies: [
      {
        id: 1,
        user: "@valeriewarren9337",
        text: "I registered to vote 🗳️ just to get him elected.",
        likes: 4,
      },
    ],
    url: "/assets/icons/Avatar4.png",
  },
];

export default function CommentSection() {
  const [sortBy, setSortBy] = useState<"Top comments" | "Newest first">(
    "Top comments"
  );

  const toggleSort = () => {
    setSortBy(sortBy === "Top comments" ? "Newest first" : "Top comments");
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 border border-gray-200 rounded-md">
      {/* Comments Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          {commentsData.length} Comments
        </h2>
        <div>
          <button
            onClick={toggleSort}
            className="flex items-center gap-2 border px-3 py-1 rounded hover:bg-gray-100"
          >
            Sort by: <span className="font-bold">{sortBy}</span>
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {commentsData.map((comment) => (

          <div key={comment.id} className="space-y-1">
            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="ml-12 mt-2 space-y-3">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex items-start gap-2">
                    <div className="rounded-full bg-gray-300 w-8 h-8 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">{reply.user}</p>
                      <p className="text-gray-700">{reply.text}</p>
                      <button className="flex items-center gap-1 text-gray-600 text-sm hover:text-blue-500">
                        {/* <ThumbsUpIcon/>   */}
                        <img src="/assets/icons/thumb_up.png" />
                        {reply.likes}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
