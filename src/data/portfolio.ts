import type { PortfolioLocation } from "@/types/portfolio";
import { contactConfig } from "@/config/contact";
import { buildWhatsAppUrl, formatPhone, hasPhoneContact } from "@/utils/phone";

function createLocation(
  id: string,
  name: string,
  contactName: string,
  rawPhone: string,
  imagePath: string,
  city?: string,
): PortfolioLocation {
  return {
    id,
    name,
    contactName,
    phone: formatPhone(rawPhone),
    whatsappUrl: hasPhoneContact(rawPhone)
      ? buildWhatsAppUrl(rawPhone)
      : contactConfig.whatsappWaUrl,
    imagePath,
    city,
    hasDirectContact: hasPhoneContact(rawPhone),
  };
}

export const portfolioLocations: PortfolioLocation[] = [
  createLocation(
    "kalunga-buriti-shopping",
    "Kalunga Buriti Shopping",
    "Justiniano",
    "99200-3350",
    "/assets/portfolio/kalunga.png",
    "Goiânia",
  ),
  createLocation(
    "kalunga-t63",
    "Kalunga T-63",
    "Alexandre",
    "98565-1707",
    "/assets/portfolio/kalunga.png",
    "Goiânia",
  ),
  createLocation(
    "kalunga-jardim-goias",
    "Kalunga Jardim Goiás",
    "Jackson",
    "99151-1118",
    "/assets/portfolio/kalunga.png",
    "Goiânia",
  ),
  createLocation(
    "ri-happy-av-t0",
    "Ri Happy Av. T-1",
    "Marcia",
    "xxxx-xxxx",
    "/assets/portfolio/ri-happy.png",
    "Goiânia",
  ),
  createLocation(
    "ri-happy-marista",
    "Ri Happy Marista",
    "Marcia",
    "xxxx-xxxx",
    "/assets/portfolio/ri-happy.png",
    "Goiânia",
  ),
  createLocation(
    "ri-happy-buena-vista",
    "Ri Happy Buena Vista",
    "Marcia",
    "xxxx-xxxx",
    "/assets/portfolio/ri-happy-buena.png",
    "Goiânia",
  ),
  createLocation(
    "ri-happy-passeio-das-aguas",
    "Ri Happy Passeio das Águas",
    "Marcia",
    "xxxx-xxxx",
    "/assets/portfolio/ri-happy.png",
    "Goiânia",
  ),
  createLocation(
    "hospital-santa-barbara",
    "Hospital Santa Bárbara",
    "Vilmar",
    "(62) 98598-1511",
    "/assets/portfolio/santa.png",
    "Goiânia",
  ),
  createLocation(
    "instituto-de-olhos",
    "Instituto de Olhos",
    "Jose Rodrigues",
    "99225-1529",
    "/assets/portfolio/olhos.png",
    "Goiânia",
  ),
  createLocation(
    "cientifica-medica-hospitalar",
    "Científica Médica Hospitalar",
    "Bianca",
    "(62) 3088-9700",
    "/assets/portfolio/cientifica.png",
    "Goiânia",
  ),
  createLocation(
    "casa-fleur",
    "Casa Fleur",
    "Giselio",
    "(62) 99235-2045",
    "/assets/portfolio/fleur.png",
    "Goiânia",
  ),
  createLocation(
    "prefeitura-de-turvania",
    "Prefeitura de Turvania",
    "Ana Carolina",
    "(62) 99169-9071",
    "/assets/portfolio/turvania.png",
    "Turvânia",
  ),
  createLocation(
    "prefeitura-de-luziania",
    "Prefeitura de Luziânia",
    "Marcus",
    "(61) 99442-0340",
    "/assets/portfolio/luziania.png",
    "Luziânia",
  ),
  createLocation(
    "cameras-dos-vereadores",
    "Câmeras dos Vereadores",
    "Carlos",
    "(62) 99169-9071",
    "/assets/portfolio/monte-belos.png",
    "São Luís",
  ),
];
