export default function Footer() {
  return (
    <footer className="bg-blue-100 dark:bg-blue-900">
      <div className="container mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-blue-800 dark:text-blue-200 text-sm md:text-base text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Keith. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center md:justify-end">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-blue-700 dark:text-blue-300 hover:underline text-sm md:text-base"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-700 dark:text-blue-300 hover:underline text-sm md:text-base"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
