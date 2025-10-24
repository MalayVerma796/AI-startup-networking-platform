import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, MapPin, TrendingUp, Users } from "lucide-react";

interface ConnectionCardProps {
  name: string;
  role: string;
  company: string;
  location: string;
  tags: string[];
  matchScore: number;
  avatar?: string;
}

const ConnectionCard = ({ 
  name, 
  role, 
  company, 
  location, 
  tags, 
  matchScore,
  avatar 
}: ConnectionCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-300 group">
      {/* Match score badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge 
          variant="secondary" 
          className="bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-sm font-semibold"
        >
          {matchScore}% Match
        </Badge>
      </div>

      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start gap-4">
          <Avatar className="w-16 h-16 border-2 border-primary/20">
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>

        {/* Company info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="font-medium">{company}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <Badge 
              key={idx}
              variant="secondary"
              className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button variant="hero" className="flex-1" size="sm">
            <Users className="w-4 h-4" />
            Connect
          </Button>
          <Button variant="outline" size="sm">
            View Profile
          </Button>
        </div>

        {/* Subtle glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        </div>
      </div>
    </Card>
  );
};

export default ConnectionCard;
