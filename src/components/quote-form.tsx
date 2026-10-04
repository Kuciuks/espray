import { useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-xl border border-line bg-white/60 px-4 py-3 text-[14px] text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-accent";

export function QuoteForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Užklausa iš ESPRAY svetainės — ${name}`;
    const body = `Vardas: ${name}\nTelefonas / el. paštas: ${contact}\n\nUžklausa:\n${message}`;
    const query = new URLSearchParams({ subject, body });

    setPrepared(true);
    window.location.href = `mailto:nerijus@espray.lt?${query.toString()}`;
  }

  if (prepared) {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-3 rounded-[22px] border border-line/70 bg-glass/80 p-8">
        <span className="grid size-10 place-items-center rounded-full bg-accent text-lg text-white">
          ✓
        </span>
        <h3 className="text-[18px] font-semibold tracking-tight">Užklausa paruošta</h3>
        <p className="text-[14px] leading-relaxed text-muted">
          Užbaikite siuntimą savo el. pašto programoje. Jei ji neatsidarė, rašykite adresu
          <a className="ml-1 text-accent hover:text-accent-deep" href="mailto:nerijus@espray.lt">
            nerijus@espray.lt
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setPrepared(false)}
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent hover:text-accent-deep"
        >
          Siųsti dar vieną →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
      <input
        name="name"
        required
        maxLength={200}
        className={`col-span-2 sm:col-span-1 ${inputClass}`}
        placeholder="Vardas"
        aria-label="Vardas"
      />
      <input
        name="contact"
        required
        maxLength={300}
        className={`col-span-2 sm:col-span-1 ${inputClass}`}
        placeholder="Telefonas / el. paštas"
        aria-label="Telefonas arba el. paštas"
      />
      <textarea
        name="message"
        required
        maxLength={5000}
        className={`col-span-2 min-h-[96px] ${inputClass}`}
        placeholder="Ką norėtumėte pagaminti? Aprašykite erdvę, matmenis ar idėją…"
        aria-label="Užklausos aprašymas"
      />
      <button
        type="submit"
        className="col-span-2 justify-self-start rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:bg-accent-deep disabled:opacity-60 sm:col-span-2"
      >
        Atidaryti el. paštą →
      </button>
    </form>
  );
}
