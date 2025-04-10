export function Header() {
  const currentPath = window.location.pathname;

  const navigationItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="flex justify-between items-start px-6 py-4 text-sm">
        <a href="/" className="hover:text-neutral-600 transition-colors">
          Sedanur Yıldız
        </a>
        <div className="hidden md:block max-w-sm">
          <div>
            A full stack developer and designer, obsessed with crafting smooth,
            seamless experiences that make complex technology effortlessly
            accessible.
          </div>
        </div>
        <div className="hidden md:block">sedanuryildiz23@gmail.com</div>
        <nav className="flex gap-4">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors ${
                currentPath === item.href
                  ? "text-neutral-400"
                  : "text-neutral-900 hover:text-neutral-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
