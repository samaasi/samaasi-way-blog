import { Badge } from '@/components/ui/badge';
import { blogPosts, authorData } from '@/data';
import Header from "@/components/custom/header";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FeaturedPost from '@/components/custom/faetured-post';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';

export default function HomePage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">The Samaasi's Way</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Exploring the intersection of technology, engineering, and innovation
        </p>
        <Button>Subscribe to Newsletter</Button>
      </div>

      {/* Featured Post */}
      <FeaturedPost featuredPost={featuredPost} />

      {/* Recent Posts */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
        <div className="grid gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={authorData.avatar} 
                          alt={authorData.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{authorData.name}</span>
                          <span className="mx-1">·</span>
                          {/* <span>{post.date}</span> */}
                          <span className="mx-1">·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {/* {post.likes} */}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {/* {post.comments} */}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Posts
        </Button>
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get the latest insights on distributed systems, software engineering, and technology trends 
          delivered directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
