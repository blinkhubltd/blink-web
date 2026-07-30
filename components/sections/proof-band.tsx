import { RevealGroup } from "@/components/blink/reveal";
import { Stat } from "@/components/blink/stat";

/** Ink proof band. Placeholder numbers — swap for real Blink metrics. */
export function ProofBand() {
  return (
    <section className="blink-dark bg-ink-950 py-10">
      <div className="blink-container">
        <RevealGroup step={80} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <Stat label="Average delivery" value="9" unit="min" hint="Nairobi, last 30 days" />
          <Stat label="Orders delivered" value="1.2M" delta="+18%" hint="vs last year" />
          <Stat label="Products in stock" value="4,500+" hint="groceries + pharmacy" />
          <Stat label="App rating" value="4.8" unit="/5" hint="Play Store + App Store" />
        </RevealGroup>
      </div>
    </section>
  );
}
