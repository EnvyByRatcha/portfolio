function Header() {
  const scrollToTarget = (target) => {
    const targetElement = document.getElementById(target);
    const header = document.getElementById("header");
    const headerHeight = header ? header.offsetHeight : 0;

    window.scrollTo({
      top: targetElement.offsetTop - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed top-0 w-full bg-white/30 backdrop-blur-md border-b-2 border-white shadow-md"
      id="header"
    >
      <div className="w-[90%] max-w-6xl mx-auto py-2">
        <div className="flex justify-between items-center">
          <div className="text-[24px]">&#x2770; RCN.M /&#x2771;</div>
          <div className="md:hidden px-2">
            <i className="fa fa-bars text-lg"></i>
          </div>
          <div className="hidden md:flex gap-8 ">
            <button
              className="hover:cursor-pointer hover:text-black"
              onClick={() => scrollToTarget("root")}
            >
              About
            </button>
            <button
              className="hover:cursor-pointer hover:text-black"
              onClick={() => scrollToTarget("skill")}
            >
              Skill
            </button>
            <button
              className="hover:cursor-pointer hover:text-black"
              onClick={() => scrollToTarget("project")}
            >
              Project
            </button>
            <button
              className="hover:cursor-pointer hover:text-black"
              onClick={() => scrollToTarget("contact")}
            >
              contact
            </button>
            <div>
              <button className="text-white bg-[#424242] rounded px-2">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
