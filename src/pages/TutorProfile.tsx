import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Calendar, Mail, Star, Clock, BookOpen, Award, DollarSign } from 'lucide-react';
import { Tutor } from '../types/tutor';
import { sampleTutors } from '../utils/sampleData';

export default function TutorProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tutor, setTutor] = useState<Tutor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTutor = () => {
      setLoading(true);
      try {
        const foundTutor = sampleTutors.find(t => t.id === id);
        if (!foundTutor) {
          navigate('/404');
          return;
        }
        setTutor(foundTutor);
      } finally {
        setLoading(false);
      }
    };

    loadTutor();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!tutor) return null;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="glass-card p-8 rounded-xl mb-8">
        <div className="flex items-start gap-8">
          <img
            src={tutor.imageUrl}
            alt={tutor.name}
            className="w-32 h-32 rounded-xl object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{tutor.name}</h1>
                <p className="text-xl text-purple-300 mb-4">{tutor.subject} Expert</p>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-medium">{tutor.rating} Rating</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white mb-2">
                  ${tutor.hourlyRate}/hr
                </p>
                <button
                  onClick={() => alert('Booking feature coming soon!')}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-medium transition-colors"
                >
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div className="glass-card p-6 rounded-xl">
          <Clock className="w-6 h-6 text-purple-400 mb-3" />
          <h3 className="text-white font-medium mb-2">Experience</h3>
          <p className="text-white/70">10+ years teaching</p>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <BookOpen className="w-6 h-6 text-purple-400 mb-3" />
          <h3 className="text-white font-medium mb-2">Sessions</h3>
          <p className="text-white/70">500+ completed</p>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <Award className="w-6 h-6 text-purple-400 mb-3" />
          <h3 className="text-white font-medium mb-2">Expertise</h3>
          <p className="text-white/70">{tutor.expertise.length} subjects</p>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="glass-card p-8 rounded-xl mb-8">
        <h2 className="text-xl font-bold text-white mb-6">Areas of Expertise</h2>
        <div className="flex flex-wrap gap-3">
          {tutor.expertise.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-lg bg-white/10 text-white font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="glass-card p-8 rounded-xl mb-8">
        <h2 className="text-xl font-bold text-white mb-4">About Me</h2>
        <p className="text-white/80 leading-relaxed">
          {tutor.about || `As a dedicated ${tutor.subject} educator, I bring years of experience and passion to my teaching. My goal is to make complex concepts accessible and engaging for all students. I specialize in ${tutor.expertise.join(', ')}, and I'm committed to helping each student achieve their academic goals.`}
        </p>
      </div>

      {/* Booking Section */}
      <div className="glass-card p-8 rounded-xl">
        <h2 className="text-xl font-bold text-white mb-6">Ready to Learn?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-medium mb-4">Session Details</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>60-90 minute sessions</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <DollarSign className="w-5 h-5 text-purple-400" />
                <span>${tutor.hourlyRate} per hour</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>Flexible scheduling</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>24/7 support</span>
              </li>
            </ul>
          </div>
          <div>
            <button
              onClick={() => alert('Booking feature coming soon!')}
              className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-medium transition-colors mb-4"
            >
              Book Your First Session
            </button>
            <p className="text-white/60 text-sm text-center">
              Free consultation included with your first session
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
