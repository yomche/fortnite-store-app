function Footer() {
  return (
    <footer className="page-footer teal lighten-3">
      <div className="footer-copyright teal lighten-1">
        <div className="container-footer">
          © {new Date().getFullYear()} yomche
        </div>
      </div>
    </footer>
  );
}

export { Footer };
