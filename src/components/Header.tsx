export function Header() {
  const currentPath = window.location.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="flex justify-between items-start px-6 py-4 text-sm">
        <a href="/" className="hover:text-neutral-600 transition-colors">
          Sedanur Yıldız
        </a>
        <div className="hidden md:block max-w-sm">
          <div>
            A design and front-end sorcerer, obsessed with crafting smooth,
            seamless experiences that make complex technology effortlessly
            accessible.
          </div>
        </div>
        <div>sedanuryildiz23@gmail.com</div>
        <nav className="flex gap-4">
          <a
            href="/about"
            className={`transition-colors ${
              currentPath === "/about"
                ? "text-neutral-900"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            About
          </a>
          <a
            href="/"
            className={`transition-colors ${
              currentPath === "/"
                ? "text-neutral-900"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            Work
          </a>
        </nav>
      </div>
    </header>
  );
}
