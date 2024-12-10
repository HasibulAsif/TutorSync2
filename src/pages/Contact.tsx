import { Mail, Phone, MapPin } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="glass-card p-6 rounded-xl text-center">
          <Mail className="w-8 h-8 mx-auto mb-4 text-purple-400" />
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-white/70">support@tutorsync.com</p>
        </div>

        <div className="glass-card p-6 rounded-xl text-center">
          <Phone className="w-8 h-8 mx-auto mb-4 text-purple-400" />
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-white/70">+1 (555) 123-4567</p>
        </div>

        <div className="glass-card p-6 rounded-xl text-center">
          <MapPin className="w-8 h-8 mx-auto mb-4 text-purple-400" />
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-white/70">San Francisco, CA</p>
        </div>
      </div>

      <div className="glass-card p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200">
            Message sent successfully!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
            Failed to send message. Please try again.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
              <input
                id="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
              <input
                id="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
