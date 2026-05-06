import { SectionHeader, FadeIn } from "@/components/site/Section";
import clubsImg from "@/assets/clubs.jpg";
import buildingImg from "@/assets/school-building.jpg";
import gradImg from "@/assets/graduation.jpg";
import sportsImg from "@/assets/sports.jpg";

const news = [
  {
    tag: "Noutăți",
    title: "Oameni, credință și valori",
    date: "25 octombrie 2024",
    text: "Eveniment aniversar dedicat celor 40 de ani de evoluție și performanță educațională.",
    img: gradImg,
  },
  {
    tag: "eTwinning",
    title: "Clubul de lectură și dezvoltarea armonioasă a adolescenților",
    date: "3 octombrie 2024",
    text: "Activități de lectură care dezvoltă empatia, comunicarea și spiritul critic.",
    img: clubsImg,
  },
  {
    tag: "Parteneriate",
    title: "Porți deschise către Prut",
    date: "27 mai 2024",
    text: "Proiect educațional internațional axat pe colaborare și schimb de bune practici.",
    img: buildingImg,
  },
  {
    tag: "Sport",
    title: "Activități extracurriculare și competiții",
    date: "2024",
    text: "Elevii participă activ la competiții locale, regionale și inițiative sportive.",
    img: sportsImg,
  },
];

export function NewsPage() {
  return (
    <div className="container-prose pt-20 pb-10">
      <SectionHeader
        eyebrow="Noutăți"
        title={<>Ce este nou la Liceul Caragiale</>}
        description="Aici găsești informații despre proiecte, evenimente, performanțe și inițiative școlare recente."
      />

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {news.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.05}>
            <article className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-primary-soft px-2.5 py-1 font-medium text-primary">{item.tag}</span>
                  <span className="text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
