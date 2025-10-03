import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { newsletterData, authorData } from "@/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function NewsletterCard() {
    return (
        <Card className="mb-12">
            <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                    <img 
                        src={authorData.avatar} 
                        alt={authorData.name}
                        className="w-16 h-16 rounded-full mx-auto"
                    />
                </div>
                <CardTitle className="text-2xl">Subscribe to {newsletterData.title}</CardTitle>
                <CardDescription className="text-base">
                    {newsletterData.subtitle}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input type="email" placeholder="Type your email..."  className="flex-1"/>
                    <Button className="sm:w-auto">Subscribe</Button>
                </div>
                {/* <p className="text-sm text-gray-500 mt-4">
                    No spam, unsubscribe at any time.
                </p> */}
            </CardContent>
        </Card>
    );
}