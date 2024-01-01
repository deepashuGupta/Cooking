import { LOGO_URL } from "../utils/constant";

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-48 bg-black bg-opacity-70 px-40 py-4 text-white">
      <div>
        <div className="flex mb-2">
          <img className="w-10 mr-4" src={LOGO_URL} alt="logo_img" />
          <span>
            <h3 className="text-md font-bold">Cooking</h3>
            <p className="text-sm opacity-70">Healthy Food</p>
          </span>
        </div>
        <p className="text-sm opacity-70">© 2023 Dummy Technologies Pvt. Ltd</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>Contact</h1>
        <span>
          <p>Email : support@cooking.com</p>
          <p>Phone : +1 (0) 000 0000 001</p>
          <p>Fax : +1 (0) 000 0000 002</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
