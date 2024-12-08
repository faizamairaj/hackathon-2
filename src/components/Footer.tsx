export default function Footer() {
    return (
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="font-bold text-2xl mb-4">Funiro</h2>
              <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className="w-1/3">
              <h4>Navbar</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="w-1/3">
              <h4>Help</h4>
              <ul>
                <li><a href="#">Payment Options</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Privacy Policies</a></li>
              </ul>
            </div>
            <div className="w-1/3">
              <h4>Newsletter</h4>
              <form>
                <input type="email" placeholder="Your Email" className="border border-gray-300 p-2 w-full mb-4" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <hr className="my-8 border-gray-300" />
          <p className="text-center text-gray-500">© 2023 Funiro. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }