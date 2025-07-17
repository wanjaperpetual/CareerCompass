'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    features: ['Basic Job Board Access', 'Limited AI Coach Queries', 'Skill Assessment', 'Community Support'],
    cta: 'Current Plan',
    isCurrent: true,
  },
  {
    name: 'Pro',
    price: '$15',
    period: '/month',
    features: [
      'Everything in Free',
      'Unlimited AI Coach Queries',
      'Advanced Suitability Analysis',
      'Personalized Skill Plans',
      'Priority Support',
    ],
    cta: 'Upgrade to Pro',
    isCurrent: false,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    period: '',
    features: ['Everything in Pro', 'Team Accounts', 'Custom Integrations', 'Dedicated Account Manager'],
    cta: 'Contact Sales',
    isCurrent: false,
  },
];

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">Billing</h1>
        <p className="mt-2 text-lg text-muted-foreground">Manage your subscription and billing details.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col ${plan.name === 'Pro' ? 'border-primary shadow-lg' : ''}`}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={plan.isCurrent} variant={plan.name === 'Pro' ? 'default' : 'outline'}>
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

       <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Manage your payment information.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
            <div>
                <p className="font-medium">Visa ending in 1234</p>
                <p className="text-sm text-muted-foreground">Expires 08/2026</p>
            </div>
            <Button variant="outline">Update</Button>
        </CardContent>
      </Card>
    </div>
  );
}
