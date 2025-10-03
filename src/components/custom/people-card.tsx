import { authorData } from "@/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PeopleCard() {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-8">People</h2>
            <Card className="max-w-md">
                <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                        <img 
                            src={authorData.avatar} 
                            alt={authorData.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-semibold">{authorData.name}</h3>
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">@samaasi</p>
                            <p className="text-sm text-muted-foreground mb-4">{authorData.title}</p>
                            <Button variant="secondary" size="sm" className="w-full">
                                Follow
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}