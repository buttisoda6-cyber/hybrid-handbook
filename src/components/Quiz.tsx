import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { dictionaryData } from "@/data/dictionary";
import { CheckCircle, XCircle, RotateCcw, Trophy, Star, Brain, Zap, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: "prime" | "hybrid";
}

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
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

  // Timer effect
  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0 || quizCompleted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev && prev <= 1) {
          setQuizCompleted(true);
          toast({
            title: "Time's Up!",
            description: "Quiz completed due to time limit.",
            variant: "destructive",
          });
          return 0;
        }
        return prev ? prev - 1 : null;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizCompleted, toast]);

  const generateQuestions = (level: QuizLevel): QuizQuestion[] => {
    const allTerms = dictionaryData.flatMap(entry => [
      { ...entry.primeMover, category: "prime" as const, letter: entry.letter },
      { ...entry.hybridVehicle, category: "hybrid" as const, letter: entry.letter }
    ]);

    const shuffled = [...allTerms].sort(() => Math.random() - 0.5);
    const selectedTerms = shuffled.slice(0, level.questionCount);

    return selectedTerms.map((term, index) => {
      const correctAnswer = term.term;
      const wrongAnswers = allTerms
        .filter(t => t.term !== correctAnswer && t.category === term.category)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(t => t.term);

      const allOptions = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
      const correctIndex = allOptions.indexOf(correctAnswer);

      return {
        id: index + 1,
        question: `What is the term for: "${term.description}"?`,
        options: allOptions,
        correctAnswer: correctIndex,
        explanation: `${correctAnswer}: ${term.description}`,
        category: term.category
      };
    });
  };

  const startQuiz = (level: QuizLevel) => {
    const quizQuestions = generateQuestions(level);
    setQuestions(quizQuestions);
    setSelectedLevel(level);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer("");
    setShowResult(false);
    setQuizCompleted(false);
    setTimeLeft(level.timeLimit || null);
  };

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;

    const isCorrect = parseInt(selectedAnswer) === questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer("");
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setSelectedLevel(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setQuestions([]);
    setTimeLeft(null);
    setQuizCompleted(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "🏆 Outstanding! You're an engineering master!";
    if (percentage >= 80) return "🌟 Excellent work! Great engineering knowledge!";
    if (percentage >= 70) return "👏 Good job! You're on the right track!";
    if (percentage >= 60) return "📚 Not bad! Keep studying to improve!";
    return "💪 Keep learning! Practice makes perfect!";
  };

  if (!selectedLevel) {
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
            {quizLevels.map((level) => (
              <Card
                key={level.id}
                className={`${level.gradient} text-white hover:shadow-glow transform hover:scale-105 transition-all duration-300 cursor-pointer group`}
                onClick={() => startQuiz(level)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3 group-hover:animate-bounce-gentle">
                    {level.icon}
                  </div>
                  <CardTitle className="text-xl">{level.name}</CardTitle>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {level.difficulty}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/90 text-sm mb-4">{level.description}</p>
                  <div className="space-y-2 text-sm">
                    <div>📝 {level.questionCount} Questions</div>
                    {level.timeLimit && (
                      <div>⏱️ {Math.floor(level.timeLimit / 60)} Minutes</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (quizCompleted) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="bg-gradient-primary text-white">
            <CardHeader className="text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4 animate-bounce-gentle" />
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-bold">
                {score}/{questions.length}
              </div>
              <div className="text-xl">
                {((score / questions.length) * 100).toFixed(0)}% Correct
              </div>
              <p className="text-lg text-white/90">{getScoreMessage()}</p>
              <div className="space-y-2">
                <div>Level: {selectedLevel.name}</div>
                <div>Difficulty: {selectedLevel.difficulty}</div>
                {timeLeft !== null && (
                  <div>Time Remaining: {formatTime(timeLeft)}</div>
                )}
              </div>
              <Button
                onClick={resetQuiz}
                className="bg-white text-primary hover:bg-white/90"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Try Another Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = showResult && parseInt(selectedAnswer) === currentQuestion.correctAnswer;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Quiz Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Badge variant="outline" className="px-4 py-2">
              {selectedLevel.name} Level
            </Badge>
            {timeLeft !== null && (
              <Badge 
                variant={timeLeft < 60 ? "destructive" : "secondary"}
                className="px-4 py-2"
              >
                ⏱️ {formatTime(timeLeft)}
              </Badge>
            )}
          </div>
          <Progress 
            value={((currentQuestionIndex + 1) / questions.length) * 100} 
            className="w-full max-w-md mx-auto mb-4"
          />
          <p className="text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              {currentQuestion.question}
            </CardTitle>
            <Badge 
              variant="outline" 
              className={currentQuestion.category === "prime" ? "bg-gradient-mechanical" : "bg-gradient-electric"}
            >
              {currentQuestion.category === "prime" ? "Prime Mover" : "Hybrid Vehicle"}
            </Badge>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedAnswer}
              onValueChange={setSelectedAnswer}
              disabled={showResult}
              className="space-y-4"
            >
              {currentQuestion.options.map((option, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-2 p-4 rounded-lg border-2 transition-colors ${
                    showResult
                      ? index === currentQuestion.correctAnswer
                        ? "border-accent bg-accent/10"
                        : selectedAnswer === index.toString()
                        ? "border-destructive bg-destructive/10"
                        : "border-border"
                      : "border-border hover:border-primary"
                  }`}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer text-base"
                  >
                    {option}
                  </Label>
                  {showResult && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-accent" />
                  )}
                  {showResult && selectedAnswer === index.toString() && index !== currentQuestion.correctAnswer && (
                    <XCircle className="w-5 h-5 text-destructive" />
                  )}
                </div>
              ))}
            </RadioGroup>

            {showResult && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-accent" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive" />
                  )}
                  <span className="font-semibold">
                    {isCorrect ? "Correct!" : "Incorrect"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {!showResult && (
              <Button
                onClick={handleAnswerSubmit}
                disabled={!selectedAnswer}
                className="w-full mt-6"
              >
                Submit Answer
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Score Display */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Current Score: <span className="font-semibold text-foreground">{score}/{questions.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quiz;