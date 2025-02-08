import Login  from '../Components/Login'; //
import AuthProvider from 'react-auth-kit'; 
import createStore from 'react-auth-kit/createStore';
import LoginPage from '../pages/LoginPage';
import Footer from '../layout/Footer';
import HomePage from '../pages/HomePage';
import {RouterProvider} from "react-router-dom";
import router from "../routes/AppRoutes";
const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});
function App() {
  return (
    <AuthProvider store={store}>
    <RouterProvider router={router} />
  </AuthProvider>
  );
}

export default App;



