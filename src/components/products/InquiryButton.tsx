import { Mail, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { createMailtoUrl, createWhatsAppUrl, formatPhoneForTel, cn } from '@/lib/utils';

type InquiryButtonProps = {
  productName: string;
  className?: string;
};

export default function InquiryButton({ productName, className }: InquiryButtonProps) {
  const { email, whatsapp, phones } = siteConfig.contact;
  const firstPhone = phones[0];

  const mailtoUrl = createMailtoUrl(
    email,
    `Upit za: ${productName}`,
    `Postovani, zanima me proizvod ${productName}. Molim vas za vise informacija.`
  );

  const whatsappUrl = createWhatsAppUrl(
    whatsapp,
    `Zdravo, zanima me proizvod: ${productName}`
  );

  const telUrl = `tel:${formatPhoneForTel(firstPhone.number)}`;

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {/* Email */}
      <a
        href={mailtoUrl}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gold-500"
      >
        <Mail className="h-5 w-5" />
        Posaljite upit
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-green-600"
      >
        <MessageCircle className="h-5 w-5" />
        Pitajte na WhatsApp-u
      </a>

      {/* Phone */}
      <a
        href={telUrl}
        className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gold-300 px-6 py-3 font-medium text-gold-400 transition-colors duration-200 hover:bg-gold-50"
      >
        <Phone className="h-5 w-5" />
        Pozovite nas: {firstPhone.number}
      </a>
    </div>
  );
}
