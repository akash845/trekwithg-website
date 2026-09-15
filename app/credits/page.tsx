import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Credits',
  description: 'Attribution for photos sourced from Wikimedia Commons used across the TrekwithG site.',
};

const unsplashCredits = [
  { title: 'Travelogue Poster reference (framed poster on wall)', author: 'Martin Péchy' },
  { title: 'Scratch Map — India reference (printed regional maps)', author: 'Annie Spratt' },
  { title: 'Scratch Map — World reference (wooden world map)', author: 'Nikhilesh Boppana' },
  { title: 'Trail Patch Pack reference (hiking backpack)', author: 'Josiah Weiss' },
];

const credits = [
  { title: 'Har Ki Dun Valley View', author: 'Curious Eagle', license: 'CC BY-SA 2.0' },
  { title: 'Hampta Pass & Shepherd on the way to Hampta Pass', author: 'Raja Selvaraj', license: 'CC BY 2.0' },
  { title: 'Valley of Flowers', author: 'Belur Ashok', license: 'CC BY 2.0' },
  { title: 'Flower', author: 'solarisgirl', license: 'CC BY-SA 2.0' },
  { title: 'Narrowest part of Frozen Zanskar river', author: 'Sumita Roy Dutta', license: 'CC BY-SA 4.0' },
  { title: 'Bharmatal trek camp site', author: 'Himani611', license: 'CC BY-SA 4.0' },
  { title: 'Camp at Pongungu near Tso Kar', author: 'McKay Savage', license: 'CC BY 2.0' },
  { title: 'Night Camping on the Triund Hill', author: 'Poorna293', license: 'CC BY-SA 4.0' },
  { title: 'Entering Har Ki Dun & Supin River Valley', author: 'Omkar / Govind Shirude', license: 'CC BY-SA 4.0' },
  { title: 'Chandratal Lake', author: 'Sukhjiwan Singh', license: 'CC BY-SA 4.0' },
  { title: 'Reflection of Nanda Devi Hills on Hemkund Sahib Lake', author: 'Naresh Chandra', license: 'CC BY-SA 4.0' },
  { title: 'Chadar trek 01 & 14', author: 'Drashokk', license: 'CC BY-SA 4.0' },
  { title: 'Mesmerised & Interval', author: 'Tapas Biswas', license: 'CC BY-SA 4.0' },
  { title: 'Tso Kar reflections & Salty Tso Kar', author: 'McKay Savage', license: 'CC BY 2.0' },
];

export default function CreditsPage() {
  return (
    <section className="page" id="page-credits">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">Credits</div>
          <h2>Photo credits</h2>
        </div>
      </div>
      <p>
        Photos across this site are sourced from Wikimedia Commons and used under their Creative
        Commons licenses. Attribution below.
      </p>
      <ul style={{ lineHeight: 1.9, paddingLeft: '1.2em' }}>
        {credits.map((c, i) => (
          <li key={i}>
            {c.title} &copy; {c.author} ({c.license})
          </li>
        ))}
      </ul>
      <p style={{ marginTop: 32 }}>
        Store product reference images are placeholder photos from Unsplash, used under the Unsplash
        License (free for commercial use).
      </p>
      <ul style={{ lineHeight: 1.9, paddingLeft: '1.2em' }}>
        {unsplashCredits.map((c, i) => (
          <li key={i}>
            {c.title} &copy; {c.author} (Unsplash License)
          </li>
        ))}
      </ul>
    </section>
  );
}
