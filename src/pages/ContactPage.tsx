import { MapPin, Phone, Mail, Calendar, ArrowRight } from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/site/Section";

export function ContactPage() {
  return (
    <div className="container-prose pt-20 pb-10">
      <SectionHeader
        eyebrow="Contact"
        title={<>Rămânem aproape de elevi și părinți</>}
        description="Ne poți scrie sau suna pentru informații despre admitere, activități și documente administrative."
      />

      <div className="mt-16 grid lg:grid-cols-3 gap-5">
        {[
          { i: MapPin, t: "Adresă", v: "Str. Vasile Lupu 60/1, Orhei, Moldova" },
          { i: Phone, t: "Telefon", v: "0(235) 24 907" },
          { i: Mail, t: "Email", v: "liceulcaragiale@gmail.com" },
        ].map((c, i) => (
          <FadeIn key={c.t} delay={i * 0.06}>
            <div className="p-7 rounded-3xl bg-card border border-border/60 shadow-card">
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-primary text-primary-foreground"><c.i className="w-5 h-5" /></div>
              <div className="mt-5 text-xs font-medium uppercase tracking-widest text-gold">{c.t}</div>
              <div className="mt-2 font-display text-lg">{c.v}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        <FadeIn>
          <div className="rounded-3xl overflow-hidden border border-border/60 shadow-card h-full min-h-[420px]">
            <iframe
              title="Hartă Orhei"
              src="https://www.openstreetmap.org/export/embed.html?bbox=28.79%2C47.36%2C28.85%2C47.41&layer=mapnik"
              className="w-full h-full min-h-[420px]"
              loading="lazy"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <form className="p-8 rounded-3xl bg-card border border-border/60 shadow-card h-full">
            <div className="flex items-center gap-3 text-sm text-muted-foreground"><Calendar className="w-4 h-4 text-gold" /> Luni–Vineri · 08:00–17:00</div>
            <h3 className="mt-4 font-display text-2xl font-medium">Trimite-ne un mesaj</h3>
            <div className="mt-6 space-y-4">
              <input className="w-full px-5 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Nume complet" />
              <input className="w-full px-5 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Email" type="email" />
              <input className="w-full px-5 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Subiect" />
              <textarea rows={5} className="w-full px-5 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Mesaj" />
              <button type="button" className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition">
                Trimite <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
