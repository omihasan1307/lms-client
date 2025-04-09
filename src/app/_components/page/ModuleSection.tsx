"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiPlay,
  FiClock,
  FiLock,
  FiCheckCircle,
} from "react-icons/fi";

type Lecture = {
  _id: string;
  title: string;
  duration?: string;
  videoUrl?: string;
  isCompleted?: boolean;
  isLocked?: boolean;
};

type Module = {
  _id: string;
  title: string;
  moduleNumber: number;
  lectures: Lecture[];
  createdAt: string;
  updatedAt: string;
};

const ModuleSection = ({ modulesData }: { modulesData: any }) => {
  const modules: Module[] = modulesData?.data || [];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState<string | null>(null);

  // Sort modules by moduleNumber
  const sortedModules = [...modules].sort(
    (a, b) => a.moduleNumber - b.moduleNumber
  );

  const [selectedModuleId, setSelectedModuleId] = useState<string>(
    sortedModules[0]?._id || ""
  );

  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const [expandedLectures, setExpandedLectures] = useState<{
    [key: string]: boolean;
  }>(() => {
    const initial: { [key: string]: boolean } = {};
    sortedModules.forEach((module) => {
      initial[module._id] = module._id === sortedModules[0]?._id;
    });
    return initial;
  });

  const toggleModule = (moduleId: string) => {
    setExpandedLectures((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
    setSelectedModuleId(moduleId);
  };

  const handleLectureSelect = (lecture: Lecture) => {
    if (lecture.isLocked) return;
    setSelectedLecture(lecture);
    setIsVideoPlaying(false);
    setVideoError(null);
  };

  useEffect(() => {
    if (selectedLecture?.videoUrl && videoRef.current) {
      // Reset video state
      videoRef.current.pause();
      videoRef.current.currentTime = 0;

      // Set new source
      videoRef.current.src = selectedLecture.videoUrl;
      videoRef.current.load();

      // Try to play (may be blocked by browser)
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPlaying(true);
            setVideoError(null);
          })
          .catch((error) => {
            console.log("Auto-play was prevented:", error);
            // Don't show error to user - they can click play manually
          });
      }
    }
  }, [selectedLecture]);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    let errorMsg = "Video playback error";

    if (video.error) {
      switch (video.error.code) {
        case video.error.MEDIA_ERR_ABORTED:
          errorMsg = "Video playback was aborted";
          break;
        case video.error.MEDIA_ERR_NETWORK:
          errorMsg = "Network error loading video";
          break;
        case video.error.MEDIA_ERR_DECODE:
          errorMsg = "Error decoding video";
          break;
        case video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errorMsg = "Video format not supported";
          break;
        default:
          errorMsg = "Unknown video error";
      }
    }

    setVideoError(errorMsg);
    console.error("Video error:", errorMsg, video.error);
  };

  const calculateTotalDuration = (lectures: Lecture[] = []) => {
    const totalMinutes = lectures.reduce((acc, lecture) => {
      if (lecture.duration) {
        const [minutes, seconds] = lecture.duration.split(":").map(Number);
        return acc + minutes + seconds / 60;
      }
      return acc;
    }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);

    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  const selectedModule = sortedModules.find(
    (module) => module._id === selectedModuleId
  );

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Module List */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">
                Course Modules
              </h2>
              <p className="text-gray-500 mt-1">
                {sortedModules.length} modules •{" "}
                {sortedModules.reduce(
                  (acc, module) => acc + (module.lectures?.length || 0),
                  0
                )}{" "}
                lectures
              </p>
            </div>

            <div className="divide-y divide-gray-100">
              {sortedModules.map((module) => (
                <div key={module._id} className="group">
                  <div
                    className={`flex justify-between items-center p-4 cursor-pointer transition-colors ${
                      selectedModuleId === module._id
                        ? "bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => toggleModule(module._id)}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-medium">
                          {module.moduleNumber}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                    {expandedLectures[module._id] ? (
                      <FiChevronDown className="text-gray-400 group-hover:text-gray-600" />
                    ) : (
                      <FiChevronRight className="text-gray-400 group-hover:text-gray-600" />
                    )}
                  </div>

                  {expandedLectures[module._id] && (
                    <div className="pl-16 pr-4 pb-3 space-y-2">
                      {module.lectures?.map((lecture) => (
                        <div
                          key={lecture._id}
                          className={`flex items-center p-2 rounded-md text-sm ${
                            lecture.isLocked
                              ? "text-gray-400 cursor-not-allowed"
                              : "text-gray-700 hover:bg-gray-100 cursor-pointer"
                          } ${
                            selectedLecture?._id === lecture._id
                              ? "bg-blue-50 border border-blue-100"
                              : ""
                          }`}
                          onClick={() => handleLectureSelect(lecture)}
                        >
                          {lecture.isCompleted ? (
                            <FiCheckCircle className="mr-2 text-green-500" />
                          ) : lecture.isLocked ? (
                            <FiLock className="mr-2" />
                          ) : (
                            <FiPlay className="mr-2 text-blue-500" />
                          )}
                          <span className="truncate">{lecture.title}</span>
                          {lecture.duration && (
                            <span className="ml-auto text-xs text-gray-500 whitespace-nowrap">
                              {lecture.duration}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Lecture Details */}
        <div className="lg:w-2/3">
          {selectedModule ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedModule.title}
                </h2>
                <div className="flex items-center mt-2 text-gray-500">
                  <FiClock className="mr-1" />
                  <span className="text-sm">
                    {selectedModule.lectures?.length || 0} lectures • Total
                    duration: {calculateTotalDuration(selectedModule.lectures)}
                  </span>
                </div>
              </div>

              {/* Video Player Section */}
              {selectedLecture?.videoUrl && (
                <div className="p-4 border-b border-gray-100">
                  <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
                    <video
                      ref={videoRef}
                      src={selectedLecture?.videoUrl}
                      controls
                      className="absolute top-0 left-0 w-full h-full"
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                      onError={handleVideoError}
                      onCanPlay={() => console.log("Video can play!")}
                      onCanPlayThrough={() =>
                        console.log("Video can play through!")
                      }
                      onWaiting={() =>
                        console.log("Video waiting for buffer...")
                      }
                      onStalled={() => console.log("Video stalled!")}
                      onEmptied={() => console.log("Video source emptied!")}
                    >
                      <source
                        src={selectedLecture?.videoUrl}
                        type="video/mp4"
                      />
                      Your browser does not support HTML5 video.
                    </video>

                    {videoError && (
                      <div className="absolute inset-0 bg-red-50 flex flex-col items-center justify-center p-4">
                        <p className="text-red-600 font-medium">{videoError}</p>
                        <a
                          href={selectedLecture?.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 text-blue-600 underline"
                        >
                          Try opening video directly
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {selectedLecture.title}
                    </h3>
                    {selectedLecture.duration && (
                      <p className="text-gray-500 mt-1">
                        Duration: {selectedLecture.duration}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Lectures List */}
              <div className="divide-y divide-gray-100">
                {selectedModule.lectures?.map((lecture) => (
                  <div
                    key={lecture._id}
                    className={`p-4 transition-colors ${
                      lecture.isLocked
                        ? "bg-gray-50 cursor-not-allowed"
                        : "hover:bg-gray-50 cursor-pointer"
                    } ${
                      selectedLecture?._id === lecture._id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => handleLectureSelect(lecture)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {lecture.isCompleted ? (
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                            <FiCheckCircle className="text-green-500" />
                          </div>
                        ) : lecture.isLocked ? (
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                            <FiLock className="text-gray-400" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                            <FiPlay className="text-blue-500 text-xs" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3
                          className={`font-medium ${
                            lecture.isLocked ? "text-gray-500" : "text-gray-800"
                          }`}
                        >
                          {lecture.title}
                        </h3>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <FiClock className="mr-1" />
                          <span>
                            {lecture.duration || "No duration specified"}
                          </span>
                          {lecture.isLocked && (
                            <span className="ml-auto text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                              Locked
                            </span>
                          )}
                          {selectedLecture?._id === lecture._id &&
                            isVideoPlaying && (
                              <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                                Playing
                              </span>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                No modules available
              </h3>
              <p className="text-gray-500">There are no modules to display</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleSection;
