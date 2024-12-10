import { useAuth0 } from '@auth0/auth0-react';
import { Calendar, Users, Clock, BookOpen } from 'lucide-react';
import { getUserSessions } from '../../utils/auth';
import { Link } from 'react-router-dom';

export default function TutorDashboard() {
  const { user } = useAuth0();
  const sessions = getUserSessions();
  const upcomingSessions = sessions.filter(s => s.status === 'scheduled');

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      label: 'Active Students',
      value: '12'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-400" />,
      label: 'Total Sessions',
      value: sessions.length.toString()
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      label: 'Hours Taught',
      value: `${sessions.reduce((acc, session) => acc + session.duration / 60, 0).toFixed(1)}`
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Tutor Dashboard</h1>
        <div className="flex items-center gap-4">
          <img
            src={user?.picture}
            alt={user?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-white font-medium">{user?.name}</p>
            <p className="text-white/60 text-sm">{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="glass-card p-6 rounded-xl">
            {stat.icon}
            <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Upcoming Sessions</h2>
          <Link
            to="/sessions"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            View all
          </Link>
        </div>

        {upcomingSessions.length === 0 ? (
          <p className="text-white/60">No upcoming sessions</p>
        ) : (
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between p-4 rounded-lg bg-white/5"
              >
                <div>
                  <p className="text-white font-medium">{session.subject}</p>
                  <p className="text-white/60">
                    {new Date(session.date).toLocaleDateString()} at {session.startTime}
                  </p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm transition-colors">
                  Start Session
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="glass-card p-6 rounded-xl">
        <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors text-left">
            <Calendar className="w-6 h-6 mb-2 text-purple-400" />
            <h3 className="font-medium mb-1">Update Availability</h3>
            <p className="text-sm text-white/60">Set your teaching schedule</p>
          </button>
          <button className="p-4 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors text-left">
            <Users className="w-6 h-6 mb-2 text-purple-400" />
            <h3 className="font-medium mb-1">Student Requests</h3>
            <p className="text-sm text-white/60">View and respond to requests</p>
          </button>
        </div>
      </div>
    </div>
  );
}
