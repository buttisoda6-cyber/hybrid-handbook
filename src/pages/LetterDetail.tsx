import { useParams, Navigate, useNavigate } from "react-router-dom";
import { dictionaryData } from "@/data/dictionary";
import TermCard from "@/components/TermCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const LetterDetail = () => {
  const { letter } = useParams<{ letter: string }>();
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  
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
    setIsAnimating(true);
    setTimeout(() => {
      navigate(`/letter/${targetLetter.toLowerCase()}`);
    }, 150);
  };

  useEffect(() => {
    setIsAnimating(false);
  }, [letter]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Sticky Letter Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-4">
            <Button
              variant="outline"
              onClick={() => previousLetter && handleNavigation(previousLetter)}
              disabled={!previousLetter || isAnimating}
              className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
              {previousLetter ? `${previousLetter}` : 'Previous'}
            </Button>
            
            <Button
              variant="outline"
              onClick={() => nextLetter && handleNavigation(nextLetter)}
              disabled={!nextLetter || isAnimating}
              className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              {nextLetter ? `${nextLetter}` : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white text-2xl font-bold mb-2 animate-pulse-glow">
              {entry.letter}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              Letter {entry.letter}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Explore engineering terms starting with {entry.letter}
            </p>
          </div>
        </div>
      </div>
      
      <main className={`container mx-auto px-4 py-8 transition-all duration-300 ${
        isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
      }`}>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in">
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