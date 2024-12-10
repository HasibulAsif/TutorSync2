import { useEffect, useState } from 'react';
import TutorCard from '../components/TutorCard';
import { Tutor } from '../types/tutor';
import { sampleTutors } from '../utils/sampleData';
import SearchBar from '../components/SearchBar';

export default function Tutors() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTutors = () => {
      try {
        setLoading(true);
        const storedTutors = localStorage.getItem('tutors');
        if (!storedTutors) {
          localStorage.setItem('tutors', JSON.stringify(sampleTutors));
          setTutors(sampleTutors);
        } else {
          setTutors(JSON.parse(storedTutors));
        }
      } catch (error) {
        console.error('Error loading tutors:', error);
        setError('Failed to load tutors. Please try again later.');
        setTutors(sampleTutors);
      } finally {
        setLoading(false);
      }
    };

    loadTutors();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-white">Loading...</div>
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

  return (
    <div>
      <h1 className="text-4xl font-bold text-white text-center mb-8">All Tutors</h1>
      
      <div className="max-w-2xl mx-auto mb-12">
        <SearchBar />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
}
