import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Predictions from './pages/Predictions/Predictions.jsx'
import Leaderboard from './pages/Leaderboard/Leaderboard.jsx'
import Friends from './pages/Friends/Friends.jsx'
import Profile from './pages/Profile/Profile.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
