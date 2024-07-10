// src/components/MainContent.js
import React, { useState } from "react";

export default function MainContent() {
  const [caption, setCaption] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    facebook: false,
    twitter: false,
    instagram: false,
    linkedin: false,
  });
  const [schedule, setSchedule] = useState(false);
  const [scheduledTime, setScheduledTime] = useState("");

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handlePlatformChange = (e) => {
    const { name, checked } = e.target;
    setSelectedPlatforms((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleScheduleChange = (e) => {
    setSchedule(e.target.checked);
  };

  const handleScheduledTimeChange = (e) => {
    setScheduledTime(e.target.value);
  };

  const handlePublish = () => {
    // Handle the publish action here
    console.log("Caption:", caption);
    console.log("Selected Platforms:", selectedPlatforms);
    console.log("Schedule Post:", schedule);
    if (schedule) {
      console.log("Scheduled Time:", scheduledTime);
    }
  };

  return (
    <main className="flex-1 p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Welcome to SM-Manager</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>
        <p className="mb-4">Publish your content across all your connected social media platforms.</p>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-2 font-medium">Choose Image:</label>
            <input type="file" className="block w-full text-sm text-gray-600" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Write Caption:</label>
            <textarea
              className="w-full p-2 border rounded-md"
              value={caption}
              onChange={handleCaptionChange}
              placeholder="Write your caption here..."
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 font-medium">Select Platforms:</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="facebook"
                  checked={selectedPlatforms.facebook}
                  onChange={handlePlatformChange}
                />
                Facebook
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="twitter"
                  checked={selectedPlatforms.twitter}
                  onChange={handlePlatformChange}
                />
                Twitter
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="instagram"
                  checked={selectedPlatforms.instagram}
                  onChange={handlePlatformChange}
                />
                Instagram
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="linkedin"
                  checked={selectedPlatforms.linkedin}
                  onChange={handlePlatformChange}
                />
                LinkedIn
              </label>
            </div>
          </div>
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={schedule}
                onChange={handleScheduleChange}
              />
              Schedule Post
            </label>
            {schedule && (
              <div className="mt-2">
                <label className="block mb-2 font-medium">Select Date & Time:</label>
                <input
                  type="datetime-local"
                  value={scheduledTime}
                  onChange={handleScheduledTimeChange}
                  className="p-2 border rounded-md w-full"
                />
              </div>
            )}
          </div>
          <button
            onClick={handlePublish}
            className="self-start bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            {schedule ? "Schedule" : "Publish"}
          </button>
        </div>
      </div>
    </main>
  );
}
