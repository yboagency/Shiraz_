import Image from "next/image";

const galleryImages = [
  { src: "/pictures/collage1.webp", alt: "Afghan feast", className: "g1 reveal" },
  { src: "/pictures/collage2.webp", alt: "Dish", className: "g2 reveal" },
  { src: "/pictures/collage3.webp", alt: "Dessert", className: "g3 reveal" },
  { src: "/pictures/collage4.webp", alt: "Table detail", className: "g4 reveal" },
  { src: "/pictures/collage5.webp", alt: "Cuisine", className: "g5 reveal" },
];

export default function Gallery() {
  return (
    <div className="panel panel--gallery" id="gallery">
      <section className="gallery">
        <p className="menu-kicker reveal">The Experience</p>
        <h2 className="reveal">A Feast for the Eyes</h2>
        <div className="gallery-separator reveal" />
        <div className="gallery-grid">
          {galleryImages.map((img) => (
            <div key={img.src} className={img.className}>
              <picture style={{ position: "absolute", inset: 0, display: "block" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  fill
                  quality={85}
                  sizes="(max-width: 980px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </picture>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
