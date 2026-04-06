import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandName from "@/components/BrandName";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import PortfolioModal from "@/components/portfolio/PortfolioModal";
import { portfolioLocations } from "@/data/portfolio";
import type { PortfolioLocation } from "@/types/portfolio";

const Portfolio = () => {
  const [selectedLocation, setSelectedLocation] = useState<PortfolioLocation | null>(null);

  const stats = useMemo(
    () => [
      { label: "Clientes em destaque", value: String(portfolioLocations.length) },
      {
        label: "Cidades atendidas",
        value: String(new Set(portfolioLocations.map((item) => item.city).filter(Boolean)).size),
      },
      {
        label: "Contatos ativos",
        value: String(portfolioLocations.filter((item) => item.whatsappUrl !== "#").length),
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef7fd_0%,#f7fbff_28%,#ffffff_100%)]">
      <Header />
      <main className="pb-16 pt-8">
        <section className="container mx-auto px-4 pb-10 pt-8 md:pt-12">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="grid gap-10 px-6 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-14">
              <div>
                <p className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Portfólio
                </p>
                <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Clientes atendidos pela <BrandName redClassName="text-red-500" />
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Uma vitrine dedicada para apresentar unidades, parceiros e pontos de atendimento
                  que já fazem parte da nossa história.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#grade-portfolio"
                    className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-primary transition hover:bg-primary-hover"
                  >
                    Ver portfólio
                  </a>
                  <a
                    href="/#contato"
                    className="inline-flex items-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                  >
                    Solicitar atendimento
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] bg-sky-400 px-5 py-6 text-white">
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16" id="grade-portfolio">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Galeria de clientes
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">Portfólio visual</h2>
            </div>
            <p className="max-w-xl text-right text-sm leading-relaxed text-muted-foreground">
              Clique em qualquer card para ver os detalhes do responsável e abrir o contato
              rapidamente.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolioLocations.map((location) => (
              <PortfolioCard
                key={location.id}
                location={location}
                onSelect={setSelectedLocation}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <PortfolioModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
    </div>
  );
};

export default Portfolio;
