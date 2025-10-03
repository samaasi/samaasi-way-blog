import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";
import { authorData, newsletterData } from "@/data";
import PeopleCard from "@/components/custom/people-card";
import NewsletterCard from "@/components/custom/newsletter-card";

export default function AboutPage() {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">About {newsletterData.title} Newsletter</h1>
                    <p className="text-xl text-muted-foreground mb-2">{newsletterData.subtitle}</p>
                </div>

                {/* Newsletter Description */}
                <div className="mb-12">
                    <p className="text-lg mb-6 leading-relaxed">{authorData.bio}</p>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">What to expect</h2>
                        <p className="text-muted-foreground mb-4">{newsletterData.description}</p>
                        <ul className="space-y-2">
                            {newsletterData.topics.map((topic, index) => (
                            <li key={index} className="flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                {topic}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <NewsletterCard />
                
                {/* People Section */}
                <PeopleCard />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}