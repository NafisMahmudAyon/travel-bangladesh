
// Destination related types
export interface Destination {
  id: string;
  name: string;
  slug: string;
  location: string;
  description: string;
  image: string;
  gallery?: string[];
  attractions: number;
  category: 'Nature' | 'Adventure' | 'Heritage' | 'Beaches' | 'Religious';
  rating: number;
  reviews: number;
  featured?: boolean;
}

// Tour package related types
export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  gallery?: string[];
  days: number;
  nights: number;
  price: number;
  category: 'Budget' | 'Luxury' | 'Honeymoon' | 'Group' | 'Custom' | 'Adventure' | 'Beach' | 'Nature' | 'Cultural';
  rating: number;
  reviews: number;
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
}

export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  activities?: string[];
}

// Service related types
export interface Service {
  title: string;
  description: string;
  icon: string;
  details?: string;
}

// Testimonial related types
export interface Testimonial {
  id: string;
  name: string;
  image: string;
  role: string;
  rating: number;
  text: string;
}

// Team member related types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// FAQ related types
export interface FAQ {
  question: string;
  answer: string;
  category: 'Visa' | 'Travel' | 'Booking' | 'Payment' | 'Safety' | 'General';
}
