import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-gradient-primary text-white shadow-float">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {!isHomePage && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => navigate("/")}
                className="bg-white/20 hover:bg-white/30 text-white border-0"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 animate-float" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Engineering Picture Dictionary
                </h1>
                <p className="text-white/80 text-sm md:text-base">
                  Learn Prime Movers & Hybrid Vehicle Terms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;