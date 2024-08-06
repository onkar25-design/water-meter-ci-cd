import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    // Perform any necessary logout logic here
    navigate('/'); // Navigate to EnterPassword page
  };

  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Inmac Digital</h1>
      <h2 className="text-lg">Water Meter Dashboard</h2>
      <div className="flex items-center">
        <span>Welcome, admin</span>
        <a
          href="#"
          className="ml-4 text-white underline"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleLogout(); // Call the handleLogout function
          }}
        >
          Logout
        </a>
      </div>
    </header>
  );
};

export default Header;
