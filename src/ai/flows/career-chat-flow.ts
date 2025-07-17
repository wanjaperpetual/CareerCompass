'use server';
/**
 * @fileOverview A career guidance chatbot for Kenyan students.
 *
 * - careerChat - A function that handles the chatbot conversation.
 * - CareerChatInput - The input type for the careerChat function.
 * - CareerChatOutput - The return type for the careerChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const CareerChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
  message: z.string().describe('The latest user message.'),
});
export type CareerChatInput = z.infer<typeof CareerChatInputSchema>;

const CareerChatOutputSchema = z.object({
  reply: z.string().describe('The AI assistant\'s reply.'),
});
export type CareerChatOutput = z.infer<typeof CareerChatOutputSchema>;

export async function careerChat(input: CareerChatInput): Promise<CareerChatOutput> {

  const history = input.history.map((msg) => ({
    role: msg.role,
    content: [{ text: msg.content }],
  }));

  const {text} = await ai.generate({
    history: history,
    prompt: input.message,
    system: `You are an intelligent and friendly AI assistant designed to help Kenyan high school students make informed decisions about their careers, university programs, and study resources.

Your main role is to guide users by answering questions about:

Suitable career paths based on interests or strengths
University programs available in Kenya related to specific careers
Admission requirements and application advice
Study tips and learning resources for high school subjects
Government education initiatives like KUCCPS
FAQs about exams (KCSE), scholarships, and course selection

Speak in a clear, simple, and encouraging tone. Always explain concepts in an easy-to-understand way.
Avoid using jargon. If something is unclear, politely ask the student to clarify.

When recommending universities, limit responses to Kenyan institutions unless the user asks about international options.

If a student gives you a free-text prompt like:
“I’m good at science and want to help people,”
respond with:
“You might enjoy careers like medicine, pharmacy, or biomedical engineering. Would you like to see which universities in Kenya offer these programs?”

When asked to recommend schools or programs, request the student’s location or career interest for better accuracy.

Always end your answers with a helpful follow-up or encouragement like:
“Would you like a list of universities that offer this course?”
“I can suggest some learning resources too, if you want!”
“Keep exploring—you're doing great!”`,
  });

  return { reply: text };
}
