import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiCanva, SiAdobephotoshop } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaFigma } from "react-icons/fa";
import { BiLogoGit, BiPodcast } from "react-icons/bi";
import { MdPersonalVideo } from "react-icons/md";

export const techs = [
  {
    id: 1,
    child: <SiAdobephotoshop color="white" size={40} />,
    title: "PhotoShop",
    style: "",
  },
  {
    id: 2,
    child: <SiCanva className="text-white" size={40} />,
    title: "Canva",
    style: "border border-second rounded-2xl py-5 px-20 md:px-8",
  },
  {
    id: 3,
    child: <FaFigma className="text-white" size={40} />,
    title: "Figma",
    style: "",
  },
];

export const services = [
  {
    id: 1,
    image: "visiteCard.jpg",
    title: "Visit Card",
    description: "description",
    style: "",
  },
  {
    id: 2,
    image: "logo.jpg",
    title: "Logo",
    description: "description",
    style: "",
  },
  {
    id: 3,
    image: "instagrampost.jpg",
    title: "Instagram post",
    description: "description",
    style: "",
  },
  {
    id: 3,
    image: "script.jpg",
    title: "Script",
    description: "description",
    style: "",
  },
  {
    id: 3,
    image: "voiceover.jpg",
    title: "VoiceOver",
    description: "description",
    style: "",
  },
  {
    id: 3,
    image: "logo.jpg",
    title: "Publicity",
    description: "description",
    style: "",
  },
];

export const works = [
  {
    id: 1,
    image: "f33cdef58f9e16c76ce2f480eab2426a.jpg",
  },

  {
    id: 2,
    image: "52863b8265cb4a595ee6aaafa79d0b50.jpg",
  },
  {
    id: 3,
    image: "45cdce8eeccfeb68b6116b5eeee84645.jpg",
  },
  {
    id: 3,
    image: "bf1419586f1f2438bf13504ff96ca3e8.jpg",
  },
];

export const links = [
  {
    id: 1,
    mobile: (
      <>
        <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:",
  },
];

export const Navlink = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "skills",
  },
  {
    id: 3,
    link: "services",
  },
  {
    id: 4,
    link: "work",
  },
  {
    id: 5,
    link: "contact",
  },
];

export const projects = [
  {
    id: 1,
    src: "portfolio.jpg",
    title: "portfolio",
    description: "lorem",
    hcode: "",
    hdemo: "",
  },
  {
    id: 2,
    src: "podcast.jpg",
    title: "podcast",
    description: "lorem",
    hcode: "hcode",
    hdemo: "",
  },
];

export const menuItem = [
  {
    id: 1,
    path: "/portfolio",
    title: "portfolio",
    icon: <MdPersonalVideo size={25} className="text-white" />,
  },
  {
    id: 2,
    path: "/podcast",
    title: "podcast",
    icon: <BiPodcast size={25} className="text-white" />,
  },
];

export const formItem = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Enter your email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    categorie: "input",
  },
  {
    id: 3,
    name: "message",
    placeholder: "Enter your message",
    categorie: "textarea",
  },
];
