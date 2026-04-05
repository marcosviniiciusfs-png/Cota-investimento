import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Send } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [novoFeedback, setNovoFeedback] = useState({ nome: "", texto: "", estrelas: 5 });
  const [feedbacksUsuario, setFeedbacksUsuario] = useState<Array<{nome: string, texto: string, estrelas: number}>>([]);

  const feedbacksIniciais = [
    {
      nome: "Carlos Eduardo",
      texto: "Excelente atendimento! Recebi minha proposta em poucos minutos e consegui financiar meu carro com uma taxa incrível. Super recomendo!",
      estrelas: 5,
    },
    {
      nome: "Mariana Costa",
      texto: "Fiquei surpresa com a rapidez do processo. Em menos de 24 horas já estava em contato com um consultor. Muito profissional!",
      estrelas: 5,
    },
    {
      nome: "Roberto Almeida",
      texto: "Já tentei várias simulações em outros lugares, mas aqui foi diferente. Atendimento humanizado e sem burocracia. Aprovado!",
      estrelas: 5,
    },
    {
      nome: "Ana Paula",
      texto: "Consegui meu empréstimo consignado com uma taxa muito menor do que eu encontrava em outros lugares. Muito satisfeita!",
      estrelas: 5,
    },
    {
      nome: "Fernando Lima",
      texto: "Processo transparente do início ao fim. Sem surpresas e sem letras miúdas. Recomendo para quem busca crédito honesto.",
      estrelas: 4,
    },
  ];

  const todosFeedbacks = [...feedbacksUsuario, ...feedbacksIniciais];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % todosFeedbacks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [todosFeedbacks.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % todosFeedbacks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + todosFeedbacks.length) % todosFeedbacks.length);
  };

  const enviarFeedback = () => {
    if (novoFeedback.nome.trim() && novoFeedback.texto.trim()) {
      setFeedbacksUsuario((prev) => [
        { ...novoFeedback, nome: novoFeedback.nome.trim(), texto: novoFeedback.texto.trim() },
        ...prev,
      ]);
      setNovoFeedback({ nome: "", texto: "", estrelas: 5 });
      setCurrentIndex(0);
    }
  };

  const renderEstrelas = (quantidade: number, interativo: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((estrela) => (
          <button
            key={estrela}
            type="button"
            disabled={!interativo}
            onClick={() => interativo && setNovoFeedback((prev) => ({ ...prev, estrelas: estrela }))}
            className={`${interativo ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
          >
            <Star
              className={`w-5 h-5 ${
                estrela <= quantidade ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja os feedbacks de quem já realizou seus sonhos conosco
          </p>
        </div>

        {/* Carrossel de Feedbacks */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-card rounded-2xl shadow-lg p-8 md:p-10">
            {/* Setas de navegação */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Conteúdo do carrossel */}
            <div className="px-8 text-center">
              <div className="flex justify-center mb-4">
                {renderEstrelas(todosFeedbacks[currentIndex].estrelas)}
              </div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{todosFeedbacks[currentIndex].texto}"
              </p>
              <p className="font-semibold text-primary">
                {todosFeedbacks[currentIndex].nome}
              </p>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-6">
              {todosFeedbacks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                  }`}
                  aria-label={`Ir para feedback ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Formulário de Feedback */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Deixe seu feedback
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Seu nome
                </label>
                <input
                  type="text"
                  value={novoFeedback.nome}
                  onChange={(e) => setNovoFeedback((prev) => ({ ...prev, nome: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Seu feedback
                </label>
                <textarea
                  value={novoFeedback.texto}
                  onChange={(e) => setNovoFeedback((prev) => ({ ...prev, texto: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={4}
                  placeholder="Conte sua experiência conosco..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Sua avaliação
                </label>
                {renderEstrelas(novoFeedback.estrelas, true)}
              </div>
              <Button
                onClick={enviarFeedback}
                className="w-full py-6 text-base rounded-lg"
                disabled={!novoFeedback.nome.trim() || !novoFeedback.texto.trim()}
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar feedback
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
