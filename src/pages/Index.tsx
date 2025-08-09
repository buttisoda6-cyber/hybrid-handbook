import AlphabetGrid from "@/components/AlphabetGrid";
import Header from "@/components/Header";
import Quiz from "@/components/Quiz";
import heroImage from "@/assets/hero-engineering.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Zap, Car, CheckCircle, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Copy */}
            <div className="space-y-6 text-center lg:text-left">
              <Badge variant="secondary" className="px-3 py-1 inline-flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Interactive learning for engineers
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                Master Prime Movers & Hybrid Vehicles
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Explore an A–Z visual dictionary and challenge yourself with adaptive quizzes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                  Start Learning
                </Button>
                <Button asChild variant="secondary">
                  <Link to="/quiz/1">Take Beginner Quiz</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  70% to unlock next level
                </div>
                <div className="hidden sm:block h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  5 levels to conquer
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-glow">
                <img 
                  src={heroImage}
                  alt="Engineering hero - prime movers and hybrid vehicles"
                  className="w-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-foreground/10" />
              </div>
              <div className="absolute -inset-4 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-primary text-white hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-bold mb-2">Prime Movers</h3>
                <p className="text-white/90">Learn about engines, generators, and power systems</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-secondary text-white hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Car className="w-12 h-12 mx-auto mb-4 animate-bounce-gentle" />
                <h3 className="text-xl font-bold mb-2">Hybrid Vehicles</h3>
                <p className="text-white/90">Explore modern automotive technology</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-accent text-white hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 animate-gear-rotate" />
                <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
                <p className="text-white/90">Visual dictionary with detailed explanations</p>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Choose a Letter to Start Learning
            </h3>
            <p className="text-muted-foreground text-lg">
              Click any letter below to discover engineering terms and concepts
            </p>
          </div>

          {/* Alphabet Grid */}
          <AlphabetGrid />
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz />
    </div>
  );
};

export default Index;
