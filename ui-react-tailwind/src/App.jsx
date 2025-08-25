import './App.css'
import { AuthProvider } from './context/AuthContext'
import MainRoutes from './routes/Index'

function App() {
  return (
    <>
      <AuthProvider>
        <MainRoutes/>
      </AuthProvider>
    </>
  )
}

export default App
