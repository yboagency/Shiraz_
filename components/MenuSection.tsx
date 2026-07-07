import Image from "next/image";
import Link from "next/link";

const menuCards = [
  {
    src: "/pictures/starters.webp",
    alt: "Starters",
    className: "menu-card menu-left reveal",
    title: "STARTERS",
    desc: "Kabuli, Chapli Kebab & more",
    href: "/menu#cat-starters",
  },
  {
    src: "/pictures/Maindish.webp",
    alt: "Main dishes",
    className: "menu-card menu-center reveal",
    title: "MAIN DISHES",
    desc: "Bolani, Aushak, Mantu & more",
    href: "/menu#cat-afghan-main-course",
  },
  {
    src: "/pictures/desserts.webp",
    alt: "Desserts",
    className: "menu-card menu-right reveal",
    title: "DESSERTS",
    desc: "Traditional sweets & more",
    href: "/menu#cat-desserts",
  },
];

export default function MenuSection() {
  return (
    <div className="panel panel--menu" id="menu">
      <section className="menu">
        <p className="menu-kicker plain reveal">Food &amp; Drink</p>
        <h2 className="reveal">The Art of Afghan Flavour</h2>
        <div className="menu-separator reveal" />
        <p className="menu-subtitle reveal">
          Discover authentic Afghan flavors crafted with tradition.
        </p>
        <div className="menu-showcase">
          {menuCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={card.className}
              aria-label={`View ${card.title} on our menu`}
            >
              <picture style={{ display: "block" }}>
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={300}
                  height={200}
                  loading="lazy"
                  unoptimized
                  style={{ display: "block", objectFit: "cover" }}
                />
              </picture>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </Link>
          ))}
        </div>
        <Link href="/menu">
          <button type="button" className="pointybtn pointybtn--dark menu-cta">
            View Full Menu
          </button>
        </Link>
      </section>
    </div>
  );
}
