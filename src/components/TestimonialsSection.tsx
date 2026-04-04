import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const TestimonialsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const scrollToSimulator = () => {
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      pergunta: "Como funciona a simulação de crédito?",
      resposta: "Nossa simulação é 100% gratuita e sem compromisso. Basta preencher seus dados básicos e em poucos minutos você receberá uma proposta personalizada no seu WhatsApp, com as melhores condições de crédito disponíveis para o seu perfil.",
    },
    {
      pergunta: "Preciso fazer consulta ao SPC/Serasa?",
      resposta: "Não! Nossa simulação não realiza consulta aos órgãos de proteção ao crédito. Você pode simular quantas vezes quiser sem se preocupar com isso. A análise de crédito mais detalhada só acontece se você decidir prosseguir com a proposta.",
    },
    {
      pergunta: "Quanto tempo leva para receber o resultado?",
      resposta: "O resultado da simulação chega no seu WhatsApp em poucos minutos após o preenchimento. Em alguns casos, pode levar até 24 horas úteis para que um de nossos consultores entre em contato com você.",
    },
    {
      pergunta: "Quais tipos de crédito estão disponíveis?",
      resposta: "Oferecemos diversas modalidades: crédito pessoal, financiamento de veículos, financiamento imobiliário, empréstimo consignado e muito mais. Nossa equipe vai analisar seu perfil e apresentar as melhores opções para você.",
    },
    {
      pergunta: "A simulação é realmente gratuita?",
      resposta: "Sim, 100% gratuita! Não cobramos nenhuma taxa pela simulação. Você pode simular quantas vezes quiser e só prosseguir com a proposta se estiver satisfeito com as condições apresentadas.",
    },
    {
      pergunta: "Meus dados estão seguros?",
      resposta: "Absolutamente! Levamos a segurança dos seus dados muito a sério. Todas as informações são tratadas com total confidencialidade e utilizamos as melhores práticas de segurança para proteger seus dados pessoais.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Título e CTA */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Tire suas dúvidas sobre nossa simulação de crédito
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.pergunta}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA no final */}
        <div className="text-center mt-12">
          <Button
            onClick={scrollToSimulator}
            size="lg"
            className="text-lg px-8 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl"
          >
            Simular crédito agora →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
