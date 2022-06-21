import {Routes,Route}  from "react-router-dom"
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Dashboard from './Views/Dashboard';
import Sidebar from './Layouts/Sidebar';
import Navigationbar from "./Layouts/Navbar";
const {Content } = Layout;
function App() {
  
  return (
    <>
     <Layout style={{ minHeight: '100vh', }}>
        <Sidebar/>
        <Navigationbar/>
        <Content  style={{ margin: '0 16px', }} >
          <Routes>
           <Route path='/' element={<Dashboard/>}/>
          </Routes>
        </Content>
    </Layout>
    </>
  );
}

export default App;
