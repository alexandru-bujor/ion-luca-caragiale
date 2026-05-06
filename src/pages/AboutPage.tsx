import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/site/Section";
import buildingImg from "@/assets/school-building.jpg";
import libImg from "@/assets/library.jpg";

export function AboutPage() {
  const values = [
    { t: "Acces", d: "Asigurăm acces egal la educație și sprijin pentru fiecare elev." },
    { t: "Calitate", d: "Predare modernă, profesori implicați și standarde academice ridicate." },
    { t: "Relevanță", d: "Activități și conținut adaptate la realitățile societății actuale." },
    { t: "Comunitate", d: "Colaborare strânsă între elevi, profesori, părinți și mediul local." },
  ];

  return (
    <div className="container-prose pt-20 pb-10">
      <SectionHeader
        eyebrow="Despre noi"
        title={<>O școală prietenoasă, cu rezultate și viziune.</>}
        description="Liceul Teoretic Ion Luca Caragiale din Orhei promovează o educație adecvată, activă și creativă, pentru adaptare rapidă într-o societate în schimbare."
      />

      <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
        <FadeIn>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
            <img src={buildingImg} alt="Clădirea liceului" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h3 className="font-display text-3xl md:text-4xl font-medium">Viziunea instituției</h3>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Dorim o școală care pregătește elevii pentru competiția numită viață, cu accent pe
            comunicare deschisă, colaborare între profesori și grijă autentică față de copii.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Construim zi de zi un spațiu educațional sigur, cald și conectat la viitor.
          </p>
        </FadeIn>
      </div>

      <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((v, i) => (
          <FadeIn key={v.t} delay={i * 0.05}>
            <div className="h-full p-7 rounded-3xl bg-card border border-border/60 shadow-card hover:-translate-y-1 transition">
              <div className="font-display text-2xl text-gradient-gold">0{i + 1}</div>
              <h4 className="mt-4 font-display text-xl font-medium">{v.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-24 grid lg:grid-cols-2 gap-10 items-center">
        <FadeIn>
          <h3 className="font-display text-3xl md:text-4xl font-medium">Comunitate și performanță</h3>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Cu 80 de cadre didactice, 1480 de elevi și rezultate la olimpiade, liceul oferă un
            echilibru între excelența academică și dezvoltarea armonioasă a adolescenților.
          </p>
          <Link to="/admitere" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition">
            Vezi admiterea <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
            <img src={libImg} alt="Biblioteca liceului" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
