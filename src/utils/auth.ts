import { Session } from '../types/session';

// Initialize default session data if none exists
const initializeSessionData = () => {
  if (!localStorage.getItem('userSessions')) {
    const defaultSessions: Session[] = [
      {
        id: '1',
        tutorId: '1',
        studentId: 'user123',
        date: '2024-03-20',
        startTime: '14:00',
        duration: 60,
        subject: 'Mathematics',
        status: 'scheduled'
      },
      {
        id: '2',
        tutorId: '2',
        studentId: 'user123',
        date: '2024-03-18',
        startTime: '15:00',
        duration: 90,
        subject: 'Physics',
        status: 'completed'
      }
    ];
    localStorage.setItem('userSessions', JSON.stringify(defaultSessions));
  }
};

// Initialize session data when the module loads
initializeSessionData();

export const getUserSessions = (): Session[] => {
  const sessions = localStorage.getItem('userSessions');
  return sessions ? JSON.parse(sessions) : [];
};

export const saveSession = (session: Session) => {
  const sessions = getUserSessions();
  sessions.push(session);
  localStorage.setItem('userSessions', JSON.stringify(sessions));
};

export const updateSession = (sessionId: string, updates: Partial<Session>) => {
  const sessions = getUserSessions();
  const index = sessions.findIndex(s => s.id === sessionId);
  if (index !== -1) {
    sessions[index] = { ...sessions[index], ...updates };
    localStorage.setItem('userSessions', JSON.stringify(sessions));
  }
};

// User role management
export const getUserRole = (): 'tutor' | 'student' => {
  const role = localStorage.getItem('userRole');
  return (role as 'tutor' | 'student') || 'student';
};

export const setUserRole = (role: 'tutor' | 'student') => {
  localStorage.setItem('userRole', role);
};

// Initialize role if not set
if (!localStorage.getItem('userRole')) {
  setUserRole('student');
}
