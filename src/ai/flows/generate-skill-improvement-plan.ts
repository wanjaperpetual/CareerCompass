'use server';
/**
 * @fileOverview AI-powered skill improvement plan generator.
 *
 * - generateSkillImprovementPlan - A function that generates personalized skill improvement plans.
 * - SkillImprovementPlanInput - The input type for the generateSkillImprovementPlan function.
 * - SkillImprovementPlanOutput - The return type for the generateSkillImprovementPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillImprovementPlanInputSchema = z.object({
  skills: z
    .string()
    .describe(
      'A comma separated list of skills that the user wants to improve.'
    ),
  careerGoals: z
    .string()
    .describe(
      'A description of the users career goals.'
    ),
  experienceLevel: z
    .string()
    .describe(
      'The experience level of the user, e.g. entry level, mid-level, senior level.'
    )
});
export type SkillImprovementPlanInput = z.infer<typeof SkillImprovementPlanInputSchema>;

const SkillImprovementPlanOutputSchema = z.object({
  plan: z.string().describe('A personalized plan to improve the users skills.'),
});
export type SkillImprovementPlanOutput = z.infer<typeof SkillImprovementPlanOutputSchema>;

export async function generateSkillImprovementPlan(input: SkillImprovementPlanInput): Promise<SkillImprovementPlanOutput> {
  return generateSkillImprovementPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'skillImprovementPlanPrompt',
  input: {schema: SkillImprovementPlanInputSchema},
  output: {schema: SkillImprovementPlanOutputSchema},
  prompt: `You are an AI career coach that specializes in generating personalized plans to improve a users skills to help them achieve their career goals.

  Generate a plan for the user to improve their skills in the following areas: {{{skills}}}.

  The users career goals are: {{{careerGoals}}}.

  The users experience level is: {{{experienceLevel}}}.

  The plan should include specific steps the user can take to improve their skills, including online courses, projects, and other resources.
`,
});

const generateSkillImprovementPlanFlow = ai.defineFlow(
  {
    name: 'generateSkillImprovementPlanFlow',
    inputSchema: SkillImprovementPlanInputSchema,
    outputSchema: SkillImprovementPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
