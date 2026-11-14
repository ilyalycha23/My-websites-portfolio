export const WHEELS = [
  { id: "rear", x: 20.5, y: 73.8 },
  { id: "front", x: 83.8, y: 73.8 },
];
export const WHEEL_SIZE = 14.4;
export const CAR_ASPECT = 3.176;

const SHEEN_MASK =
  "url(/car-side.webp), linear-gradient(to bottom, #000 40%, rgba(0,0,0,0.35) 66%, transparent 85%)";

export function CarRig() {
  return (
    <>
      <span className="absolute -left-[4%] bottom-[2%] h-[16%] w-[108%] rounded-[50%] bg-black/80 blur-xl" />
      {WHEELS.map((wheel) => (
        <span
          key={wheel.id}
          className="absolute bottom-[1.5%] h-[7%] w-[17%] -translate-x-1/2 rounded-[50%] bg-black blur-[6px]"
          style={{ left: `${wheel.x}%` }}
        />
      ))}
      <span className="car-lights absolute inset-0">
        <span className="absolute left-[94.5%] top-[44%] h-[62%] w-[150%] blur-[10px] mix-blend-screen">
          <span
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 6%, 100% 20%, 100% 87%, 46% 87%, 0 21%)",
              background:
                "radial-gradient(ellipse 75% 55% at 0% 30%, rgba(255,246,230,0.16), rgba(255,240,218,0.05) 55%, transparent 85%)",
            }}
          />
        </span>
        <span className="absolute left-[100%] top-[91%] h-[18%] w-[130%] bg-[radial-gradient(ellipse_50%_42%_at_45%_45%,rgba(255,242,222,0.3),rgba(255,236,210,0.09)_55%,transparent)] blur-lg mix-blend-screen" />
        <span className="absolute left-[118%] top-[95%] h-[6%] w-[60%] bg-[radial-gradient(ellipse_50%_50%_at_45%_50%,rgba(255,248,236,0.32),transparent)] blur-md mix-blend-screen" />
        <span className="absolute left-[112%] top-[104%] h-[30%] w-[80%] bg-[radial-gradient(ellipse_50%_50%_at_45%_20%,rgba(255,240,218,0.08),transparent)] blur-xl mix-blend-screen" />
        <span className="absolute left-[89%] top-[38%] h-[28%] w-[13%] rounded-full bg-[#fff2dc]/20 blur-xl mix-blend-screen" />
        <span className="absolute left-[93.5%] top-[48%] h-[8%] w-[3.5%] rounded-full bg-white/70 blur-[5px] mix-blend-screen" />
      </span>
      <span className="car-tail absolute -left-[2%] top-[22%] h-[30%] w-[10%] rounded-full bg-[#ff3b30]/40 blur-xl" />
      <CarBody />
      <div
        className="absolute inset-x-0 top-full h-full -scale-y-100 opacity-[0.18]"
        style={{ maskImage: "linear-gradient(to top, #000 0%, transparent 55%)", WebkitMaskImage: "linear-gradient(to top, #000 0%, transparent 55%)" }}
      >
        <CarBody />
      </div>
    </>
  );
}

function CarBody() {
  return (
    <div className="car-body absolute inset-0">
      <img src="/car-side.webp" alt="" width="2220" height="699" draggable="false" className="absolute inset-0 h-full w-full" />
      <span
        className="car-sheen absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(100deg, transparent 30%, rgba(255,232,200,0.1) 41%, rgba(255,244,228,0.24) 46%, rgba(255,232,200,0.1) 51%, transparent 62%)",
          backgroundSize: "90% 100%",
          maskImage: SHEEN_MASK,
          WebkitMaskImage: SHEEN_MASK,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <span
        className="absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(255,226,186,0.16), transparent 22%)",
          maskImage: "url(/car-side.webp)",
          WebkitMaskImage: "url(/car-side.webp)",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
      {WHEELS.map((wheel) => (
        <img
          key={wheel.id}
          src={`/wheel-${wheel.id}.webp`}
          alt=""
          width="320"
          height="320"
          draggable="false"
          className="car-wheel absolute aspect-square [transform:translate(-50%,-50%)]"
          style={{ left: `${wheel.x}%`, top: `${wheel.y}%`, width: `${WHEEL_SIZE}%` }}
        />
      ))}
    </div>
  );
}
