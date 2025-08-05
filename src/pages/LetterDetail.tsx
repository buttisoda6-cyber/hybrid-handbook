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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            onClick={() => previousLetter && handleNavigation(previousLetter)}
            disabled={!previousLetter}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            {previousLetter ? `${previousLetter}` : 'Previous'}
          </Button>
          
          <Button
            variant="outline"
            onClick={() => nextLetter && handleNavigation(nextLetter)}
            disabled={!nextLetter}
            className="flex items-center gap-2"
          >
            {nextLetter ? `${nextLetter}` : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full text-white text-4xl font-bold mb-4 animate-pulse-glow">
            {entry.letter}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Letter {entry.letter}
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore engineering terms starting with {entry.letter}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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