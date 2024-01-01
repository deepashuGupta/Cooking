const About = () => {
  return (
    <>
      <div className="w-6/12 bg-gray-300 m-auto mt-4 rounded-md px-4 py-2">
        <h1 className="font-semibold text-xl">Info About This Project</h1>
        <ul className="my-2">
          <li>➡️ Fetch the data in real time from swiggy API</li>
          <li>➡️ Search for Your Favorite Reastaurants</li>
          <li>➡️ Add/Remove Your Items To Your Cart</li>
          <li>➡️ Open Status Of The Restaurant</li>
        </ul>
        <div className="flex items-center">
          <h1 className="font-medium">Tech Used : </h1>
          <p className="bg-red-600 py-1 px-4 mx-2 rounded-md text-white">
            React
          </p>

          <p className="bg-yellow-600 py-1 px-4 mx-2 rounded-md text-white">
            Parcel
          </p>
          <p className="bg-green-600 py-1 px-4 mx-2 rounded-md text-white">
            Jest
          </p>
          <p className="bg-blue-600 py-1 px-4 mx-2 rounded-md text-white">
            TailWind
          </p>
          <p className="bg-black py-1 px-4 mx-2 rounded-md text-white">
            Redux ToolKit
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
