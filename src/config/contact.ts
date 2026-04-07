function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function formatBrazilPhone(phone: string) {
  const digits = digitsOnly(phone);

  if (digits.length === 13 && digits.startsWith("55")) {
    return digits.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "($2) $3-$4");
  }

  if (digits.length === 12 && digits.startsWith("55")) {
    return digits.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/, "($2) $3-$4");
  }

  if (digits.length === 11) {
    return digits.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  if (digits.length === 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }

  return phone;
}

const phoneDigits = digitsOnly(import.meta.env.VITE_CONTACT_PHONE || "");
const email = import.meta.env.VITE_CONTACT_EMAIL || "";
const whatsappBaseUrl = phoneDigits
  ? `https://api.whatsapp.com/send?1=pt_BR&phone=${phoneDigits}`
  : "#";

function appendWhatsAppText(url: string, message?: string) {
  if (!message || url === "#") {
    return url;
  }

  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}text=${encodeURIComponent(message)}`;
}

export const contactConfig = {
  phoneDigits,
  phoneDisplay: formatBrazilPhone(phoneDigits),
  telUrl: phoneDigits ? `tel:+${phoneDigits}` : "#",
  whatsappApiUrl: whatsappBaseUrl,
  whatsappWaUrl: phoneDigits ? `https://wa.me/${phoneDigits}` : "#",
  email,
  mailtoUrl: email ? `mailto:${email}` : "#",
  getWhatsAppUrl(message?: string) {
    return appendWhatsAppText(whatsappBaseUrl, message);
  },
};
