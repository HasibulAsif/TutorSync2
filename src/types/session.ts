export interface Session {
  id: string;
  tutorId: string;
  studentId: string;
  date: string;
  startTime: string;
  duration: number; // in minutes
  subject: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface BookingRequest {
  tutorId: string;
  date: string;
  startTime: string;
  duration: number;
  subject: string;
}
