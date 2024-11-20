// layouts/MainLayout.tsx

import React, { PropsWithChildren } from 'react';
import Navbar from '../pages/navbar';

const MainLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
