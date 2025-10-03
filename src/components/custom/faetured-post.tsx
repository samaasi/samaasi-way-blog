import Image from "next/image";
import { Card } from "@/components/ui/card";
import { blogPosts, authorData } from "@/data";
import { TrendingUp, Heart, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeaturedPostProps {
    featuredPost?: (typeof blogPosts)[0];
}

export default function FeaturedPost({ featuredPost }: FeaturedPostProps) {
    const post = featuredPost ?? blogPosts[0];
    const imageSrc = post?.image ?? "/globe.svg";
    const title = post?.title ?? "Featured Post";
    const excerpt = post?.excerpt ?? "";
    const tags = post?.tags ?? [];
    return (
         <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2" />
          Featured Post
        </h2>
        <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
          <div className="md:flex">
            <div className="md:w-1/2">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-muted-foreground mb-6">{excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image 
                    src={authorData.avatar} 
                    alt={authorData.name}
                    width={40}
                    height={40}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-sm">
                    <p className="font-medium">{authorData.name}</p>
                    {/* <p className="text-muted-foreground">{post?.date} · {post?.readTime}</p> */}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    {/* {post?.likes} */}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {/* {post?.comments} */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
}