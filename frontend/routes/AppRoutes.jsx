// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';
// import DashboardPage from '../pages/DashboardPage';
// import ContactsPage from '../pages/ContactsPage';
// import ProfilePage from '../pages/ProfilePage';
// import Login from "../pages/Login";
// import ProtectedRoute from "../components/ProtectedRoute";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/contacts" element={<ContactsPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import ContactsPage from '../pages/ContactsPage';
import ProfilePage from '../pages/ProfilePage';
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
return ( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Login />} />

        <Route
            path="/dashboard"
            element={
                <ProtectedRoute>
                <DashboardPage />
                </ProtectedRoute>
            }
        />

            <Route
                path="/contacts"
                element={
                <ProtectedRoute>
                <ContactsPage />
                </ProtectedRoute>
            }
        />

            <Route
                path="/profile"
                element={
                <ProtectedRoute>
                <ProfilePage />
                </ProtectedRoute>
            }
        />

            <Route
                path="/register"
                element={<RegisterPage />}
            />

  </Routes>
</BrowserRouter>

);
}

export default AppRoutes;
