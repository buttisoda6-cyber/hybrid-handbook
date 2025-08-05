import { useParams, Navigate, useNavigate } from "react-router-dom";
import { dictionaryData } from "@/data/dictionary";
import TermCard from "@/components/TermCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LetterDetail = () => {
  const { letter } = useParams<{ letter: string }>();
  const navigate = useNavigate();
  
  if (!letter) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = dictionaryData.findIndex(
    (item) => item.letter.toLowerCase() === letter.toLowerCase()
  );

  if (currentIndex === -1) {
    return <Navigate to="/" replace />;
  }

  const entry = dictionaryData[currentIndex];
  
  const previousLetter = currentIndex > 0 ? dictionaryData[currentIndex - 1].letter : null;
  const nextLetter = currentIndex < dictionaryData.length - 1 ? dictionaryData[currentIndex + 1].letter : null;

  const handleNavigation = (targetLetter: string) => {
    navigate(`/letter/${targetLetter.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-background relative animate-fade-in">
      <Header />
      
      {/* Sticky Navigation Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-background via-card to-background backdrop-blur-xl border-b border-white/10 shadow-neon">
        <div className="container mx-auto px-4 py-6">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              onClick={() => previousLetter && handleNavigation(previousLetter)}
              disabled={!previousLetter}
              className="flex items-center gap-3 bg-primary/20 border-primary/30 text-white hover:bg-primary/40 hover:border-primary/50 hover:text-white backdrop-blur-sm px-6 py-3 text-lg transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
              {previousLetter ? `Letter ${previousLetter}` : 'Previous'}
            </Button>
            
            <Button
              variant="outline"
              onClick={() => nextLetter && handleNavigation(nextLetter)}
              disabled={!nextLetter}
              className="flex items-center gap-3 bg-primary/20 border-primary/30 text-white hover:bg-primary/40 hover:border-primary/50 hover:text-white backdrop-blur-sm px-6 py-3 text-lg transition-all duration-300"
            >
              {nextLetter ? `Letter ${nextLetter}` : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Letter Display */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-primary rounded-full text-white text-5xl font-bold mb-4 animate-pulse-glow shadow-neon border border-white/20">
              {entry.letter}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Letter {entry.letter}
            </h2>
            <p className="text-muted-foreground text-xl">
              Explore engineering terms starting with {entry.letter}
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <TermCard
            type="Prime Mover"
            term={entry.primeMover.term}
            description={entry.primeMover.description}
            image={entry.primeMover.image}
            gradient="bg-gradient-electric"
          />
          
          <TermCard
            type="Hybrid Vehicle"
            term={entry.hybridVehicle.term}
            description={entry.hybridVehicle.description}
            image={entry.hybridVehicle.image}
            gradient="bg-gradient-mechanical"
          />
        </div>
      </main>
    </div>
  );
};

export default LetterDetail;