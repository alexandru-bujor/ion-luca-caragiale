import { CheckCircle2, FileText, Calendar } from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/site/Section";

const docs = [
  "Cerere de înscriere",
  "Certificat de naștere (copie)",
  "Copie buletin părinte/tutore",
  "Fișa medicală",
  "Situația școlară",
];

const dates = [
  { d: "Iunie", t: "Informare și depunere dosare" },
  { d: "Iulie", t: "Evaluare dosare și repartizare" },
  { d: "August", t: "Confirmare locuri" },
];

export function AdmissionPage() {
  return (
    <div className="container-prose pt-20 pb-10">
      <SectionHeader
        eyebrow="Admitere"
        title={<>Proces clar și transparent pentru noii elevi</>}
        description="Înscrierea se realizează în etape simple, cu sprijin din partea secretariatului liceului."
      />

      <div className="mt-16 grid lg:grid-cols-2 gap-6">
        <FadeIn>
          <div className="p-8 rounded-3xl bg-card border border-border/60 shadow-card h-full">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary-soft text-primary"><FileText className="w-5 h-5" /></div>
              <h3 className="font-display text-2xl font-medium">Documente necesare</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {docs.map((d) => (
                <li key={d} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" /> {d}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="p-8 rounded-3xl bg-card border border-border/60 shadow-card h-full">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-gold-soft text-ink"><Calendar className="w-5 h-5" /></div>
              <h3 className="font-display text-2xl font-medium">Calendar orientativ</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {dates.map((x) => (
                <li key={x.d} className="flex items-center gap-5 pb-4 border-b border-border/60 last:border-0 last:pb-0">
                  <div className="font-display text-xl font-medium text-primary w-20">{x.d}</div>
                  <div className="text-foreground/85">{x.t}</div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
