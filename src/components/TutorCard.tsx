import { Star } from 'lucide-react';
import { Tutor } from '../types/tutor';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface TutorCardProps {
  tutor: Tutor;
}

export default function TutorCard({ tutor }: TutorCardProps) {
  const [imageError, setImageError] = useState(false);

  const fallbackImage = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(tutor.name)}`;

  const handleError = () => {
    setImageError(true);
  };

  return (
    <div className="relative p-6 rounded-xl glass-card transition-all hover:scale-[1.02]">
      <div className="flex items-start gap-4">
        <img
          src={imageError ? fallbackImage : tutor.imageUrl}
          alt={tutor.name}
          onError={handleError}
          className="w-16 h-16 rounded-full object-cover bg-purple-200"
        />
        <div className="flex-1">
          <Link
            to={`/tutors/${tutor.id}`}
            className="text-white font-semibold text-lg hover:text-purple-300 transition-colors"
          >
            {tutor.name}
          </Link>
          <p className="text-purple-200">{tutor.subject}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-white/80">{tutor.rating}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-white font-bold">${tutor.hourlyRate}/hr</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {tutor.expertise.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full text-xs bg-white/10 text-white/80"
            >
              {skill}
            </span>
          ))}
          {tutor.expertise.length > 3 && (
            <span className="px-2 py-1 rounded-full text-xs bg-white/10 text-white/80">
              +{tutor.expertise.length - 3} more
            </span>
          )}
        </div>
      </div>
      <Link 
        to={`/tutors/${tutor.id}`}
        className="block w-full mt-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors text-center"
      >
        View Profile
      </Link>
    </div>
  );
}
