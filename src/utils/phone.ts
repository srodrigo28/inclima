function getPhoneDigits(phone: string) {
  return phone.replace(/\D/g, "");
}

export function hasPhoneContact(phone: string) {
  const digits = getPhoneDigits(phone);
  return Boolean(digits) && !phone.toLowerCase().includes("xxxx");
}

export function formatPhone(phone: string) {
  const digits = getPhoneDigits(phone);

  if (!hasPhoneContact(phone)) {
    return "Telefone da unidade em atualização";
  }

  if (digits.length === 8) {
    return digits.replace(/(\d{4})(\d{4})/, "$1-$2");
  }

  if (digits.length === 9) {
    return digits.replace(/(\d{5})(\d{4})/, "$1-$2");
  }

  if (digits.length === 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }

  if (digits.length === 11) {
    return digits.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  if (digits.length === 12 && digits.startsWith("55")) {
    return digits.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/, "+$1 ($2) $3-$4");
  }

  if (digits.length === 13 && digits.startsWith("55")) {
    return digits.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4");
  }

  return phone;
}

export function buildWhatsAppUrl(phone: string) {
  if (!hasPhoneContact(phone)) {
    return "#";
  }

  const digits = getPhoneDigits(phone);

  if (digits.length === 8 || digits.length === 9) {
    return `https://wa.me/5562${digits}`;
  }

  if (digits.length === 10 || digits.length === 11) {
    return `https://wa.me/55${digits}`;
  }

  if (digits.length >= 12) {
    return `https://wa.me/${digits}`;
  }

  return "#";
}
