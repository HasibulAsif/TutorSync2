import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { getUserRole } from '../utils/auth';

interface PrivateRouteProps {
  children: ReactNode;
  allowedRole?: 'tutor' | 'student';
}

export default function PrivateRoute({ children, allowedRole }: PrivateRouteProps) {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();
  const userRole = getUserRole();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRole && userRole !== allowedRole) {
    return <Navigate to={`/dashboard/${userRole}`} replace />;
  }

  return <>{children}</>;
}
