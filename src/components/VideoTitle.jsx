const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg w-1/4 py-6">{description}</p>
      <div>
        <button className="bg-gray-500 px-6 py-2 rounded-lg text-xl font-bold text-white bg-opacity-50">▶️ Play</button>
        <button className="bg-gray-500 px-6 py-2 rounded-lg text-xl font-bold mx-2 text-white bg-opacity-50">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
