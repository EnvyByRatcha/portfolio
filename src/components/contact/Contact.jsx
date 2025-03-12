function Contact() {
  const copyClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full" id="contact">
      <div className="w-[90%] max-w-6xl mx-auto py-2">
        <div className="py-4 text-center">
          <div className="bg-[#EBEBEB] rounded-full w-fit mx-auto px-3 text-[16px] font-light">
            Contact
          </div>
          <div className="flex flex-col text-[20px] mt-4">
            <div>
              <i className="fa fa-envelope mr-2"></i>ratchanon.mskcr@gmail.com
              <button
                className="duration-100 transition-all hover:cursor-pointer hover:text-black"
                onClick={() => copyClipboard("ratchanon.mskcr@gmail.com")}
              >
                <i className="fa-regular fa-copy ml-2"></i>
              </button>
            </div>
            <div>
              <i className="fa fa-phone mr-2"></i>+66 960193880
              <button
                className="duration-100 transition-all hover:cursor-pointer hover:text-black"
                onClick={() => copyClipboard("0960193880")}
              >
                <i className="fa-regular fa-copy ml-2"></i>
              </button>
            </div>
          </div>
          <div className="mt-6">
            <div className="font-light text-[14px]">
              You may also find me on these platforms!
            </div>
            <div>
              <ul className="flex justify-center space-x-2 ">
                <li>
                  <a
                    href="https://github.com/EnvyByRatcha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ratchanon-musikacharoen-4216bb237/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
