import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="font-inter bg-white text-gray-900">
      {children}
    </div>
  );
};

export default MainLayout;