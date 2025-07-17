// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview Provides personalized career advice based on user skills, interests, and experience.
 *
 * - generateCareerAdvice - A function that generates career advice.
 * - CareerAdviceInput - The input type for the generateCareerAdvice function.
 * - CareerAdviceOutput - The return type for the generateCareerAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerAdviceInputSchema = z.object({
  skills: z.string().describe('The user\u2019s skills, separated by commas.'),
  interests: z.string().describe('The user\u2019s interests, separated by commas.'),
  experience: z.string().describe('The user\u2019s work experience.'),
});
export type CareerAdviceInput = z.infer<typeof CareerAdviceInputSchema>;

const CareerAdviceOutputSchema = z.object({
  advice: z.string().describe('Personalized career advice based on the user input.'),
  learningResources: z.string().describe('Recommended learning resources to improve skills.'),
  jobOpportunities: z.string().describe('Potential job opportunities based on the user input.'),
});
export type CareerAdviceOutput = z.infer<typeof CareerAdviceOutputSchema>;

export async function generateCareerAdvice(input: CareerAdviceInput): Promise<CareerAdviceOutput> {
  return generateCareerAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'careerAdvicePrompt',
  input: {schema: CareerAdviceInputSchema},
  output: {schema: CareerAdviceOutputSchema},
  prompt: `You are a career coach providing personalized advice.

  Based on the user's skills, interests, and experience, provide tailored career advice, recommend learning resources, and suggest potential job opportunities.

  Skills: {{{skills}}}
  Interests: {{{interests}}}
  Experience: {{{experience}}}`,
});

const generateCareerAdviceFlow = ai.defineFlow(
  {
    name: 'generateCareerAdviceFlow',
    inputSchema: CareerAdviceInputSchema,
    outputSchema: CareerAdviceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
