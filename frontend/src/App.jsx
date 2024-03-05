import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomeScreen from './screens/HomeScreen'
import MyWorkScreen from './screens/MyWorkScreen'
import BlogScreen from './screens/BlogScreen'
import StoreScreen from './screens/StoreScreen'
import AffRefScreen from './screens/AffRefScreen'
import ProductDetailScreen from './screens/ProductDetailScreen.jsx'
import CartScreen from './screens/CartScreen.jsx'
import AdminScreen from './screens/AdminScreen'
import { AddNewBlog } from './screens/adminScreens/AddNewBlog'

function App() {
  return (
    <div className="min-h-screen w-full bg-primary font-arial tracking-wider text-primary md:bg-primary scroll-smooth">
      <div>
        <Router>
          <NavBar />

          <div className="font-medium md:pt-6">
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/my-work" element={<MyWorkScreen />} />
              <Route path="/blogs" element={<BlogScreen />} />
              <Route path="/aff-ref" element={<AffRefScreen />} />
              <Route path="/store" element={<StoreScreen />} />
              <Route path="/store/product" element={<ProductDetailScreen />} />
              <Route path="/store/cart" element={<CartScreen />} />
              <Route path="/admin" element={<AdminScreen />} />
              <Route path="/addNewBlog" element={<AddNewBlog />} />

            </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App
