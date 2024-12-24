import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full h-[505px] bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto max-w-[1440px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="font-bold text-2xl mb-4 text-gray-800">Funiro</h2>
            <p className="text-gray-600 leading-relaxed">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Navbar Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Navbar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-black">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Newsletter</h4>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <p className="text-center text-gray-500 text-sm">
          © 2023 Funiro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}