'use client';
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

export type Experience = { id: string; title: string; company: string; dates: string; description: string; };
export type Education = { id: string; school: string; degree: string; dates: string; description: string; };

export type ProfileData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  title: string;
  summary: string;
  skills: string; // comma-separated
  experience: Experience[];
  education: Education[];
};

type ProfileContextType = {
  profile: ProfileData;
  setProfile: Dispatch<SetStateAction<ProfileData>>;
  isProfileLoading: boolean;
};

const defaultProfile: ProfileData = {
  name: 'Jane Doe',
  email: 'jane.doe@email.com',
  phone: '123-456-7890',
  address: '123 Main St, Anytown, USA',
  title: 'Aspiring Full Stack Developer',
  summary: 'A highly motivated and results-oriented professional seeking a challenging role in software development. Eager to leverage strong skills in modern web technologies to contribute to a dynamic team.',
  skills: 'JavaScript, React, Node.js, Next.js, SQL, HTML, CSS',
  experience: [],
  education: [],
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  useEffect(() => {
    // Generate unique IDs for default data on the client side to avoid hydration errors
    setProfile(prevProfile => ({
      ...prevProfile,
      experience: [
        { id: crypto.randomUUID(), title: 'Software Engineer Intern', company: 'Innovatech', dates: 'Summer 2023', description: 'Worked on the front-end of the main customer portal using React and TypeScript. Collaborated with senior developers to fix bugs and implement new features.' },
      ],
      education: [
        { id: crypto.randomUUID(), school: 'State University', degree: 'Bachelor of Science in Computer Science', dates: '2020 - 2024', description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems.' },
      ],
    }));
    setIsProfileLoading(false);
  }, []);

  return <ProfileContext.Provider value={{ profile, setProfile, isProfileLoading }}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
