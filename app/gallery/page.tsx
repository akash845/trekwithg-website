import type { Metadata } from 'next';
import LightboxGallery from '@/components/Lightbox';

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
  {
    src: 'images/kedarkantha-harkidun.jpg',
    alt: 'Har Ki Dun valley view on the Kedarkantha region trail',
    caption: 'Kedarkantha · Har Ki Dun valley',
  },
  {
    src: 'images/kedarkantha-supin-valley.jpg',
    alt: 'Supin river valley near the Kedarkantha trek',
    caption: 'Kedarkantha · Supin valley',
  },
  {
    src: 'images/brahmatal-nandaghunti-view.jpg',
    alt: 'View of Nanda Ghunti peak from the Brahmatal ridge',
    caption: 'Brahmatal · Nanda Ghunti view',
  },
  {
    src: 'images/brahmatal-trekker-view.jpg',
    alt: 'Trekker overlooking snow-covered peaks on the Brahmatal trek',
    caption: 'Brahmatal · ridge walk',
  },
  {
    src: 'images/hampta-pass.jpg',
    alt: 'Hampta Pass trail between Kullu and Lahaul valleys',
    caption: 'Hampta Pass · crossing the pass',
  },
  {
    src: 'images/hampta-chandratal.jpg',
    alt: 'Chandratal lake near the Hampta Pass trek',
    caption: 'Hampta Pass · Chandratal lake',
  },
  {
    src: 'images/chadar-trek-01.jpg',
    alt: 'Trekkers walking on the frozen Zanskar river',
    caption: 'Chadar · walking the ice',
  },
  {
    src: 'images/chadar-trek-14.jpg',
    alt: 'Gorge walls along the Chadar trek route',
    caption: 'Chadar · the gorge',
  },
  {
    src: 'images/valley-of-flowers.jpg',
    alt: 'Valley of Flowers National Park in full bloom',
    caption: 'Valley of Flowers · the valley',
  },
  {
    src: 'images/vof-hemkund-sahib.jpg',
    alt: 'Hemkund Sahib lake near the Valley of Flowers trek',
    caption: 'Valley of Flowers · Hemkund Sahib',
  },
  {
    src: 'images/ladakh-basecamp.jpg',
    alt: 'Basecamp tents in the Ladakh mountains',
    caption: 'Ladakh · basecamp',
  },
  {
    src: 'images/ladakh-tsokar-salt.jpg',
    alt: 'Salt flats at Tso Kar lake, Ladakh',
    caption: 'Ladakh · Tso Kar salt flats',
  },
  {
    src: 'images/ladakh-tsokar-reflections.jpg',
    alt: 'Mountain reflections on Tso Kar lake, Ladakh',
    caption: 'Ladakh · Tso Kar reflections',
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
      <LightboxGallery
        className="gallery-grid"
        itemClassName="gcell"
        imgWidth={220}
        imgHeight={165}
        images={GALLERY_ITEMS}
      />
      <p className="gallery-note eyebrow">
        Photos: Wikimedia Commons contributors, CC BY / CC BY-SA — see credits in the footer. Swap in
        your own trek photography anytime.
      </p>
    </section>
  );
}
