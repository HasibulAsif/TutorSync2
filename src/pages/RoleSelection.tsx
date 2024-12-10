import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users } from 'lucide-react';

export default function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelect = (role: 'student' | 'tutor') => {
    localStorage.setItem('selectedRole', role);
    navigate('/register');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Join TutorSync</h1>
        <p className="text-xl text-white/70">Choose how you want to use TutorSync</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <button
          onClick={() => handleRoleSelect('student')}
          className="glass-card p-8 rounded-xl text-left hover:scale-105 transition-transform group"
        >
          <Users className="w-12 h-12 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
          <h2 className="text-2xl font-bold text-white mb-2">I'm a Student</h2>
          <p className="text-white/70">
            Find expert tutors and elevate your learning journey
          </p>
          <ul className="mt-6 space-y-2 text-white/60">
            <li>• Access to qualified tutors</li>
            <li>• Personalized learning experience</li>
            <li>• Flexible scheduling</li>
          </ul>
        </button>

        <button
          onClick={() => handleRoleSelect('tutor')}
          className="glass-card p-8 rounded-xl text-left hover:scale-105 transition-transform group"
        >
          <GraduationCap className="w-12 h-12 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
          <h2 className="text-2xl font-bold text-white mb-2">I'm a Tutor</h2>
          <p className="text-white/70">
            Share your expertise and grow your teaching practice
          </p>
          <ul className="mt-6 space-y-2 text-white/60">
            <li>• Set your own schedule</li>
            <li>• Build your student base</li>
            <li>• Earn competitive rates</li>
          </ul>
        </button>
      </div>
    </div>
  );
}
