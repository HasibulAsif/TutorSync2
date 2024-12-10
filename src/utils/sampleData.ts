import { Tutor } from '../types/tutor';

export const sampleTutors: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    subject: 'Mathematics',
    hourlyRate: 75,
    rating: 4.9,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    expertise: ['Calculus', 'Linear Algebra', 'Statistics', 'Number Theory', 'Real Analysis'],
    about: 'With a Ph.D. in Mathematics from MIT and over 10 years of teaching experience, I specialize in making complex mathematical concepts accessible to students of all levels. My teaching philosophy centers on building strong foundational understanding while fostering critical thinking skills.',
    education: ['Ph.D. Mathematics, MIT', 'M.Sc. Mathematics, Stanford University'],
    languages: ['English', 'Mandarin'],
    yearsOfExperience: 10,
    completedSessions: 847
  },
  {
    id: '2',
    name: 'Prof. James Wilson',
    subject: 'Physics',
    hourlyRate: 80,
    rating: 4.8,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    expertise: ['Quantum Mechanics', 'Electromagnetics', 'Classical Mechanics', 'Thermodynamics', 'Astrophysics'],
    about: 'Former NASA researcher turned educator, I bring real-world physics applications into my teaching. My goal is to help students see physics not just as formulas, but as a way to understand the universe around us.',
    education: ['Ph.D. Physics, CalTech', 'B.S. Physics, Berkeley'],
    languages: ['English'],
    yearsOfExperience: 15,
    completedSessions: 632
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    subject: 'Computer Science',
    hourlyRate: 90,
    rating: 5.0,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    expertise: ['Python', 'Machine Learning', 'Web Development', 'Data Structures', 'Algorithms'],
    about: 'Senior Software Engineer at Google by day, passionate coding instructor by night. I love helping students break into tech and develop strong programming foundations. My teaching style focuses on practical, project-based learning.',
    education: ['M.S. Computer Science, Stanford', 'B.S. Computer Engineering'],
    languages: ['English', 'Spanish'],
    yearsOfExperience: 8,
    completedSessions: 445
  },
  {
    id: '4',
    name: 'Dr. Michael Chang',
    subject: 'Chemistry',
    hourlyRate: 70,
    rating: 4.7,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    expertise: ['Organic Chemistry', 'Biochemistry', 'Physical Chemistry', 'Inorganic Chemistry', 'Analytical Methods'],
    about: 'As a research chemist and educator, I blend theoretical knowledge with practical lab experience. I emphasize understanding core principles and their applications in both academic and industrial settings.',
    education: ['Ph.D. Chemistry, Harvard', 'B.S. Chemistry, Yale'],
    languages: ['English', 'Korean'],
    yearsOfExperience: 12,
    completedSessions: 523
  }
];
