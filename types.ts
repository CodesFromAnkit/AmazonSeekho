
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Module {
  title: string;
  topics: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
