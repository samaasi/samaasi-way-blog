import { authorData  } from "@/data";
import { Button } from "@/components/ui/button";

export default function AuthorCard() {
    return (
        <div className="border-t border-gray-200 pt-12 mb-16">
          <div className="flex items-start space-x-6">
            <img 
              src={authorData.avatar} 
              alt="Benson Samaasi"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Benson Samaasi</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Senior Software Engineer with 10+ years of experience in distributed systems, 
                cloud architecture, and scalable backend development. Passionate about sharing 
                knowledge and helping engineers grow their technical skills.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">Follow</Button>
                <Button variant="ghost" size="sm">More posts</Button>
              </div>
            </div>
          </div>
        </div>
    );
}