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
          · <a href="/store">Store</a>
          · <a href="/gear">Gear checklist</a>
          · <a href="/credits">Photo credits</a>
        </span>
      </footer>
    </>
  );
}
