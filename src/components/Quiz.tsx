import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Brain, Zap, Rocket, Trophy, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuizLevel {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  difficulty: string;
  questionCount: number;
  timeLimit?: number;
  gradient: string;
}

const quizLevels: QuizLevel[] = [
  {
    id: 1,
    name: "Beginner",
    description: "Basic engineering terms and concepts",
    icon: <Star className="w-6 h-6" />,
    difficulty: "Easy",
    questionCount: 5,
    gradient: "bg-gradient-accent"
  },
  {
    id: 2,
    name: "Intermediate",
    description: "Moderate knowledge of prime movers and hybrids",
    icon: <Brain className="w-6 h-6" />,
    difficulty: "Medium",
    questionCount: 8,
    gradient: "bg-gradient-primary"
  },
  {
    id: 3,
    name: "Advanced",
    description: "In-depth understanding required",
    icon: <Zap className="w-6 h-6" />,
    difficulty: "Hard",
    questionCount: 10,
    timeLimit: 300,
    gradient: "bg-gradient-secondary"
  },
  {
    id: 4,
    name: "Expert",
    description: "Professional level engineering knowledge",
    icon: <Rocket className="w-6 h-6" />,
    difficulty: "Very Hard",
    questionCount: 12,
    timeLimit: 240,
    gradient: "bg-gradient-electric"
  },
  {
    id: 5,
    name: "Master",
    description: "Ultimate challenge for engineering experts",
    icon: <Trophy className="w-6 h-6" />,
    difficulty: "Extreme",
    questionCount: 15,
    timeLimit: 180,
    gradient: "bg-gradient-mechanical"
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]); // Start with level 1 unlocked
  const { toast } = useToast();

  // Load unlocked levels from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('quiz-progress');
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        setUnlockedLevels(progress.unlockedLevels || [1]);
      } catch (error) {
        console.error('Failed to load quiz progress:', error);
        setUnlockedLevels([1]);
      }
    }
  }, []);

  const startQuiz = (level: QuizLevel) => {
    // Check if level is unlocked
    if (!unlockedLevels.includes(level.id)) {
      toast({
        title: "Level Locked!",
        description: "Complete the previous level to unlock this one.",
        variant: "destructive",
      });
      return;
    }

    // Navigate to quiz page with level ID
    navigate(`/quiz/${level.id}`);
  };

  const isLevelUnlocked = (levelId: number) => unlockedLevels.includes(levelId);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Engineering Knowledge Quiz
          </h2>
          <p className="text-muted-foreground text-lg">
            Test your understanding of prime movers and hybrid vehicle technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {quizLevels.map((level) => {
            const isUnlocked = isLevelUnlocked(level.id);
            return (
              <Card
                key={level.id}
                className={`${
                  isUnlocked 
                    ? `${level.gradient} text-white hover:shadow-glow transform hover:scale-105 transition-all duration-300 cursor-pointer` 
                    : 'bg-muted text-muted-foreground cursor-not-allowed opacity-60'
                } group relative`}
                onClick={() => isUnlocked && startQuiz(level)}
              >
                {!isUnlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg z-10">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-3 ${isUnlocked ? 'group-hover:animate-bounce-gentle' : ''}`}>
                    {level.icon}
                  </div>
                  <CardTitle className="text-xl">{level.name}</CardTitle>
                  <Badge 
                    variant="secondary" 
                    className={
                      isUnlocked 
                        ? "bg-white/20 text-white border-white/30" 
                        : "bg-muted-foreground/20"
                    }
                  >
                    {level.difficulty}
                  </Badge>
                  {!isUnlocked && (
                    <Badge variant="outline" className="mt-2">
                      🔒 Locked
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="text-center">
                  <p className={`text-sm mb-4 ${isUnlocked ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {level.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>📝 {level.questionCount} Questions</div>
                    {level.timeLimit && (
                      <div>⏱️ {Math.floor(level.timeLimit / 60)} Minutes</div>
                    )}
                  </div>
                  {!isUnlocked && (
                    <p className="text-xs mt-2 text-muted-foreground">
                      Complete previous level to unlock
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Quiz;