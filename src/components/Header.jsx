import { useState, useEffect } from 'react';
import logo from "../assets/logo.png";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date()); // Update the date every minute
    }, 60000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col gap-1 my-10">
      <div className="logo mb-1">
        <img className="mx-auto my-1 w-1/4" src={logo} alt="Logo" />
      </div>
      <p className="text-center text-gray-500">Journalism Without Fear or Favour</p>
      <p className="text-center text-gray-800">
        <span className="font-bold">{formatDate(currentDate)}</span>
      </p>
    </div>
  );
};

export default Header;
