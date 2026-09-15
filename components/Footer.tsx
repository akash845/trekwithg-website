export default function Footer() {
  return (
    <>
      <footer className="wrap">
        <span>&copy; {new Date().getFullYear()} TrekwithG · Get It Done.</span>
        <span>
          <a href="https://www.instagram.com/trekwith_g/" target="_blank" rel="noopener">
            Instagram
          </a>{' '}
          · <a href="mailto:hello@trekwithg.com">hello@trekwithg.com</a>
        </span>
      </footer>
      <div
        className="wrap"
        style={{
          paddingBlock: '0 28px',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '.64rem',
          color: 'var(--mist)',
          lineHeight: 1.8,
        }}
      >
        Photo credits (Wikimedia Commons): Har Ki Dun Valley View &copy; Curious Eagle (CC BY-SA 2.0) ·
        Hampta Pass &amp; Shepherd on the way to Hampta Pass &copy; Raja Selvaraj (CC BY 2.0) ·
        Valley of Flowers &copy; Belur Ashok (CC BY 2.0) · Flower &copy; solarisgirl (CC BY-SA 2.0) ·
        Narrowest part of Frozen Zanskar river &copy; Sumita Roy Dutta (CC BY-SA 4.0) ·
        Bharmatal trek camp site &copy; Himani611 (CC BY-SA 4.0) ·
        Camp at Pongungu near Tso Kar &copy; McKay Savage (CC BY 2.0) ·
        Night Camping on the Triund Hill &copy; Poorna293 (CC BY-SA 4.0) ·
        Entering Har Ki Dun &amp; Supin River Valley &copy; Omkar / Govind Shirude (CC BY-SA 4.0) ·
        Chandratal Lake &copy; Sukhjiwan Singh (CC BY-SA 4.0) ·
        Reflection of Nanda Devi Hills on Hemkund Sahib Lake &copy; Naresh Chandra (CC BY-SA 4.0) ·
        Chadar trek 01 &amp; 14 &copy; Drashokk (CC BY-SA 4.0) ·
        Mesmerised &amp; Interval &copy; Tapas Biswas (CC BY-SA 4.0) ·
        Tso Kar reflections &amp; Salty Tso Kar &copy; McKay Savage (CC BY 2.0).
      </div>
    </>
  );
}
