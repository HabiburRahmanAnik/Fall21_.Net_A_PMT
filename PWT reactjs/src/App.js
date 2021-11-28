import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CreatePrjectFrom from './components/pages/CreatePrjectFrom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import OpenProject from './components/pages/OpenProject';
import  AuthContext, { AuthContextProvider } from './store/auth-context';

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/openProject" element={<OpenProject />} />
          <Route path="/createProject" element={<CreatePrjectFrom />} />
        </Routes>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
