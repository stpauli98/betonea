import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-heading text-9xl text-gold-300">404</p>

      <h1 className="mt-6 font-heading text-3xl text-stone-800 md:text-4xl">
        Stranica nije pronađena
      </h1>

      <p className="mt-4 max-w-md text-stone-500 leading-relaxed">
        Izvinite, stranica koju tražite ne postoji ili je premeštena. Proverite
        da li ste uneli ispravnu adresu.
      </p>

      <div className="mt-8">
        <Button href="/" variant="primary">
          <span className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na početnu
          </span>
        </Button>
      </div>
    </main>
  );
}
