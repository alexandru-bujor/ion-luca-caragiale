import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-deep-gradient text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="container-prose relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-gold text-ink">
                <GraduationCap className="w-5 h-5" />
              </span>
              <span className="font-display text-2xl font-semibold">Liceul Caragiale</span>
            </Link>
            <p className="mt-5 max-w-md text-primary-foreground/70 leading-relaxed">
              O școală prietenoasă din Orhei, orientată spre calitate, comunicare deschisă și
              rezultate reale pentru fiecare elev.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-10 h-10 rounded-full border border-white/15 hover:bg-gold hover:text-ink hover:border-gold transition-all"
                  aria-label="Social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-5">Navigare</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link to="/despre" className="hover:text-gold transition-colors">Despre liceu</Link></li>
              <li><Link to="/programe" className="hover:text-gold transition-colors">Programe academice</Link></li>
              <li><Link to="/viata-scolara" className="hover:text-gold transition-colors">Viața școlară</Link></li>
              <li><Link to="/noutati" className="hover:text-gold transition-colors">Noutăți</Link></li>
              <li><Link to="/admitere" className="hover:text-gold transition-colors">Admitere</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />Str. Vasile Lupu 60/1, Orhei, Moldova</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold" />0(235) 24 907</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold" />liceulcaragiale@gmail.com</li>
            </ul>
            <Link
              to="/admitere"
              className="inline-flex items-center mt-6 px-5 py-2.5 rounded-full bg-gold text-ink text-sm font-medium hover:bg-gold-soft transition-colors"
            >
              Începe admiterea
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Liceul Caragiale. Toate drepturile rezervate.</p>
          <p>Educație premium · Tradiție · Excelență</p>
        </div>
      </div>
    </footer>
  );
}
