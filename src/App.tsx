//Styles
import './App.css';
import './styles/reset.css';
//Material UI
import { ThemeProvider } from '@mui/material';
import theme from './styles/themeCustomization';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { protectedRoutes, publicRoutes } from './routes/routes';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Key generator
import uniqid from 'uniqid';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Routes>
              <Route element={<PrivateRoutes />}>
                {protectedRoutes.map((route) => (
                  <Route key={route.path} element={route.element} path={route.path}>
                    {route.children?.map((route) => (
                      <Route key={uniqid()} element={route.element} path={route.path} />
                    ))}
                  </Route>
                ))}
              </Route>
              {publicRoutes.map((route) => (
                <Route key={route.path} element={route.element} path={route.path}>
                  {route.children?.map((route) => (
                    <Route key={uniqid()} element={route.element} path={route.path} />
                  ))}
                </Route>
              ))}
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
};
