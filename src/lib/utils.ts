/**
 * Merge class names. Filters out falsy values and joins with a space.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format a phone number string for use in tel: links.
 * Strips spaces, parentheses, and dashes.
 */
export function formatPhoneForTel(phone: string): string {
  return phone.replace(/[\s()-]/g, '');
}

/**
 * Create a WhatsApp URL with optional pre-filled message.
 */
export function createWhatsAppUrl(phone: string, message?: string): string {
  const base = `https://wa.me/${phone}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

/**
 * Create a mailto URL with optional subject and body.
 */
export function createMailtoUrl(
  email: string,
  subject?: string,
  body?: string
): string {
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);

  if (params.length > 0) {
    return `mailto:${email}?${params.join('&')}`;
  }
  return `mailto:${email}`;
}
