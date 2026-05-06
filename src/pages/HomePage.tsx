import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, BookOpen, Trophy } from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/site/Section";
import heroImg from "@/assets/hero-students.jpg";

const stats = [
  { label: "Cadre didactice", value: "80", icon: GraduationCap },
  { label: "Elevi", value: "1480", icon: Users },
  { label: "Săli de clasă", value: "51", icon: BookOpen },
  { label: "Laboratoare", value: "5", icon: Trophy },
];

export function HomePage() {
  return (
    <div className="container-prose pt-14 pb-10">
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary">
            Liceul Teoretic Ion Luca Caragiale · Orhei
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl leading-tight">
            Educație modernă pentru un viitor sigur.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Formăm personalități integre, active, sociale și creative, într-un mediu școlar
            prietenos, conectat la nevoile actuale ale elevilor și comunității.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/admitere" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium">
              Admitere <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/noutati" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-medium">
              Ultimele noutăți
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-elegant">
          <img src={heroImg} alt="Elevi ai liceului" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.05}>
            <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-card">
              <item.icon className="h-5 w-5 text-primary" />
              <div className="mt-4 font-display text-3xl">{item.value}</div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          </FadeIn>
        ))}
      </section>

      <section className="mt-24">
        <SectionHeader
          eyebrow="Misiune"
          title={<>Acces, relevanță și calitate în educație</>}
          description="Școala noastră își propune să ofere fiecărui elev un start bun în competiția numită viață, cu adaptare rapidă la o societate în schimbare."
        />
      </section>
    </div>
  );
}
