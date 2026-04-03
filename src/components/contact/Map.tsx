import { siteConfig } from '@/data/site';

export default function Map() {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={siteConfig.mapsEmbed}
        title="Betonea lokacija na mapi"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
