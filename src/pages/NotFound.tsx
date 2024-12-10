import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-white min-h-[60vh]">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8 text-white/80">Page not found</p>
      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors"
      >
        <HomeIcon className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
}
