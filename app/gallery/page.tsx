import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from the trail — Kedarkantha, Brahmatal, Hampta Pass, Chadar, Valley of Flowers and basecamp night camps.',
};

const GALLERY_ITEMS = [
  {
    src: 'images/kedarkantha-region.jpg',
    alt: 'Har Ki Dun valley, near the Kedarkantha trailhead, Uttarakhand',
    caption: 'Sankri region · near Kedarkantha basecamp',
  },
  {
    src: 'images/brahmatal-campsite.jpg',
    alt: 'Brahmatal trek campsite in the snow',
    caption: 'Brahmatal · campsite',
  },
  {
    src: 'images/hampta-shepherd.jpg',
    alt: 'Shepherd on the trail to Hampta Pass',
    caption: 'Hampta Pass · on the trail',
  },
  {
    src: 'images/chadar-zanskar.jpg',
    alt: 'The frozen Zanskar river on the Chadar trek',
    caption: 'Chadar · on the frozen Zanskar',
  },
  {
    src: 'images/valley-of-flowers-bloom.jpg',
    alt: 'Wildflowers in bloom, Valley of Flowers National Park',
    caption: 'Valley of Flowers · peak bloom',
  },
  {
    src: 'images/triund-night-camp.jpg',
    alt: 'Night camping on Triund hill',
    caption: 'Basecamp · night camp',
  },
];

export default function GalleryPage() {
  return (
    <section className="page" id="page-gallery">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">From the trail</div>
          <h2>Gallery</h2>
        </div>
      </div>
      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item) => (
          <figure className="gcell" key={item.src}>
            <Image src={`/${item.src}`} alt={item.alt} width={220} height={165} />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="gallery-note eyebrow">
        Photos: Wikimedia Commons contributors, CC BY / CC BY-SA — see credits in the footer. Swap in
        your own trek photography anytime.
      </p>
    </section>
  );
}
