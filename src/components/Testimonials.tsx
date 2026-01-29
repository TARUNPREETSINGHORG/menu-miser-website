import { AnimateOnScroll } from "./AnimateOnScroll";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Finally an app that uses what I already have. Meal planning used to take an hour—now it takes minutes.",
      author: "Sarah M.",
      role: "Busy parent",
    },
    {
      quote: "The kitchen assistant is like having a chef on call. Substitutions and tips right when I need them.",
      author: "James K.",
      role: "Home cook",
    },
    {
      quote: "We've cut our food waste and grocery bill. The shopping list alone is worth it.",
      author: "Alex & Sam",
      role: "Couple",
    },
  ];

  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll animation="fade-in-up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            What people are saying
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[var(--text-muted)]">
            Real users, real results.
          </p>
        </AnimateOnScroll>
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:items-stretch">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.author} animation="fade-in-up" delay={i * 80} className="h-full">
              <div
                className="glass glass-hover flex h-full flex-col rounded-2xl p-8 transition-all duration-300"
                data-cursor-hover
              >
                <p className="flex-1 text-lg leading-relaxed text-[var(--text-muted)]">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-semibold text-white">{t.author}</p>
                <p className="text-sm text-[var(--text-muted)]">{t.role}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
