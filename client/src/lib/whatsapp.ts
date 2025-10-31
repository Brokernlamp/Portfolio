export function getWhatsAppNumber(): string {
  const number = (import.meta as any).env?.VITE_WHATSAPP_NUMBER as string | undefined;
  // Fallback to existing number used in the app if env not set
  return number?.trim() || "919876543210";
}

export function buildWhatsAppUrl(message: string, phone?: string): string {
  const to = (phone || getWhatsAppNumber()).replace(/[^0-9]/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${to}?text=${text}`;
}

export function buildServiceInquiryMessage(serviceName: string): string {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  return `Hi! I'm interested in the service: ${serviceName}. Could you share pricing and timeline? ${pageUrl}`;
}


