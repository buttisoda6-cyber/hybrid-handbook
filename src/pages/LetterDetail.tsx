import { useParams, Navigate } from "react-router-dom";
import { dictionaryData } from "@/data/dictionary";
import TermCard from "@/components/TermCard";
import Header from "@/components/Header";

const LetterDetail = () => {
  const { letter } = useParams<{ letter: string }>();
  
  if (!letter) {
    return <Navigate to="/" replace />;
  }

  const entry = dictionaryData.find(
    (item) => item.letter.toLowerCase() === letter.toLowerCase()
  );

  if (!entry) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
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
            icon={entry.primeMover.icon}
            gradient="bg-gradient-electric"
          />
          
          <TermCard
            type="Hybrid Vehicle"
            term={entry.hybridVehicle.term}
            description={entry.hybridVehicle.description}
            icon={entry.hybridVehicle.icon}
            gradient="bg-gradient-mechanical"
          />
        </div>
      </main>
    </div>
  );
};

export default LetterDetail;