import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <div>
            <header className="border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-between w-full">
                        <div className="text-xl font-bold text-gray-900 w-32">BS</div>
                        <div className="flex items-center justify-center">
                            <h1 className="text-xl font-bold text-gray-900">The Samaasi's Way</h1>
                        </div>
                        <Button variant="default" className="bg-gray-900 text-white px-4 py-2 rounded-md w-32">
                            <Mail className="w-4 h-4 mr-2" />
                            Subscribe
                        </Button>
                    </div>
                </div>
            </header>

            <div className="border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <div className="flex justify-center items-center">
                        <nav className="hidden md:flex space-x-6">
                            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                            {/* <a href="#" className="text-gray-600 hover:text-gray-900">Archive</a> */}
                            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}