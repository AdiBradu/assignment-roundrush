import './App.css';
import './styles/reset.css';

//Material UI
import { ThemeProvider } from '@mui/material';
import theme from './styles/themeCustomization';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import { protectedRoutes, publicRoutes } from './routes/routes';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// const router = createBrowserRouter(routes);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Routes>
              <Route element={<PrivateRoutes />}>
                {protectedRoutes.map((route, index) => (
                  <Route
                    key={index}
                    element={route.element}
                    path={route.path}
                  />
                ))}
              </Route>
              {publicRoutes.map((route, index) => (
                <Route key={index} element={route.element} path={route.path} />
              ))}
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
