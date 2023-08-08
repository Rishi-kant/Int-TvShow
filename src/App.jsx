
import HomeScreen from './screens/homeScreen/HomeScreen'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import ShowDetailScreen from './screens/showDetailScreen/ShowDetailScreen'
import Navbar from './components/navbar/Navbar'
function App() {

  return (
     <div>

       <Navbar/>
   
       <Routes>
         <Route path="/" element={<HomeScreen/>}/>
         <Route  path="/show/:id" element={<ShowDetailScreen/>}/>
       </Routes>
   
    </div>
  )
}

export default App
