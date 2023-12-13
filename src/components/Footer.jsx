function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Emporio Cives. Todos los derechos reservados.
        </div>
        <div className="space-x-4">
          <a
            href="https://twitter.com/"
            className="text-gray-600 hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/"
            className="text-gray-600 hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-gray-600 hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
