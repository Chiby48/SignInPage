import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { mainRoute } from './routes/mainRoutes';

function App() {
  return (
    <div>
      <RouterProvider router={mainRoute} />
    </div>
  );
}

export default App;
