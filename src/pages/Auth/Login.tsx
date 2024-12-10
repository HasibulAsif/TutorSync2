import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserRole } from '../../utils/auth';

export default function Login() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();
  const userRole = getUserRole();
  const from = location.state?.from?.pathname || `/dashboard/${userRole}`;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleLogin = () => {
    loginWithRedirect({
      appState: { returnTo: from }
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="glass-card p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h1>
        <button
          onClick={handleLogin}
          className="w-full py-3 px-6 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
        >
          Log In
        </button>
        <p className="text-white/60 text-center mt-4 text-sm">
          Don't have an account?{' '}
          <a
            href="/role-selection"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
