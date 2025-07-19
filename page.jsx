import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-black border-b border-gray-800">
        <h1 className="text-xl font-bold uppercase tracking-widest">CRUCIFY</h1>
        <nav className="space-x-4">
          <Link href="/shop">Shop</Link>
          <Link href="/lookbook">Lookbook</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/cart">🛒</Link>
          <Link href="/account">👤</Link>
        </nav>
      </header>

      <section className="h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <h2 className="text-6xl font-bold uppercase tracking-widest">New Season Drop</h2>
      </section>

      <section className="px-6 py-16">
        <h3 className="text-3xl mb-8">Featured Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              <Image src={`/products/item${item}.jpg`} alt={`item${item}`} width={500} height={700} className="w-full h-auto object-cover" />
              <p className="mt-2 text-sm">Product {item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white text-black px-6 py-16">
        <h3 className="text-3xl mb-8">Lookbook</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <Image key={item} src={`/lookbook/look${item}.jpg`} alt={`look${item}`} width={800} height={500} className="w-full h-auto" />
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <h3 className="text-3xl mb-4">About CRUCIFY</h3>
        <p className="text-gray-400 max-w-2xl">
          CRUCIFY is a contemporary streetwear label merging minimal aesthetics with urban storytelling. Born in Seoul, inspired by subculture, our clothing expresses identity beyond trends.
        </p>
      </section>

      <footer className="bg-black border-t border-gray-800 px-6 py-10 text-sm text-gray-500">
        <div className="flex justify-between">
          <p>© 2025 CRUCIFY</p>
          <div className="space-x-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="https://instagram.com/crucifywear" target="_blank">Instagram</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
