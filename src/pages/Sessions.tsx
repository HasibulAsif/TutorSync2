import { useState } from 'react';
import { getUserSessions, updateSession } from '../utils/auth';
import { Session } from '../types/session';

export default function Sessions() {
  const [sessions, setSessions] = useState<Session[]>(getUserSessions());

  const handleCancelSession = (sessionId: string) => {
    updateSession(sessionId, { status: 'cancelled' });
    setSessions(getUserSessions());
  };

  const filterSessions = (status: Session['status']) => {
    return sessions.filter(session => session.status === status);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">My Sessions</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Upcoming Sessions</h2>
          {filterSessions('scheduled').length === 0 ? (
            <p className="text-white/60">No upcoming sessions</p>
          ) : (
            <div className="space-y-4">
              {filterSessions('scheduled').map((session) => (
                <div
                  key={session.id}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {session.subject}
                      </h3>
                      <p className="text-white/60">
                        {new Date(session.date).toLocaleDateString()} at {session.startTime}
                      </p>
                      <p className="text-white/60">
                        Duration: {session.duration} minutes
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleCancelSession(session.id)}
                        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm transition-colors"
                      >
                        Cancel
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm transition-colors">
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Completed Sessions</h2>
          {filterSessions('completed').length === 0 ? (
            <p className="text-white/60">No completed sessions</p>
          ) : (
            <div className="space-y-4">
              {filterSessions('completed').map((session) => (
                <div
                  key={session.id}
                  className="glass-card p-6 rounded-xl opacity-80"
                >
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {session.subject}
                  </h3>
                  <p className="text-white/60">
                    {new Date(session.date).toLocaleDateString()} at {session.startTime}
                  </p>
                  <p className="text-white/60">
                    Duration: {session.duration} minutes
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
