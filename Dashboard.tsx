import { Brain, Sparkles } from "lucide-react";
import ConnectionCard from "./ConnectionCard";

const mockConnections = [
  {
    name: "Sarah Chen",
    role: "Co-Founder & CEO",
    company: "TechVision AI",
    location: "San Francisco, CA",
    tags: ["AI/ML", "B2B SaaS", "Seed Stage"],
    matchScore: 94,
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "DataFlow Systems",
    location: "Austin, TX",
    tags: ["Data Analytics", "Series A", "Remote-First"],
    matchScore: 89,
  },
  {
    name: "Emily Park",
    role: "VP of Product",
    company: "CloudSync",
    location: "New York, NY",
    tags: ["Cloud Infrastructure", "Enterprise", "Growth Stage"],
    matchScore: 87,
  },
  {
    name: "James Wilson",
    role: "Founder",
    company: "FinTech Innovators",
    location: "London, UK",
    tags: ["FinTech", "Blockchain", "Pre-Seed"],
    matchScore: 85,
  },
  {
    name: "Aisha Kumar",
    role: "Head of Engineering",
    company: "HealthTech Labs",
    location: "Boston, MA",
    tags: ["HealthTech", "IoT", "Series B"],
    matchScore: 83,
  },
  {
    name: "David Thompson",
    role: "Chief Strategy Officer",
    company: "GreenEnergy Solutions",
    location: "Seattle, WA",
    tags: ["CleanTech", "Impact", "Seed Stage"],
    matchScore: 81,
  },
];

const Dashboard = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-accent/20 shadow-card">
            <Brain className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">AI-Curated Matches</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Your Perfect{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Connections
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your profile, interests, and goals, our AI has identified these high-potential matches.
          </p>
        </div>

        {/* Connections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockConnections.map((connection, idx) => (
            <div 
              key={idx}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "backwards" }}
            >
              <ConnectionCard {...connection} />
            </div>
          ))}
        </div>

        {/* More matches CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span>AI is finding more perfect matches for you...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
