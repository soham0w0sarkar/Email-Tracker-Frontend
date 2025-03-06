import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import TrackedEmailsPage from "./pages/TrackedEmail";
import AnalyticsPage from "./pages/Analytics"
import ProfilePage from "./pages/Profile"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/trackedemail" element={<TrackedEmailsPage/>}/>
        <Route path="/Analytics" element={<AnalyticsPage/>}/>
        <Route path="/Pages" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
