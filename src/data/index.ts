export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Chain Replication",
    excerpt:
      "A deep dive into chain replication and its applications in distributed systems.",
    content: `Chain replication is a replication technique used in distributed systems to provide strong consistency and high availability. In this comprehensive guide, we'll explore how chain replication works, its benefits, and real-world applications.

## What is Chain Replication?

Chain replication is a protocol for replicating data across multiple servers in a distributed system. Unlike traditional primary-backup replication, chain replication organizes replicas in a linear chain where updates flow from the head to the tail of the chain.

## How Chain Replication Works

The protocol works by organizing replicas in a chain:
1. **Head replica** - Receives all update requests
2. **Middle replicas** - Forward updates down the chain
3. **Tail replica** - Handles all read requests and sends acknowledgments

## Benefits of Chain Replication

- **Strong consistency** - All replicas see the same order of updates
- **High availability** - System continues operating even with failures
- **Simple recovery** - Failed replicas can be easily replaced
- **Load distribution** - Reads and writes are distributed across different replicas

## Implementation Considerations

When implementing chain replication, consider:
- Network partitions and their impact on the chain
- Failure detection mechanisms
- Chain reconfiguration protocols
- Performance optimization techniques

Chain replication provides an elegant solution for building reliable distributed systems with strong consistency guarantees.`,
    author: "Fernando Franco",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["Distributed Systems", "Replication", "Consistency"],
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20chain%20network%20diagram%20with%20connected%20nodes%20in%20blue%20and%20purple%20gradient&image_size=landscape_16_9",
  },
  {
    id: "2",
    title: "Concurrency and Deadlock Avoidance",
    excerpt:
      "Understanding concurrency control and deadlock prevention in modern systems.",
    content: `Concurrency control is crucial for maintaining data consistency in multi-threaded applications. This article explores various techniques for managing concurrent access and preventing deadlocks.

## Understanding Concurrency

Concurrency occurs when multiple threads or processes access shared resources simultaneously. Without proper control mechanisms, this can lead to:
- Race conditions
- Data corruption
- Inconsistent state
- Deadlocks

## Deadlock Prevention Strategies

### 1. Lock Ordering
Establish a global order for acquiring locks to prevent circular dependencies.

### 2. Timeout Mechanisms
Implement timeouts for lock acquisition to break potential deadlocks.

### 3. Deadlock Detection
Use algorithms to detect deadlock cycles and resolve them automatically.

## Best Practices

- Minimize lock scope and duration
- Use lock-free data structures when possible
- Implement proper error handling
- Monitor system performance and deadlock occurrences

Effective concurrency control is essential for building robust, high-performance applications.`,
    author: "Fernando Franco",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    tags: ["Concurrency", "Threading", "Performance"],
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20parallel%20processing%20visualization%20with%20interconnected%20threads%20and%20locks&image_size=landscape_16_9",
  },
  {
    id: "3",
    title: "Microservices Architecture Patterns",
    excerpt:
      "Exploring common patterns and best practices for microservices design.",
    content: `Microservices architecture has become increasingly popular for building scalable, maintainable applications. This guide covers essential patterns and practices for successful microservices implementation.

## Core Microservices Patterns

### Service Decomposition
- Domain-driven design principles
- Bounded contexts
- Service boundaries

### Communication Patterns
- Synchronous vs asynchronous communication
- Event-driven architecture
- API gateways

### Data Management
- Database per service
- Saga pattern for distributed transactions
- Event sourcing and CQRS

## Implementation Challenges

Building microservices comes with unique challenges:
- Service discovery and registration
- Configuration management
- Monitoring and observability
- Testing strategies

## Best Practices

1. Start with a monolith and decompose gradually
2. Design for failure and implement circuit breakers
3. Use containerization for deployment
4. Implement comprehensive monitoring
5. Automate testing and deployment pipelines

Microservices can provide significant benefits when implemented thoughtfully with proper patterns and practices.`,
    author: "Fernando Franco",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    tags: ["Architecture", "Microservices", "Design Patterns"],
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20microservices%20architecture%20diagram%20with%20containers%20and%20connections&image_size=landscape_16_9",
  },
];

export const authorData = {
  name: "Benson Samaasi",
  title: "Software Engineer",
  bio: "Samaasi Way is Benson’s space for pragmatic engineering weekly notes on algorithms, system design, and distributed systems crafted for engineers who value clarity and simplicity.",
  avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'><rect width='128' height='128' rx='16' fill='%23EEF2FF'/><circle cx='64' cy='64' r='52' fill='%23E0E7FF' stroke='%2399A1FF' stroke-width='2'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif' font-size='48' font-weight='700' fill='%23333'>BS</text></svg>",
  social: {
    twitter: "@bsamaasi",
    github: "samaasi",
    linkedin: "bsamaasi",
  },
};

export const newsletterData = {
  title: "The Samaasi's Way",
  subtitle: "A blog about algorithms, system design, and distributed systems",
  description: "Each issue focuses on one or more of the following areas:",
  topics: [
    "algorithms and data structures",
    "distributed systems and system design",
    "software engineering and craftsmanship",
  ],
};