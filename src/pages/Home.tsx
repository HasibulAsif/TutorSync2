import Hero from '../components/Hero';
import TutorCard from '../components/TutorCard';
import { Tutor } from '../types/tutor';
import { useEffect, useState } from 'react';
import { sampleTutors } from '../utils/sampleData';

export default function Home() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTutors = () => {
      try {
        setLoading(true);
        // Always ensure we have sample data available
        localStorage.setItem('tutors', JSON.stringify(sampleTutors));
        setTutors(sampleTutors);
      } catch (error) {
        console.error('Error loading tutors:', error);
        setError('Failed to load tutors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadTutors();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  const featuredTutors = tutors.slice(0, 3);

  return (
    <div>
      <Hero />
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Tutors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      </div>
    </div>
  );
}
