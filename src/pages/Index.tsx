import AlphabetGrid from "@/components/AlphabetGrid";
import Header from "@/components/Header";
import Quiz from "@/components/Quiz";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Zap, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const handleStartLearning = () => {
    document.getElementById("alphabet-start")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleTakeQuiz = () => navigate("/quiz/beginner");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          {/* New Hero Block */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-primary py-20 px-6 shadow-glow">
            <div className="absolute inset-0">
              <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-black/20 blur-3xl opacity-40" />
            </div>
            <div className="relative text-center text-white max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                Learn Engineering
                <span className="block md:text-6xl">Like Never Before</span>
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                Master Prime Movers and Hybrid Vehicles through interactive learning, gamified challenges, and visual engineering concepts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={handleStartLearning} className="bg-white/20 hover:bg-white/30 border-0 text-white">
                  <BookOpen className="w-4 h-4 mr-2" /> Start Learning
                </Button>
                <Button variant="secondary" onClick={handleTakeQuiz} className="bg-black/30 hover:bg-black/40 border-0 text-white">
                  Take Quiz
                </Button>
              </div>
            </div>
            {/* Feature Cards Overlap */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <Card className="bg-white/10 backdrop-blur border border-white/20 text-white hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Interactive Dictionary</h3>
                  <p className="text-white/90">A–Z engineering terms with visual diagrams and clear explanations</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border border-white/20 text-white hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Gamified Quizzes</h3>
                  <p className="text-white/90">Learn through interactive challenges and progress tracking</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border border-white/20 text-white hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Trophy className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Progress Rewards</h3>
                  <p className="text-white/90">Earn XP, streaks, and achievements as you master concepts</p>
                </CardContent>
              </Card>
            </div>
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
          <div id="alphabet-start">
            <AlphabetGrid />
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz />
    </div>
  );
};

export default Index;
