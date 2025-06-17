import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-black text-white border border-gray-800">
      {/* <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left ">
          Built by{" "}
          <a
            href="https://github.com/sajit21/Netflix"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            you
          </a>
          .This source code is available on{" "}
          <a href="https://github.com/sajit21/Netflix"
          target="_blank"
          rel='noreferrer'
          className="font-medium underline underline-offset-4">
            Github
          </a>
          .
        </p>
      </div> */}
{/* <div className="mx-2 md:mx-4"> */}
  <p className="px-2 py-3 ">You can check the link of my GitHub i.e {""}
    <a href="https://github.com/sajit21/Netflix" target="_blank" className="font-medium hover:underline  ">me</a>
  </p>
{/* </div> */}
    </footer>
  );
};

export default Footer;
