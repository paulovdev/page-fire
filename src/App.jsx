import { BrowserRouter } from 'react-router-dom';
import RouterApp from '../RouterApp';
import SideBar from './componentes/SideBar/SideBar'

const App = () => {

  return (
    <BrowserRouter>
      {/*       <Login /> */}

      <SideBar />
      <RouterApp />

    </BrowserRouter>
  )
}

export default App
