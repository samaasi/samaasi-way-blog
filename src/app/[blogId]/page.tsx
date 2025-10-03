import { ArrowLeft } from "lucide-react";
import Header from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import AuthorCard from "@/components/custom/author-card";
import { Card, CardContent } from "@/components/ui/card";
import NewsletterCard from "@/components/custom/newsletter-card";

interface BlogPostParams {
    params: {
        blogId: string;
    }
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const { blogId } = params;
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to posts
          </Button>
        </div>

        {/* Article Header */}
        <article className="mb-16">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Chain Replication
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <span>Fernando Franco</span>
              <span>•</span>
              <span>Dec 15, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Chain replication is a distributed systems technique that provides strong consistency 
              and high availability for data storage systems. Unlike traditional primary-backup 
              replication, chain replication organizes replicas in a linear chain where writes 
              flow from head to tail, and reads are served from the tail.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-blue-800 font-medium">
                💡 This article explores the fundamentals of chain replication, its advantages, 
                trade-offs, and real-world applications in distributed storage systems.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              How Chain Replication Works
            </h2>
            
            <p className="mb-6">
              The core idea behind chain replication is elegantly simple yet powerful. In a chain 
              of replicas, the first node (head) receives all write operations, which then propagate 
              sequentially through the chain to the last node (tail). Only the tail serves read 
              operations, ensuring that clients always see the most recent committed state.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Chain Replication Protocol:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <p>Client sends write request to the <strong>head</strong> of the chain</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <p>Head processes the write and forwards it to the next node</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <p>Write propagates sequentially through the chain</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <p><strong>Tail</strong> applies the write and sends acknowledgment to client</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Key Properties
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-green-800 mb-4 text-lg">✅ Advantages</h4>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Strong Consistency:</strong> All reads return the latest committed write</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>High Availability:</strong> System remains available during single node failures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Ordered Operations:</strong> Writes applied in same order across replicas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Simple Recovery:</strong> Failed nodes easily replaced and synchronized</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-orange-800 mb-4 text-lg">⚠️ Trade-offs</h4>
                  <ul className="space-y-3 text-orange-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Write Latency:</strong> Increases with chain length</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Single Point of Failure:</strong> Head node for writes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Limited Write Scalability:</strong> Sequential write processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Network Partition Sensitivity:</strong> Chain can be broken</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Implementation Example
            </h2>

            <p className="mb-6">
              Here's a simplified example of how chain replication might be implemented:
            </p>

            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-8 overflow-x-auto">
              <pre className="text-sm">
{`class ChainNode:
    def __init__(self, node_id, next_node=None):
        self.node_id = node_id
        self.next_node = next_node
        self.data = {}
    
    def write(self, key, value):
        # Apply write locally
        self.data[key] = value
        
        # Forward to next node in chain
        if self.next_node:
            self.next_node.write(key, value)
        else:
            # This is the tail - send ack to client
            return "ACK"
    
    def read(self, key):
        # Only tail serves reads
        if self.next_node is None:
            return self.data.get(key)
        else:
            raise Exception("Reads only allowed from tail")`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Real-World Applications
            </h2>
            
            <p className="mb-6">
              Chain replication has been successfully implemented in various distributed storage 
              systems and databases. Notable examples include:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <strong>CRAQ (Chain Replication with Apportioned Queries):</strong> Extends basic 
                  chain replication to support read operations from any node while maintaining consistency
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <strong>Object Storage Systems:</strong> Used in distributed object stores for 
                  strong consistency guarantees
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <strong>Database Replication:</strong> Applied in distributed databases requiring 
                  linearizable consistency
                </div>
              </li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Key Takeaway</h3>
              <p className="text-blue-800">
                Chain replication is particularly effective in scenarios where read operations 
                significantly outnumber write operations, as it allows for excellent read scalability 
                while maintaining strong consistency guarantees.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Conclusion
            </h2>
            
            <p className="mb-6">
              Understanding chain replication is crucial for anyone working with distributed systems, 
              as it provides a foundation for reasoning about consistency, availability, and partition 
              tolerance in replicated data stores. While it has limitations in write scalability, 
              its simplicity and strong consistency guarantees make it an excellent choice for 
              read-heavy workloads.
            </p>

            <p className="mb-8">
              As distributed systems continue to evolve, chain replication remains a fundamental 
              technique that influences modern consensus algorithms and replication strategies.
            </p>
          </div>
        </article>

        {/* Author Section */}
        <AuthorCard />

        {/* Newsletter Subscription */}
        <NewsletterCard />
      </main>
    </div>
  );
}