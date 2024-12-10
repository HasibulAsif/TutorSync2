import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setUserRole } from '../utils/auth';

export default function Register() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const selectedRole = localStorage.getItem('selectedRole') as 'student' | 'tutor';

  useEffect(() => {
    if (!selectedRole) {
      navigate('/role-selection');
    }
  }, [selectedRole, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    setUserRole(selectedRole);
    const redirectPath = selectedRole === 'tutor' ? '/dashboard/tutor' : '/dashboard/student';
    return <Navigate to={redirectPath} replace />;
  }

  const handleSignUp = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
      },
      appState: {
        returnTo: selectedRole === 'tutor' ? '/dashboard/tutor' : '/dashboard/student'
      }
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="glass-card p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h1>
        <p className="text-white/70 text-center mb-8">
          Join TutorSync as a {selectedRole} to {selectedRole === 'student' ? 'start learning' : 'start teaching'}.
        </p>
        <button
          onClick={handleSignUp}
          className="w-full py-3 px-6 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
        >
          Sign Up
        </button>
        <p className="text-white/60 text-center mt-4 text-sm">
          Already have an account?{' '}
          <button
            onClick={() => loginWithRedirect({
              appState: { 
                returnTo: selectedRole === 'tutor' ? '/dashboard/tutor' : '/dashboard/student'
              }
            })}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
