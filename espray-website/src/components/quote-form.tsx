import { useState, type FormEvent } from "react";
import { submitInquiry } from "@/lib/inquiries.functions";

const inputClass =
  "w-full rounded-xl border border-line bg-white/60 px-4 py-3 text-[14px] text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-accent";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError(null);
    try {
      await submitInquiry({
        data: {
          name: String(data.get("name") ?? ""),
          contact: String(data.get("contact") ?? ""),
          message: String(data.get("message") ?? ""),
        },
      });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Nepavyko išsiųsti. Pabandykite dar kartą.");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-3 rounded-[22px] border border-line/70 bg-glass/80 p-8">
        <span className="grid size-10 place-items-center rounded-full bg-accent text-lg text-white">
          ✓
        </span>
        <h3 className="text-[18px] font-semibold tracking-tight">Dėkojame už užklausą!</h3>
        <p className="text-[14px] leading-relaxed text-muted">
          Susisieksime per 1 darbo dieną su preliminaria kaina ir terminu.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
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
      {status === "error" && error && (
        <p className="col-span-2 text-[13px] text-red-600">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="col-span-2 justify-self-start rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:bg-accent-deep disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? "Siunčiama…" : "Siųsti užklausą →"}
      </button>
    </form>
  );
}
