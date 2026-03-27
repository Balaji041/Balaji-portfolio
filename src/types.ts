export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  detail: string;
}

export interface Skills {
  languages: string[];
  web: string[];
  tools: string[];
}

export interface Resume {
  profile: Profile;
  experience: Job[];
  education: Education[];
  skills: Skills;
  certifications: string[];
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}
