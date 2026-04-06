import { useEffect } from "react";
import BrandName from "@/components/BrandName";
import type { PortfolioLocation } from "@/types/portfolio";

type PortfolioModalProps = {
  location: PortfolioLocation | null;
  onClose: () => void;
};

const PortfolioModal = ({ location, onClose }: PortfolioModalProps) => {
  useEffect(() => {
    if (!location) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [location, onClose]);

  useEffect(() => {
    if (!location) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [location]);

  if (!location) {
    return null;
  }

  const isDirectContactAvailable = location.hasDirectContact;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={location.name}
    >
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[4/4.3] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${location.imagePath})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur-sm"
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>

        <div className="space-y-6 p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Portfólio
              </p>
              <h2 className="mt-2 text-xl font-bold text-foreground">{location.name}</h2>
            </div>
            {location.city ? (
              <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {location.city}
              </span>
            ) : null}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-muted/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Responsável
              </p>
              <p className="mt-1 text-xl font-bold text-foreground">
                {isDirectContactAvailable ? location.contactName : <>Central <BrandName redClassName="text-red-500" /></>}
              </p>
            </div>
            <div className="rounded-2xl bg-muted/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Telefone
              </p>
              <p className="mt-1 text-xl font-bold text-foreground">{location.phone}</p>
              {!isDirectContactAvailable ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  O telefone direto desta unidade ainda está sendo revisado. Você pode seguir
                  pelo atendimento central para continuar.
                </p>
              ) : null}
            </div>
          </div>

          <a
            href={location.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-full items-center justify-center rounded-2xl bg-foreground text-sm font-bold uppercase tracking-[0.12em] text-white hover:-translate-y-0.5 hover:bg-primary"
          >
            {isDirectContactAvailable ? "Entrar em contato" : "Falar com a central"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
