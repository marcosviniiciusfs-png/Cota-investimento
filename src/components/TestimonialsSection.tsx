import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import cliente1 from "@/assets/cliente-1.png";
import cliente2 from "@/assets/cliente-2.png";
import cliente3 from "@/assets/cliente-3.png";

const TestimonialsSection = () => {
  const scrollToSimulator = () => {
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clientes = [
    {
      imagem: cliente1,
      nome: "Maria Silva",
      beneficio: "Financiamento aprovado",
    },
    {
      imagem: cliente2,
      nome: "João Santos",
      beneficio: "Crédito consignado",
    },
    {
      imagem: cliente3,
      nome: "Ana Oliveira",
      beneficio: "Empréstimo pessoal",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Título e CTA */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clientes Contemplados
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Veja alguns dos nossos clientes que já realizaram seus sonhos
          </p>
          <Button
            onClick={scrollToSimulator}
            size="lg"
            className="text-lg px-8 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl"
          >
            Quero meu plano ideal →
          </Button>
        </div>

        {/* Grid de 3 Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {clientes.map((cliente, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={cliente.imagem}
                alt={`Cliente ${cliente.nome}`}
                className="w-full h-[400px] md:h-[450px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium">{cliente.beneficio}</span>
                </div>
                <p className="text-white/90 font-semibold mt-1">{cliente.nome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
