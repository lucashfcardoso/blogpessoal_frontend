
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import './App.css'
  import Footer from './components/Footer/footer'
  import Navbar from './components/Navbar/navbar'
  import Home from './paginas/home/home'
import Login from './paginas/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './paginas/cadastro/Cadastro'

  function App() {
    return (
      <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar/>
            <div className='min-h-[80vh]'>

               <Routes>
                 <Route path="/" element = {<Home/>}/>
                 <Route path="/home" element = {<Home/>}/>
                 <Route path="/cadastro" element = {<Cadastro/>}/>
                 <Route path="/login" element = {<Login/>}/>
                </Routes>
          
             </div>
          <Footer/>
      </BrowserRouter>
    </AuthProvider>
      </>
    )
  }

  export default App
