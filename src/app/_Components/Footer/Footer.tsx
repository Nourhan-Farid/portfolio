import Socials from "../Socials/Socials";

export default function Footer() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <footer className="container mx-auto text-[#003783] dark:text-white  py-16">
        <div className=" mx-auto px-6">
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className=" text-center text-gray-900 dark:text-gray-400">
              <p>
                © 2025 <strong>Nourhan Farid</strong> • Let's create something
                amazing.
              </p>
            </div>
            <div className="flex space-x-6">
              <Socials />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
