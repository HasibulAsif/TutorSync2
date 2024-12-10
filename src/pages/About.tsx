import { Users, Target, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center mb-8">About TutorSync</h1>
      
      <div className="mb-12 text-lg text-white/80 text-center">
        <p>
          TutorSync is dedicated to transforming education through personalized
          learning experiences. We connect passionate educators with eager students
          to create meaningful learning relationships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="glass-card p-6 rounded-xl text-center">
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
          <p className="text-white/70">
            Our tutors are carefully selected professionals with proven expertise in their fields.
          </p>
        </div>

        <div className="glass-card p-6 rounded-xl text-center">
          <div className="flex justify-center mb-4">
            <Target className="w-12 h-12 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
          <p className="text-white/70">
            Every student receives a customized learning experience tailored to their needs.
          </p>
        </div>

        <div className="glass-card p-6 rounded-xl text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
          <p className="text-white/70">
            We maintain high standards through regular quality checks and student feedback.
          </p>
        </div>
      </div>

      <div className="glass-card p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-white/80 mb-6">
          To make quality education accessible to everyone by connecting students
          with the best tutors worldwide. We believe in the power of one-on-one
          learning and its ability to transform lives.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-white/80">
          To create a global learning community where knowledge sharing knows no
          boundaries, and every student has the opportunity to reach their full
          potential through personalized education.
        </p>
      </div>
    </div>
  );
}
