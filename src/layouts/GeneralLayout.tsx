import LogoTitle from "../assets/logo_title.png";
import LogoSmall from "../assets/logo_small.png";
import { useLocation, useNavigate } from "react-router-dom";
import { IoListCircleOutline } from "react-icons/io5";
import { IoIosArrowDropleft } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  console.log(location.pathname);
  const navigate = useNavigate();
  const handleRoute = () => {
    if (location.pathname.includes("profile")) {
      navigate("/");
    } else {
      navigate("/profile");
    }
  };

  return (
    <main className="w-screen min-h-screen flex flex-col justify-between">
      <nav className=" bg-white-700 w-full flex justify-between items-center mx-auto min-h-[60px] px-[10px]">
        <div className="inline-flex">
          <img
            src={LogoTitle}
            alt="logo"
            className="pl-5 object-contain max-w-[180px]"
          />
        </div>
        <div className="flex items-center gap-5">
          {location.pathname.includes("profile") ? (
            <IoListCircleOutline
              className=" text-[40px]"
              onClick={handleRoute}
            />
          ) : (
            <PiUserCircle className=" text-[40px]" onClick={handleRoute} />
          )}
          <a
            href="https://dsmoyka.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosArrowDropleft className=" text-[40px] mr-5" />
          </a>
        </div>
      </nav>
      <section className="flex w-full h-full flex-col px-[30px] min-h-fit ">
        {children}
      </section>
      <footer className=" bg-white-700 ">
        <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img
              src={LogoSmall}
              className="object-contain"
              width="38"
              height="38"
            />
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed font-thin">
            © All Rights Reserved. Powered by DSMOYKA PRIVATE LIMITED
          </p>
        </div>
      </footer>
    </main>
  );
}
