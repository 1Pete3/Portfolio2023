const Footer = () => {
  return (
    <footer className="bg-quaternary border-top border-2 border-secondary d-flex justify-content-center align-items-center">
      <div className=" container px-4 g-3 text-center ">
        <div className="row gx-5">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col p-3">
            <a
              href="https://www.linkedin.com/in/peter-skowronek/"
              target="_blank"
              rel="noopener noreferrer"
              className="scale-up-center githubFooter"
            >
              <i className="fs-3 bg-filler px-2 pt-2 pb-1 border border-2 border-primary rounded-2 fi fi-brands-linkedin"></i>
            </a>
          </div>

          <div className="col p-3">
            <a
              href="https://github.com/1Pete3"
              target="_blank"
              rel="noopener noreferrer"
              className="scale-up-center githubFooter"
            >
              <i className="fs-3 bg-filler px-2 pt-2 pb-1 border border-2 border-primary rounded-2 fi fi-brands-github"></i>
            </a>
          </div>

          <div className="col p-3 ">
            <i className="fs-3  bg-filler px-2 pt-2 pb-1 border border-2 border-primary rounded-2 fi fi-rr-envelope"></i>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
