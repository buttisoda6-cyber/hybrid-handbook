import { Card } from "@/components/ui/card";
import { dictionaryData } from "@/data/dictionary";
import { useNavigate } from "react-router-dom";

const AlphabetGrid = () => {
  const navigate = useNavigate();

  const handleLetterClick = (letter: string) => {
    navigate(`/letter/${letter.toLowerCase()}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 p-4">
      {dictionaryData.map((entry) => (
        <Card
          key={entry.letter}
          className="aspect-square flex items-center justify-center cursor-pointer bg-gradient-primary hover:bg-gradient-secondary transform hover:scale-105 transition-all duration-300 hover:shadow-glow group"
          onClick={() => handleLetterClick(entry.letter)}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:animate-bounce-gentle">
              {entry.letter}
            </div>
            <div className="text-xs text-white/80 hidden sm:block">
              Tap to explore
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AlphabetGrid;