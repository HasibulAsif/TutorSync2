export interface Tutor {
  id: string;
  name: string;
  subject: string;
  hourlyRate: number;
  rating: number;
  imageUrl: string;
  expertise: string[];
  about?: string;
  education?: string[];
  languages?: string[];
  yearsOfExperience?: number;
  completedSessions?: number;
}
