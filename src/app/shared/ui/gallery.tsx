import Image from "next/image";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Renders 1–5 gallery images as a fixed-aspect mosaic. Every cell crops with
 * object-cover, so any source size or orientation renders identically — the
 * layout never shifts and the viewport never breaks, regardless of what was
 * uploaded.
 *
 *   1 → full-width 16:9        4 → 2×2
 *   2 → side by side           5 → 2 over 3
 *   3 → three across
 */
export default function Gallery({ images }: { images?: GalleryImage[] }) {
  const items = (images ?? []).filter((i) => i.src).slice(0, 5);
  if (!items.length) return null;
  const n = items.length;

  if (n === 5) {
    return (
      <div className="mt-12 grid grid-cols-6 gap-3">
        {items.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className={`relative overflow-hidden rounded-lg ${
              i < 2 ? "col-span-6 sm:col-span-3" : "col-span-6 sm:col-span-2"
            }`}
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 384px"
            />
          </div>
        ))}
      </div>
    );
  }

  const layout = {
    1: { grid: "grid-cols-1", aspect: "16 / 9", sizes: "(max-width: 768px) 100vw, 768px" },
    2: { grid: "grid-cols-1 sm:grid-cols-2", aspect: "16 / 10", sizes: "(max-width: 640px) 100vw, 384px" },
    3: { grid: "grid-cols-1 sm:grid-cols-3", aspect: "4 / 3", sizes: "(max-width: 640px) 100vw, 256px" },
    4: { grid: "grid-cols-2", aspect: "16 / 10", sizes: "(max-width: 640px) 50vw, 384px" },
  }[n]!;

  return (
    <div className={`mt-12 grid gap-3 ${layout.grid}`}>
      {items.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          className="relative overflow-hidden rounded-lg"
          style={{ aspectRatio: layout.aspect }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-center"
            sizes={layout.sizes}
          />
        </div>
      ))}
    </div>
  );
}
