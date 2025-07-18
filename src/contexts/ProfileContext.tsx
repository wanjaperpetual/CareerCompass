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

const defaultProfile: ProfileData = {
  name: 'Jane Doe',
  email: 'jane.doe@email.com',
  phone: '+254 712 345 678',
  address: '123 Ngong Road, Nairobi, Kenya',
  title: 'Aspiring Full Stack Developer & Tech Enthusiast',
  summary: 'A highly motivated and results-oriented final year Computer Science student at the University of Nairobi. Eager to leverage strong skills in modern web technologies, problem-solving, and collaboration to contribute to a dynamic team as a Software Developer. Passionate about building scalable and user-friendly applications.',
  skills: 'JavaScript, React, Node.js, Next.js, SQL, Python, HTML, CSS, Git, Docker',
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
        { id: crypto.randomUUID(), title: 'Software Engineer Intern', company: 'Innovatech Kenya', dates: 'May 2023 - Aug 2023', description: 'Worked on the front-end of the main customer portal using React and TypeScript. Collaborated with senior developers to fix bugs and implement new features for a user base of over 10,000 customers. Participated in daily stand-ups and sprint planning.' },
        { id: crypto.randomUUID(), title: 'IT Support Volunteer', company: 'TechForGood Foundation', dates: 'Jan 2022 - Apr 2022', description: 'Provided technical support and troubleshooting for staff and volunteers. Assisted in setting up and maintaining network infrastructure for community events.' },
      ],
      education: [
        { id: crypto.randomUUID(), school: 'University of Nairobi', degree: 'Bachelor of Science in Computer Science', dates: '2020 - 2024', description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Artificial Intelligence. Member of the UoN Tech Club.' },
        { id: crypto.randomUUID(), school: 'Alliance High School', degree: 'KCSE', dates: '2016 - 2019', description: 'Achieved a mean grade of A-. Captain of the school\'s Science and Robotics club.' },
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
