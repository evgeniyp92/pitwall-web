type Harmonic = {
  amplitude: number;
  frequency: number;
  phase: number;
};

type Waveform = {
  baseline: number;
  harmonics: Harmonic[];
};

const WIDTH = 800;
const SAMPLES = 200;

function generatePoints(wave: Waveform): string {
  const arr: string[] = [];
  for (let i = 0; i <= SAMPLES; i++) {
    const progress = i / SAMPLES;
    const x = progress * WIDTH;
    // TODO(human): sum every harmonic in wave.harmonics into `offset`. For each
    // h, the contribution is the same sine expression you wrote before, just
    // parameterized by h instead of wave:
    //   h.amplitude * Math.sin(h.phase + 2 * Math.PI * h.frequency * progress)
    let offset = 0;
    for (const h of wave.harmonics) {
      offset +=
        h.amplitude * Math.sin(h.phase + 2 * Math.PI * h.frequency * progress);
    }
    const y = wave.baseline + offset;
    arr.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return arr.join(" ");
}

const speedWave: Waveform = {
  baseline: 140,
  harmonics: [
    { amplitude: 22, frequency: 2.5, phase: 0 },
    { amplitude: 8, frequency: 7.0, phase: 1.2 },
    { amplitude: 4, frequency: 13.0, phase: 2.8 },
  ],
};

export default function TelemetryLines() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${WIDTH} 400`}
        preserveAspectRatio="none"
      >
        <polyline
          points={generatePoints(speedWave)}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="stroke-primary opacity-50"
        />
        <polyline
          points="0,210 40,210 80,210 120,240 160,255 200,240 240,215 280,210 320,210 360,210 400,245 440,255 480,240 520,215 560,210 600,210 640,210 680,240 720,255 760,230 800,210"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="stroke-tertiary opacity-40"
        />
        <polyline
          points="0,330 40,330 80,330 120,295 160,285 200,300 240,325 280,330 320,330 360,330 400,290 440,285 480,300 520,325 560,330 600,330 640,330 680,295 720,285 760,315 800,330"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="stroke-secondary opacity-40"
        />
      </svg>
    </div>
  );
}
