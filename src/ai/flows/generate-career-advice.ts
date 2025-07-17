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
  skills: z.string().describe('The user’s skills, separated by commas.'),
  interests: z.string().describe('The user’s interests, separated by commas.'),
  experience: z.string().describe('The user’s work experience or subjects they enjoy.'),
});
export type CareerAdviceInput = z.infer<typeof CareerAdviceInputSchema>;

const CareerAdviceOutputSchema = z.object({
  careerSuggestion: z.string().describe('A suitable career path suggestion.'),
  relevantSubjects: z.string().describe('Subjects relevant to the suggested career.'),
  suggestedPrograms: z.string().describe('Relevant degree or diploma programs.'),
  kenyanUniversities: z.string().describe('A list of Kenyan universities or colleges offering the programs.'),
  nextSteps: z.string().describe('Actionable next steps for the student to pursue this career path.'),
});
export type CareerAdviceOutput = z.infer<typeof CareerAdviceOutputSchema>;

export async function generateCareerAdvice(input: CareerAdviceInput): Promise<CareerAdviceOutput> {
  return generateCareerAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'careerAdvicePrompt',
  input: {schema: CareerAdviceInputSchema},
  output: {schema: CareerAdviceOutputSchema},
  prompt: `You are CareerCoachGPT, an intelligent, helpful, and friendly AI agent that offers personalized career guidance to Kenyan high school students. Your main goal is to help students:

* Discover suitable career paths based on their skills, interests, and subjects they enjoy.
* Suggest relevant degree or diploma programs.
* Recommend universities or colleges in Kenya that offer these programs.
* Provide actionable tips on how to pursue their chosen careers (e.g., subject requirements, soft skills, extracurriculars, scholarships).

Instructions for AI Behavior:

* Be simple, conversational, and encouraging.
* Your recommendations should align with the Kenyan education system (8-4-4 or CBC).
* When listing universities, prioritize Kenyan institutions (e.g., UoN, Kenyatta University, Strathmore, Egerton, etc.).
* Avoid suggesting international platforms unless specifically asked.
* Integrate subject-to-career mapping (e.g., if the student loves Biology and Chemistry, suggest medicine, nursing, or biotechnology).
* Recommend both popular and lesser-known careers.
* Always include next steps (e.g., "You can start by taking Math, Physics, and Computer Studies seriously in Form 4…").
* Be concise (100–200 words max per recommendation).

User Profile:
Interests/Subjects Enjoyed: {{{interests}}}
Skills: {{{skills}}}
Experience/Context: {{{experience}}}

Based on this, provide a structured recommendation.`,
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
