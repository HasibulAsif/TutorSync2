import { NavLink, useNavigate } from 'react-router-dom';
import { GraduationCap, UserCircle } from 'lucide-react';
import { getUserRole } from '../utils/auth';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
  const navigate = useNavigate();
  const userRole = getUserRole();
  const { isAuthenticated, logout, user } = useAuth0();

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? 'text-white bg-white/10'
        : 'text-white/70 hover:text-white hover:bg-white/10'
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-white">
            <GraduationCap className="w-8 h-8" />
            <span className="text-xl font-bold">TutorSync</span>
          </NavLink>
          
          <nav className="flex items-center gap-2">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/tutors" className={navLinkClasses}>
              Tutors
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
            
            {isAuthenticated && (
              <>
                <NavLink 
                  to={`/dashboard/${userRole}`} 
                  className={navLinkClasses}
                >
                  Dashboard
                </NavLink>
                <NavLink to="/sessions" className={navLinkClasses}>
                  Sessions
                </NavLink>
              </>
            )}
            
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <img
                  src={user?.picture}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={() => logout({
                    logoutParams: {
                      returnTo: window.location.origin
                    }
                  })}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => navigate('/role-selection')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors"
                >
                  <UserCircle className="w-5 h-5" />
                  Sign Up
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
