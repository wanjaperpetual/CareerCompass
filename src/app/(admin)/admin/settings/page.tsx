
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function AdminSettingsPage() {
    return (
        <div className="space-y-8">
             <header>
                <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
                    System Settings
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Configure AI agents, integrations, and platform-wide settings.
                </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>AI Agent Settings</CardTitle>
                            <CardDescription>Toggle features and configure AI model behavior.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                             <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                                <Label htmlFor="career-recommender" className="flex flex-col space-y-1">
                                    <span>Career Recommender</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                    Enable or disable the AI career coach.
                                    </span>
                                </Label>
                                <Switch id="career-recommender" defaultChecked />
                            </div>
                             <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                                <Label htmlFor="school-finder" className="flex flex-col space-y-1">
                                    <span>School Finder</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                    Allow users to search for universities and programs.
                                    </span>
                                </Label>
                                <Switch id="school-finder" defaultChecked />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="model-name">Primary LLM Model</Label>
                                <Input id="model-name" defaultValue="googleai/gemini-2.0-flash" />
                                <p className="text-xs text-muted-foreground">
                                    Enter the model name (e.g., googleai/gemini-2.5-pro).
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>API Keys & Integrations</CardTitle>
                             <CardDescription>Manage third-party service credentials.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="google-api-key">Google AI API Key</Label>
                                <Input id="google-api-key" type="password" defaultValue="...."/>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="youtube-api-key">YouTube API Key</Label>
                                <Input id="youtube-api-key" type="password" defaultValue="...."/>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Platform Control</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="maintenance-mode" className="font-medium">
                                    Maintenance Mode
                                </Label>
                                <Switch id="maintenance-mode" />
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Puts the platform in maintenance mode, making it inaccessible to students.
                            </p>
                            <Button variant="destructive" className="w-full">Save Changes</Button>
                        </CardContent>
                    </Card>
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Exercise Caution!</AlertTitle>
                        <AlertDescription>
                            Changes made on this page can affect the entire platform. Be sure of your actions.
                        </Aler tDescription>
                    </Alert>
                </div>
            </div>
        </div>
    );
}
