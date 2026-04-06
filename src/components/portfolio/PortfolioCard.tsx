import type { PortfolioLocation } from "@/types/portfolio";

type PortfolioCardProps = {
  location: PortfolioLocation;
  onSelect: (location: PortfolioLocation) => void;
};

const PortfolioCard = ({ location, onSelect }: PortfolioCardProps) => {
  const isContactAvailable = location.hasDirectContact;

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/75 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
      <div className="relative aspect-[4/4.8] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${location.imagePath})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/70" />
        <button
          type="button"
          onClick={() => onSelect(location)}
          className="absolute inset-0 flex items-end p-6 text-left"
          aria-label={`Ver detalhes de ${location.name}`}
        >
          <div>
            <p className="mb-2 inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Portfólio InClima
            </p>
            <h3 className="max-w-[13ch] text-3xl font-bold leading-none text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.42)]">
              {location.name}
            </h3>
          </div>
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <div className="min-w-0">
          <p className="truncate text-base font-bold text-foreground">{location.name}</p>
          <p className="truncate text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {location.city ?? "Sem cidade"}
          </p>
        </div>

        <a
          href={location.whatsappUrl}
          target={isContactAvailable ? "_blank" : undefined}
          rel={isContactAvailable ? "noreferrer" : undefined}
          aria-disabled={!isContactAvailable}
          className={`flex h-11 w-11 items-center justify-center rounded-full text-white transition ${
            isContactAvailable
              ? "bg-foreground hover:-translate-y-0.5 hover:bg-primary"
              : "cursor-not-allowed bg-muted-foreground"
          }`}
          title={location.phone}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.79.68 2.63a2 2 0 0 1-.45 2.11L8.07 9.93a16 16 0 0 0 6 6l1.47-1.27a2 2 0 0 1 2.11-.45c.84.33 1.73.56 2.63.68A2 2 0 0 1 22 16.92Z" />
          </svg>
        </a>
      </div>
      {!location.hasDirectContact ? (
        <div className="border-t border-border/70 px-5 py-3 text-xs font-medium text-muted-foreground">
          Contato direto da unidade em atualização. Use a central da InClima.
        </div>
      ) : null}
    </article>
  );
};

export default PortfolioCard;
