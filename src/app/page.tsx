import RetroGrid from "@/components/magicui/retro-grid";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";
import Marquee from "@/components/magicui/marquee";
import IconCloud from "@/components/magicui/icon-cloud";
import Image from "next/image";

// Marquee
const reviews = [
  {
    name: "Multimedia Aplication, Big Data and Cybersecurity Laboratory",
    job: "Study Group",
    body: "Mempelajari keempat divisi dari MBC Laboratory baik itu Cybersecurity, GIS, Big Data dan GameTech.",
    img: "mbclab.png",
  },
  {
    name: "Central Computer Improvement",
    job: "Network Engineer",
    body: "Mentoring mempelajari tentang jaringan mulai dari teori, infrastruktur, konfigurasi sampai pengamanan jaringan..",
    img: "cci.png",
  },
  {
    name: "PT. Telkom Akses Malang",
    job: "Tim Uji Terima",
    body: "Magang selama 3 bulan menjadi Tim Uji Terima yang bertugas menginput evidensi hasil pengecekan jaringan customer.",
    img: "ta.png",
  },
];
 
const ReviewCard = ({
  img,
  name,
  job,
  body,
}: {
  img: string;
  name: string;
  job: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{job}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// icon-Cloud
const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "c",
  "python",
  "nextdotjs",
  "amazonaws",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "canva",
  "adobe",
  "linux",
  "blender",
  "unity",
];

export default function Home() {
  return (
    <>
      <RetroGrid className="fixed bg-dark bg-opacity-20"/>
      {/* Header Start */}
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home" className="font-bold text-lg text-primary block py-6">kand</a>
            </div>
            <div className="flex items-center px-4">
              <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg 
              max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex">
                  <li className="group">
                    <a href="#home" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                      Beranda</a>
                  </li>
                  <li className="group">
                    <a href="./about" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                      Tentang Saya</a>
                  </li>
                  <li className="group">
                    <a href="./skills" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                      Skill</a>
                  </li>
                  <li className="group">
                    <a href="./experience" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                      Pengalaman</a>
                  </li>
                  <li className="group">
                    <a href="./project" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                      Project</a>
                  </li>
                  <li className="group">
                    <a href="./kontak" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                      Kontak</a>
                  </li>
                  
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Section Start */}
      <section id="home" className="pt-20" >
        <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full self-center px-4 lg:w-1/2">
                <h1 className="text-base font-semibold text-primary md:text-xl">Halo Semua 👋, 
                  saya <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Kanjeng Dhimas Cahyoherlina</span></h1>
                <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Network & Cybersecurity
                  <span className="text-dark"> Professional</span></h2>
                <p className="font-medium text-secondary mb-10 leading-relaxed
                ">Melindungi infrastruktur digital dan data dari 
                berbagai ancaman adalah <span className="font-bold text-slate-900">keahlian saya.</span></p>
                
                <a href="./kontak" className="text-base font-semibold text-white bg-primary
                py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300
                ease-in-out">Hubungi Saya</a>
              </div>
              <div className="w-full self-end px-4 lg:w-1/2 ">
                <div className="relative mt-10 lg:mt-9 lg:right-auto">
                  <img src="myprofile.png" alt="Kanjeng Dhimas" className="max-w-full mx-auto"/>
                  <span className="absolute bottom-36 -z-20 left-1/2 -translate-x-1/2 md:scale-125 ">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#5f9ea0" d="M51.4,-12.6C59.8,9,54.9,38.9,37.3,51.8C19.7,64.7,-10.7,60.6,
                  -30.1,45.5C-49.5,30.5,-58,4.4,-51.2,-15.1C-44.3,-34.6,-22.2,-47.7,-0.3,-47.6C21.5,-47.5,
                  43.1,-34.2,51.4,-12.6Z" transform="translate(100 100)" scale={1.1}
                  />
                  </svg>
                  </span>
                </div>
              </div>
            </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pt-20 pb-16">  
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang saya</h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Yuk upgrade skill mu dengan Cybersecurity!</h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Pekerjaan di bidang Cybersecurity sangat penting karena ancaman digital terus meningkat. 
                Cybersecurity melindungi data dan memastikan teknologi tetap aman, sehingga peran ini semakin dibutuhkan di era digital ini.</p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl">Mari berteman</h3>
              <p className="font-medium text-base text-secondary mb-6">Perkenalkan nama ku Kanjeng Dhimas Cahyoherlina, bisa dipanggil Kanjeng aja. Asal saya dari Jawa Timur, 
                Kota Probolinggo. Saya kita dapat saling sharing seputar mengenai Network & Cybersecurity.
              </p>
              <div className="flex items-center justify-center">
                {/* Instagram */}
                <a href="https://www.instagram.com/kanjeeng__/" target="_blank" className="w-9 h-9 mr-3 rounded-full 
                flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary
                hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                </a>

                {/* Youtube */}
                <a href="https://www.youtube.com/@kanjeeng179" target="_blank" className="w-9 h-9 mr-3 rounded-full 
                flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary
                hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/kanjeeng" target="_blank" className="w-9 h-9 mr-3 rounded-full 
                flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary
                hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                </a>

                {/* Discord */}
                <a href="https://discord.gg/YGEChhv7" target="_blank" className="w-9 h-9 mr-3 rounded-full 
                flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary
                hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
                </a>

                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/kanjeng-dhimas-cahyoherlina-249155197/" target="_blank" className="w-9 h-9 mr-3 rounded-full 
                flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary
                hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Pengalaman Section Start */}
      {/* <section id="pengalaman" className="pt-20 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Pengalaman</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Pengalaman Bermanfaat</h2>
              <p className="font-medium text-md text-secondary md:text-lg">Sangat penting untuk kita memiliki banyak pengalaman manfaatnya dapat meningkatkan ilmu, Khususnya dibidang yang kita minati.</p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img src="mbclab.png" alt="mbclab" className="w-40 md block mx-auto mt-6"/>
                <div className="py-8 px-6">
                  <h3>
                    <a href="https://www.linkedin.com/company/mbclaboratory/" target="_blank" className="block mb-3 font-semibold text-xl text-dark hover:text-primary">Multimedia Application, Big Data and Cybersecurity Laboratory</a>
                  </h3>
                  <h2 className="text-dark font-semibold">Study Group</h2>
                  <p className="font-medium text-base text-secondary mb-6"> Mempelajari keempat divisi dari MBC Laboratory baik itu Cybersecurity, GIS, Big Data dan GameTech.</p>
                  <a href="https://www.linkedin.com/company/mbclaboratory/" target="_blank" className="font-medium text-sm text-white bg-primary py-2 px-4
                  rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img src="cci.png" alt="cci" className="w-40 md block mx-auto mt-6"/>
                <div className="py-8 px-6">
                  <h3>
                    <a href="https://www.linkedin.com/company/cci-telkomuniversity/" target="_blank" className="block mb-3 font-semibold text-xl text-dark hover:text-primary">Central Computer Improvement (CCI)</a>
                  </h3>
                  <h2 className="text-dark font-semibold">Network Engineer</h2>
                  <p className="font-medium text-base text-secondary mb-6"> Mentoring mempelajari tentang jaringan mulai dari teori, infrastruktur, konfigurasi sampai pengamanan jaringan.</p>
                  <a href="https://www.linkedin.com/company/cci-telkomuniversity/" target="_blank" className="font-medium text-sm text-white bg-primary py-2 px-4
                  rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img src="ta.png" alt="ta" className="w-40 md block mx-auto mt-6"/>
                <div className="py-8 px-6">
                  <h3>
                    <a href="https://www.linkedin.com/company/pt-telkom-akses/" target="_blank" className="block mb-10 font-semibold text-xl text-dark hover:text-primary">PT Telkom Akses Malang</a>
                  </h3>
                  <h2 className="text-dark font-semibold">Tim Uji Terima</h2>
                  <p className="font-medium text-base text-secondary mb-6">Magang selama 3 bulan menjadi Tim Uji Terima yang bertugas menginput evidensi hasil pengecekan jaringan customer.</p>
                  <a href="https://www.linkedin.com/company/pt-telkom-akses/" target="_blank" className="font-medium text-sm text-white bg-primary py-2 px-4
                  rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Pengalaman Section End */}

      {/* Pengalaman Marquee Section Start */}
      <section id="pengalaman" className="pt-20 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Pengalaman</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Pengalaman Bermanfaat</h2>
              <p className="font-medium text-md text-secondary md:text-lg">Sangat penting untuk kita memiliki banyak pengalaman manfaatnya dapat meningkatkan ilmu, Khususnya dibidang yang kita minati.</p>
            </div>
          </div>

          <div className="relative flex w-full flex-wrap items-center justify-center overflow-hidden">
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {reviews.map((review) => (
                <ReviewCard key={review.job} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-background"></div>
          </div>
        </div>
      </section>
      {/* Pengalaman Marquee Section End */}

      {/* Skill Section Start */}
      <section id="skill" className="pt-20 pb-20 ">
        <div className="container">
          <div className="w-full p-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Skill</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Memiliki Skill Diberbagai Bidang</h2>
              <p className="font-medium text-md text-secondary md:text-lg">Sangat penting untuk kita memiliki banyak skill baik itu yang Hardskills maupun Softskills</p>
              <div className="rounded-md overflow-hidden ">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
                  <IconCloud iconSlugs={slugs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skill Section End */}

      {/* Project Section Start */}
      <section id="project" className="section pt-20 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Project</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
              <p className="font-medium text-md text-secondary md:text-lg">Berikut merupakan project-project yang sudah pernah saya selesaikan baik itu individu maupun team</p>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="project1.png" alt="Landing Page" width="w-full" />
              </div>
              <a href="https://docs.google.com/document/d/1QJvrfZS14Uqrfqd3IZITct4eLvtzSZ5mP-hjXj7ZgpQ/edit?usp=sharing" 
              className="font-semibold text-xl text-dark mt-5 mb-3" target="_blank">Landing Page MBC Laboratory</a>
              <p className="font-medium text-base text-secondary mt-3">Membuat Landing Page bertema profil MBC Laboratory menggunkan html & css, dan mendeploy nya menggunkan github. 
                Menambahkan DNS serta layanan keamanan website menggunakan Cloudflare.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="project2.png" alt="Landing Page" width="w-full" />
              </div>
              <a href="https://docs.google.com/document/d/1NxTgkDAlaUeYNXAzjdPW0lHDT2S0yAv00Xml0_JM7x0/edit?usp=sharing" 
              className="font-semibold text-xl text-dark mt-5 mb-3" target="_blank">Docker Load Balancing</a>
              <p className="font-medium text-base text-secondary mt-3">Menjalankan Website dengan cara membagi beban server menggunkan 3 machine yang menjalankan layanan aplikasi yang sama, 
                untuk menjaga avaibility suatu Website.  
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="project3.png" alt="Landing Page" width="w-full" />
              </div>
              <a href="https://docs.google.com/document/d/1Coyw2lrq39CiumGD33vM4yaKht06jbuP/edit?usp=sharing&ouid=117339854732040969619&rtpof=true&sd=true" 
              className="font-semibold text-xl text-dark mt-5 mb-3" target="_blank">Named Data Network (NDN)</a>
              <p className="font-medium text-base text-secondary mt-3">Membuatarsitektur jaringan masa depan yang mana user atau customer tidak perlu lagi memerlukan IP 
                Address untuk mengakses sebuah konten pada internet, melainkan menggunakan Nama konten.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="project4.png" alt="Landing Page" width="w-full" />
              </div>
              <a href="https://docs.google.com/document/d/1NLvnxPJxMJjfHtGZtKTw78_VbvphAo-0/edit?usp=sharing&ouid=117339854732040969619&rtpof=true&sd=true" 
              className="font-semibold text-xl text-dark mt-5 mb-3" target="_blank">Riset UI/UX Open Library</a>
              <p className="font-medium text-base text-secondary mt-3">Menganalisi permasalahan & kendala yang dialami pengguna, serta memperbaiki desain website Open Library Universitas Telkom.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section End */}

      {/* Hubungi Saya Section Start */}
      <section id="kontak"className="p-4 max-w-3xl mx-auto pt-20 pb-20">
        <h4 className="font-semibold text-lg text-primary mb-2 max-w-xl mx-auto text-center">Hubungi Saya</h4>
        <h1 className="text-3xl font-bold">Kontak</h1>
        <p>Silahkan isi formulir dibawah ini</p>

        <ContactForm />
      </section>
      {/* Hubungi Saya Section End */}

      {/* Footer Start */}
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">WPU</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p>dimasleny210@gmail.com</p>
              <p>Jl.KH Ahmad Dahlan Kav Angguran</p>
              <p>Bandung</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
              <ul className="text-slate-300">
                <li>
                  <a href="#" className="inline-block text-base text-secondary hover:text-primary mb-3">Cybersecurity</a>
                </li>
                <li>
                  <a href="#" className="inline-block text-base text-secondary hover:text-primary mb-3">Network</a>
                </li>
                <li>
                  <a href="#" className="inline-block text-base text-secondary hover:text-primary mb-3">Skill</a>
                </li>
              </ul>
            </div>

            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <a href="#home" className="inline-block text-base text-secondary hover:text-primary mb-3">Beranda</a>
                </li>
                <li>
                  <a href="./about" className="inline-block text-base text-secondary hover:text-primary mb-3">Tentang Saya</a>
                </li>
                <li>
                  <a href="./skills" className="inline-block text-base text-secondary hover:text-primary mb-3">Skill</a>
                </li>
                <li>
                  <a href="./experience" className="inline-block text-base text-secondary hover:text-primary mb-3">Pengalaman</a>
                </li>
                <li>
                  <a href="./project" className="inline-block text-base text-secondary hover:text-primary mb-3">Project</a>
                </li>
                <li>
                  <a href="./kontak" className="inline-block text-base text-secondary hover:text-primary mb-3">Kontak</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full pt-10 border-t border-slate-800">
              <div className="flex items-center justify-center mb-5">
                {/* Instagram */}
                <a href="https://www.instagram.com/kanjeeng__/" target="_blank" className="w-9 h-9 mr-3 rounded-full 
                flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary
                hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                </a>

                {/* Youtube */}
                <a href="https://www.youtube.com/@kanjeeng179" target="_blank" className="w-9 h-9 mr-3 rounded-full 
                flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary
                hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/kanjeeng" target="_blank" className="w-9 h-9 mr-3 rounded-full 
                flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary
                hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                </a>

                {/* Discord */}
                <a href="https://discord.gg/YGEChhv7" target="_blank" className="w-9 h-9 mr-3 rounded-full 
                flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary
                hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
                </a>

                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/kanjeng-dhimas-cahyoherlina-249155197/" target="_blank" className="w-9 h-9 mr-3 rounded-full 
                flex justify-center items-center border border-slate-300  text-slate-300 hover:border-primary hover:bg-primary
                hover:text-white">
                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                </a>
              </div>
              <p className="font-medium text-xs text-slate-500 text-center">Dibuat dengan <span className="text-pink-500">❤️</span> oleh  
              <a href="https://www.instagram.com/kanjeeng__/" target="_blank" className="font-bold text-primary"> Kanjeng Dhimas Cahyoherlina</a>, menggunakan 
              <a href="https://tailwindcss.com" target="_blank" className="font-bold text-sky-500"> Tailwind CSS</a>.</p>
          </div>  
        </div>
      </footer>
      {/* Footer End */}

      {/* Back to top Start */}
      <a href="#home" className="fixed hidden justify-center items-center bottom-4 right-4 z-[9999] h-14 w-14 bg-primary rounded-full p-4 hover:animate-pulse" id="to-top">
        <span className="block h-5 w-5 rotate-45 border-t-2 border-l-2 mt-2"></span>
      </a>
      {/* Back to top End */}


      <script src="/script.js"/>
    </>
  );
}
