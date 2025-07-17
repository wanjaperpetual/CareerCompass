'use client';
import { useProfile, type Experience, type Education } from '@/contexts/ProfileContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const { profile, setProfile, isProfileLoading } = useProfile();
  const { toast } = useToast();

  if (isProfileLoading) {
    return <div>Loading profile...</div>;
  }

  const handleFieldChange = (field: keyof typeof profile, value: string) => {
    setProfile(p => ({ ...p, [field]: value }));
  };

  const handleNestedChange = (
    section: 'experience' | 'education',
    index: number,
    field: keyof Experience | keyof Education,
    value: string
  ) => {
    setProfile(p => {
      const newSection = [...p[section]];
      // @ts-ignore
      newSection[index][field] = value;
      return { ...p, [section]: newSection };
    });
  };

  const addExperience = () => {
    setProfile(p => ({
      ...p,
      experience: [...p.experience, { id: crypto.randomUUID(), title: '', company: '', dates: '', description: '' }]
    }));
  };

  const removeExperience = (id: string) => {
    setProfile(p => ({ ...p, experience: p.experience.filter(e => e.id !== id) }));
  };
  
  const addEducation = () => {
    setProfile(p => ({
      ...p,
      education: [...p.education, { id: crypto.randomUUID(), school: '', degree: '', dates: '', description: '' }]
    }));
  };

  const removeEducation = (id: string) => {
    setProfile(p => ({ ...p, education: p.education.filter(e => e.id !== id) }));
  };

  const handleSave = () => {
    // In a real app, this would save to a backend.
    // Here, we just show a toast notification.
    toast({
      title: "Profile Saved",
      description: "Your profile information has been updated.",
    });
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">Your Profile</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Keep your professional information up-to-date to get the best career advice.
        </p>
      </header>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={profile.name} onChange={e => handleFieldChange('name', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Professional Title</Label>
              <Input id="title" value={profile.title} onChange={e => handleFieldChange('title', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={profile.email} onChange={e => handleFieldChange('email', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={profile.phone} onChange={e => handleFieldChange('phone', e.target.value)} />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" value={profile.address} onChange={e => handleFieldChange('address', e.target.value)} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Summary & Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea id="summary" value={profile.summary} onChange={e => handleFieldChange('summary', e.target.value)} rows={4} />
            </div>
            <div>
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Input id="skills" value={profile.skills} onChange={e => handleFieldChange('skills', e.target.value)} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="font-headline">Work Experience</CardTitle>
            <Button variant="ghost" size="icon" onClick={addExperience}>
              <PlusCircle className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {profile.experience.map((exp, index) => (
              <div key={exp.id} className="p-4 border rounded-lg space-y-4 relative">
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-muted-foreground hover:text-destructive" onClick={() => removeExperience(exp.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Job Title" value={exp.title} onChange={e => handleNestedChange('experience', index, 'title', e.target.value)} />
                  <Input placeholder="Company" value={exp.company} onChange={e => handleNestedChange('experience', index, 'company', e.target.value)} />
                </div>
                <Input placeholder="Dates (e.g., Jan 2020 - Present)" value={exp.dates} onChange={e => handleNestedChange('experience', index, 'dates', e.target.value)} />
                <Textarea placeholder="Description" value={exp.description} onChange={e => handleNestedChange('experience', index, 'description', e.target.value)} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="font-headline">Education</CardTitle>
            <Button variant="ghost" size="icon" onClick={addEducation}>
              <PlusCircle className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {profile.education.map((edu, index) => (
              <div key={edu.id} className="p-4 border rounded-lg space-y-4 relative">
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-muted-foreground hover:text-destructive" onClick={() => removeEducation(edu.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="School/University" value={edu.school} onChange={e => handleNestedChange('education', index, 'school', e.target.value)} />
                  <Input placeholder="Degree" value={edu.degree} onChange={e => handleNestedChange('education', index, 'degree', e.target.value)} />
                </div>
                <Input placeholder="Dates (e.g., 2016 - 2020)" value={edu.dates} onChange={e => handleNestedChange('education', index, 'dates', e.target.value)} />
                <Textarea placeholder="Description / Achievements" value={edu.description} onChange={e => handleNestedChange('education', index, 'description', e.target.value)} />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-end">
            <Button size="lg" onClick={handleSave}>Save Profile</Button>
        </div>
      </div>
    </div>
  );
}
