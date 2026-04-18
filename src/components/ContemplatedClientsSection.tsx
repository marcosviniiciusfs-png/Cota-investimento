import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";

import client1 from "@/assets/clients/client-1.jpeg";
import client2 from "@/assets/clients/client-2.jpeg";
import client3 from "@/assets/clients/client-3.jpeg";
import client4 from "@/assets/clients/client-4.jpeg";
import client5 from "@/assets/clients/client-5.jpeg";
import client6 from "@/assets/clients/client-6.jpeg";
import client7 from "@/assets/clients/client-7.jpeg";
import client8 from "@/assets/clients/client-8.jpeg";
import client9 from "@/assets/clients/client-9.jpeg";

const clientImages = [
  { src: client1, alt: "Cliente contemplado 1" },
  { src: client2, alt: "Cliente contemplado 2" },
  { src: client3, alt: "Cliente contemplado 3" },
  { src: client4, alt: "Cliente contemplado 4" },
  { src: client5, alt: "Cliente contemplado 5" },
  { src: client6, alt: "Cliente contemplado 6" },
  { src: client7, alt: "Cliente contemplado 7" },
  { src: client8, alt: "Cliente contemplado 8" },
  { src: client9, alt: "Cliente contemplado 9" },
];

const ITEMS_PER_VIEW = 3;

const ContemplatedClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = clientImages.length;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((currentIndex + 1) % total);
  }, [currentIndex, total, goTo]);

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + total) % total);
  }, [currentIndex, total, goTo]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);
  }, [total]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetInterval]);

  const handlePrev = () => {
    prev();
    resetInterval();
  };

  const handleNext = () => {
    next();
    resetInterval();
  };

  return (
    <section id="clientes" className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Clientes Contemplados
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Veja alguns dos nossos clientes que já realizaram seus sonhos conosco
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors -translate-x-1/2"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors translate-x-1/2"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Carousel viewport */}
          <div className="overflow-hidden px-8 md:px-10">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / ITEMS_PER_VIEW)}%)`,
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {clientImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / ITEMS_PER_VIEW}%` }}
                >
                  <div className="bg-card rounded-xl shadow-md overflow-hidden w-full aspect-[4/3]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {clientImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goTo(index);
                  resetInterval();
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContemplatedClientsSection;
