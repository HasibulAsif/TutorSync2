import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tutors from './pages/Tutors';
import TutorProfile from './pages/TutorProfile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RoleSelection from './pages/Auth/RoleSelection';
import TutorDashboard from './pages/Dashboard/TutorDashboard';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import Sessions from './pages/Sessions';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import PrivateRoute from './components/PrivateRoute';

// Updated Auth0 configuration
const AUTH0_DOMAIN = "dev-0abcdefg.us.auth0.com"; // Replace with your Auth0 domain
const AUTH0_CLIENT_ID = "your-client-id"; // Replace with your Auth0 client ID

function App() {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="tutors" element={<Tutors />} />
              <Route path="tutors/:id" element={<TutorProfile />} />
              <Route path="login" element={<Login />} />
              <Route path="role-selection" element={<RoleSelection />} />
              <Route path="register" element={<Register />} />
              <Route path="dashboard">
                <Route
                  path="tutor"
                  element={
                    <PrivateRoute allowedRole="tutor">
                      <TutorDashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="student"
                  element={
                    <PrivateRoute allowedRole="student">
                      <StudentDashboard />
                    </PrivateRoute>
                  }
                />
                <Route index element={<Navigate to="/dashboard/student" replace />} />
              </Route>
              <Route
                path="sessions"
                element={
                  <PrivateRoute>
                    <Sessions />
                  </PrivateRoute>
                }
              />
              <Route path="404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Auth0Provider>
  );
}

export default App;
