import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import cliente1 from "@/assets/cliente-1.png";
import cliente2 from "@/assets/cliente-2.png";
import cliente3 from "@/assets/cliente-3.png";
import cliente4 from "@/assets/cliente-4.png";
import cliente5 from "@/assets/cliente-5.png";
import cliente6 from "@/assets/cliente-6.png";

const TestimonialsSection = () => {
  const scrollToSimulator = () => {
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const images = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Duplicate images for seamless loop
  const displayImages = [...images, ...images, ...images];

  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Título e CTA */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simule agora gratuitamente e descubra o melhor plano para conquistar o seu sonho
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            As condições podem mudar a qualquer momento
          </p>
          <Button
            onClick={scrollToSimulator}
            size="lg"
            className="text-lg px-8 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl"
          >
            Quero meu plano ideal →
          </Button>
        </div>

        {/* Carrossel de Clientes */}
        <div className="relative overflow-hidden mt-16">
          <div
            className="flex gap-6 transition-transform duration-1000 ease-linear"
            style={{
              transform: `translateX(-${currentIndex * (320 + 24)}px)`,
            }}
          >
            {displayImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-[500px] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Cliente contemplado ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de pontos */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex % images.length
                  ? "bg-primary w-8"
                  : "bg-border hover:bg-primary/50"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
