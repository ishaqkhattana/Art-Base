//BASIC HEADING ACROSS ALL PAGES
export const Nav = () => {
  return (
    <nav className=" border-gray-200 ml-4 px-2 sm:px-4 py-2.5 rounded flex justify-center mt-10">
      <div className="container flex flex-wrap items-center justify-center mx-auto">
        <a href="/" className="flex items-center justify-center">
          <span className="self-center lg:text-4xl text-xl font-semibold whitespace-nowrap text-gray-300">
            Art Base
          </span>
        </a>
      </div>
    </nav>
  );
};
