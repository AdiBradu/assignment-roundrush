import React from 'react';
import './App.css';
import './styles/reset.css';

//Material UI
import { ThemeProvider } from '@mui/material';
import theme from './styles/themeCustomization';

//Routing
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes/routes';
const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
