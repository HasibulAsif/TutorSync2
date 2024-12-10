import { Search } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the search
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center w-full">
      <div className="relative w-full max-w-2xl mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by subject, expertise, or tutor name..."
          className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500"
          aria-label="Search tutors"
        />
        <button 
          type="submit"
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/70 transition-colors"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
