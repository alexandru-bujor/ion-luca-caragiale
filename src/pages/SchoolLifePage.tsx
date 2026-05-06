import { Trophy, Music, Dumbbell, HeartHandshake } from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/site/Section";
import clubsImg from "@/assets/clubs.jpg";
import sportsImg from "@/assets/sports.jpg";
import mentorImg from "@/assets/mentoring.jpg";
import gradImg from "@/assets/graduation.jpg";

const cards = [
  { icon: Trophy, title: "Olimpiade și concursuri", img: gradImg, desc: "Rezultate remarcabile la nivel raional și național." },
  { icon: Music, title: "Cluburi școlare", img: clubsImg, desc: "Consiliul Elevilor, Clubul ALEG, ECO, MEDIA și studio muzical." },
  { icon: Dumbbell, title: "Sport", img: sportsImg, desc: "2 săli de sport și teren exterior pentru activități diverse." },
  { icon: HeartHandshake, title: "Proiecte comunitare", img: mentorImg, desc: "Inițiative care dezvoltă spirit civic și colaborare." },
];

export function SchoolLifePage() {
  return (
    <div className="container-prose pt-20 pb-10">
      <SectionHeader
        eyebrow="Viața școlară"
        title={<>Experiențe care formează caractere</>}
        description="La Caragiale, elevii învață, creează, concurează și colaborează într-un mediu activ și motivant."
      />
      <div className="mt-16 grid md:grid-cols-2 gap-5">
        {cards.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.05}>
            <article className="group relative h-96 rounded-3xl overflow-hidden shadow-card">
              <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end text-primary-foreground">
                <c.icon className="w-7 h-7 text-gold mb-3" />
                <h3 className="font-display text-2xl font-medium">{c.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{c.desc}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
