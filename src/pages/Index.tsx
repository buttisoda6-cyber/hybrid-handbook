import AlphabetGrid from "@/components/AlphabetGrid";
import Header from "@/components/Header";
import heroImage from "@/assets/hero-engineering.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Zap, Car } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Engineering Dictionary
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Learn Prime Movers & Hybrid Vehicle Terms from A to Z
            </p>
            <img 
              src={heroImage} 
              alt="Engineering Education" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-electric" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Prime Movers</h3>
                <p className="text-muted-foreground">Learn about engines, generators, and power systems</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-all duration-300 border-2 hover:border-mechanical/20">
              <CardContent className="p-6 text-center">
                <Car className="w-12 h-12 mx-auto mb-4 text-mechanical" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Hybrid Vehicles</h3>
                <p className="text-muted-foreground">Explore modern automotive technology</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Interactive Learning</h3>
                <p className="text-muted-foreground">Visual dictionary with detailed explanations</p>
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
    </div>
  );
};

export default Index;
