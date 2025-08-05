import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TermCardProps {
  type: "Prime Mover" | "Hybrid Vehicle";
  term: string;
  description: string;
  image: string;
  gradient: string;
}

const TermCard = ({ type, term, description, image, gradient }: TermCardProps) => {
  return (
    <Card className={`h-full ${gradient} text-white shadow-neon hover:shadow-glow transform hover:scale-105 transition-all duration-500 border border-white/20 backdrop-blur-sm relative overflow-hidden group`}>
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
      
      <CardHeader className="text-center pb-6 relative z-10">
        <Badge variant="secondary" className="w-fit mx-auto mb-6 bg-black/30 text-white border border-white/30 hover:bg-black/40 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
          {type}
        </Badge>
        
        {/* Much larger image container */}
        <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-2xl bg-black/20 p-4 animate-float border border-white/20 backdrop-blur-sm shadow-neon">
          <img 
            src={image} 
            alt={term}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
        
        <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {term}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <p className="text-white/90 text-base md:text-lg leading-relaxed text-center">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default TermCard;