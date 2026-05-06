import { BookOpen, Lightbulb, GraduationCap, Sparkles } from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/site/Section";

const programs = [
  { icon: BookOpen, title: "Învățământ gimnazial", desc: "Baze academice solide și dezvoltarea gândirii critice." },
  { icon: Lightbulb, title: "Învățământ liceal", desc: "Pregătire orientată spre bacalaureat și traseu universitar." },
  { icon: GraduationCap, title: "Activități curriculare extinse", desc: "Cercuri, proiecte interdisciplinare și mentorat." },
  { icon: Sparkles, title: "eTwinning și parteneriate", desc: "Proiecte internaționale pentru colaborare și inovație." },
];

export function ProgramsPage() {
  return (
    <div className="container-prose pt-20 pb-10">
      <SectionHeader
        eyebrow="Programe"
        title={<>Parcurs educațional adaptat elevilor de azi</>}
        description="Programele noastre dezvoltă competențe academice și sociale, folosind metode moderne și activități aplicate."
      />

      <div className="mt-16 grid md:grid-cols-2 gap-5">
        {programs.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.06}>
            <div className="h-full p-8 rounded-3xl bg-card border border-border/60 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground shadow-soft">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
