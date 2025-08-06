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
    <Card className={`h-full ${gradient} text-white shadow-card hover:shadow-float transform hover:scale-105 transition-all duration-300`}>
      <CardHeader className="text-center pb-4">
        <Badge variant="secondary" className="w-fit mx-auto mb-3 bg-white/20 text-white border-0 hover:bg-white/30">
          {type}
        </Badge>
        <div className="w-60 h-60 mx-auto mb-4 rounded-lg bg-white/20 p-3 animate-float">
          <img 
            src={image} 
            alt={term}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <CardTitle className="text-xl md:text-2xl font-bold">
          {term}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/90 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default TermCard;