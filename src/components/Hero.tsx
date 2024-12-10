import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center mb-16">
      <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Find Your Perfect Tutor
      </h1>
      <p className="text-xl text-white/80 mb-8">
        Connect with expert tutors for personalized learning experiences
      </p>
      <div className="w-full">
        <SearchBar />
      </div>
    </div>
  );
}
