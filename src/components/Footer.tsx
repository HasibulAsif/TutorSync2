import { Link } from 'react-router-dom';
import { GraduationCap, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white mb-4">
              <GraduationCap className="w-8 h-8" />
              <span className="text-xl font-bold">TutorSync</span>
            </Link>
            <p className="text-white/60">
              Connecting students with expert tutors for personalized learning experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 hover:text-white">Home</Link></li>
              <li><Link to="/tutors" className="text-white/60 hover:text-white">Find Tutors</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-white/60 hover:text-white">Help Center</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} TutorSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
