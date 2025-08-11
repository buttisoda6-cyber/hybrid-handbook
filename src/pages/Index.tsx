import AlphabetGrid from "@/components/AlphabetGrid";
import Header from "@/components/Header";
import Quiz from "@/components/Quiz";
import heroImage from "@/assets/hero-engineering.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Zap, Car } from "lucide-react";

function scrollToAlphabet() {
  document.getElementById('alphabet-section')?.scrollIntoView({ behavior: 'smooth' });
}
function scrollToQuiz() {
  document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <img 
                src={heroImage} 
                alt="Engineering Education" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Welcome to Learning!
                </h2>
                <p className="text-lg md:text-xl text-white/90">
                  Discover engineering terms from <span className="whitespace-nowrap">A to Z</span>
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <Button variant="hero" size="lg" onClick={scrollToAlphabet} aria-label="Scroll to alphabet section">
                    Let's get started
                  </Button>
                  <Button variant="secondary" size="lg" onClick={scrollToQuiz} aria-label="Scroll to quiz section">
                    Take quiz
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
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
          <div id="alphabet-section" className="h-0" aria-hidden="true"></div>
          <AlphabetGrid />
        </div>
      </section>

      {/* Quiz Section */}
      <div id="quiz-section"></div>
      <Quiz />
    </div>
  );
};

export default Index;
