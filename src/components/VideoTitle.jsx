const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-6 md:px-16 md:px-24 absolute text-white opacity-90">
      <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      <p className="text-lg w-1/4 py-6 hidden md:inline-block">{description}</p>
      <div className="mt-4 md:mt-0">
        <button className="bg-white px-4 py-2 md:px-6 md:py-2 rounded-lg text-xl font-bold text-black cursor-pointer bg-gradient-to-r from-black hover:opacity-90">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-400 px-6 py-2 text-xl mx-2 cursor-pointer bg-gradient-to-l from-black hover:opacity-90">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
