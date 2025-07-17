'use client';
import { type ProfileData } from '@/contexts/ProfileContext';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export function ResumePreview({ profile, forPrint = false }: { profile: ProfileData; forPrint?: boolean }) {
  return (
    <div className={`bg-white text-black p-8 shadow-lg ${forPrint ? '' : 'aspect-[8.5/11] w-full max-w-4xl mx-auto overflow-auto'}`} id="resume-preview">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline text-gray-800">{profile.name}</h1>
        <p className="text-xl text-primary font-semibold">{profile.title}</p>
        <div className="flex justify-center items-center gap-4 mt-2 text-sm text-gray-600">
          <span className="flex items-center gap-1"><Mail size={14} />{profile.email}</span>
          <span className="flex items-center gap-1"><Phone size={14} />{profile.phone}</span>
          <span className="flex items-center gap-1"><MapPin size={14} />{profile.address}</span>
        </div>
      </header>
      
      <main className="space-y-6">
        <section>
          <h2 className="text-xl font-bold font-headline border-b-2 border-gray-200 pb-1 mb-2 text-primary">Summary</h2>
          <p className="text-gray-700 text-sm">{profile.summary}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold font-headline border-b-2 border-gray-200 pb-1 mb-2 text-primary">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.split(',').map(skill => (
              <span key={skill.trim()} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">{skill.trim()}</span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold font-headline border-b-2 border-gray-200 pb-1 mb-2 text-primary">Experience</h2>
          <div className="space-y-4">
            {profile.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-lg text-gray-800">{exp.title}</h3>
                  <p className="text-sm text-gray-500">{exp.dates}</p>
                </div>
                <p className="italic text-md text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-700 mt-1 whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold font-headline border-b-2 border-gray-200 pb-1 mb-2 text-primary">Education</h2>
          <div className="space-y-4">
            {profile.education.map(edu => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-lg text-gray-800">{edu.school}</h3>
                  <p className="text-sm text-gray-500">{edu.dates}</p>
                </div>
                <p className="italic text-md text-gray-600">{edu.degree}</p>
                <p className="text-sm text-gray-700 mt-1 whitespace-pre-wrap">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
