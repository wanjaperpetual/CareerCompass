'use server';
/**
 * @fileOverview A university finder AI agent for Kenyan universities.
 *
 * - findUniversities - A function that handles finding universities.
 * - FindUniversitiesInput - The input type for the findUniversities function.
 * - FindUniversitiesOutput - The return type for the findUniversities function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FindUniversitiesInputSchema = z.object({
  course: z.string().describe('The course the user is interested in.'),
  grade: z.string().describe('The user\'s high school grade.'),
  location: z.string().describe('The user\'s preferred location in Kenya (optional).'),
});
export type FindUniversitiesInput = z.infer<typeof FindUniversitiesInputSchema>;

const UniversitySchema = z.object({
  name: z.string().describe('The name of the university.'),
  location: z.string().describe('The location of the university.'),
  courses: z.array(z.string()).describe('A list of relevant courses offered by the university.'),
  website: z.string().describe('The official website of the university.'),
});

const FindUniversitiesOutputSchema = z.object({
  universities: z.array(UniversitySchema).describe('A list of suitable universities in Kenya.'),
});
export type FindUniversitiesOutput = z.infer<typeof FindUniversitiesOutputSchema>;

export async function findUniversities(input: FindUniversitiesInput): Promise<FindUniversitiesOutput> {
  return findUniversitiesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'findUniversitiesPrompt',
  input: {schema: FindUniversitiesInputSchema},
  output: {schema: FindUniversitiesOutputSchema},
  prompt: `You are a helpful assistant that helps students find suitable universities in Kenya.

Based on the user's course interest, grade, and preferred location, suggest a list of universities.

Course: {{{course}}}
Grade: {{{grade}}}
{{#if location}}
Location: {{{location}}}
{{/if}}

Provide a list of universities that match the criteria. For each university, include its name, location, relevant courses offered, and the official website.
`,
});

const findUniversitiesFlow = ai.defineFlow(
  {
    name: 'findUniversitiesFlow',
    inputSchema: FindUniversitiesInputSchema,
    outputSchema: FindUniversitiesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
