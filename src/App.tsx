// import {
//   // createBrowserRouter,
//   // RouterProvider,
//   BrowserRouter,
//   Routes,
//   Route
// } from 'react-router-dom'

// import Header from './components/Header'
// import { GlobalCss } from './styles'
// import Home from './pages/Home'
// import Categories from './pages/Categories'

// const Rotas = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/categories" element={<Categories />} />
//   </Routes>
// )

// function App() {
//   return (
//     <BrowserRouter>
//       <GlobalCss />
//       <div className="container">
//         <Header />
//       </div>
//       <Rotas />
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
