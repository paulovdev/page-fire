import { BrowserRouter } from 'react-router-dom';
import { AuthGoogleProvider } from './context/authGoogle'
import RouterApp from './routes/RouterApp';
import SideBar from './componentes/SideBar/SideBar';

const App = () => {

  return (
    <BrowserRouter>
      <AuthGoogleProvider>
        <SideBar />
        <RouterApp />
      </AuthGoogleProvider>
    </BrowserRouter>
  );
};

export default App;
