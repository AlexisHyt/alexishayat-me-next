import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaDocker, FaGitAlt, FaLaravel, FaVuejs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiGithubactions,
  SiJetbrains,
  SiNginx,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const SKILLS_GROUPS = {
  "Lightside (Frontend)": [
    {
      name: "React",
      icon: SiReact,
      color: "text-[#00DCFF]",
      border: "border-[#00DCFF]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#00DCFF]",
      documentation: "https://fr.react.dev/",
    },
    {
      name: "Vue",
      icon: FaVuejs,
      color: "text-[#47BA87]",
      border: "border-[#47BA87]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#47BA87]",
      documentation: "https://vuejs.org/",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-[#3EBFF8]",
      border: "border-[#3EBFF8]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#3EBFF8]",
      documentation: "https://tailwindcss.com/",
    },
    {
      name: "Typescript",
      icon: BiLogoTypescript,
      color: "text-[#377CC8]",
      border: "border-[#377CC8]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#377CC8]",
      documentation: "https://www.typescriptlang.org/",
    },
  ],
  "The Engine Room (Backend)": [
    {
      name: "Next JS",
      icon: RiNextjsFill,
      color: "text-[#ffffff]",
      border: "border-[#ffffff]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#ffffff]",
      documentation: "https://nextjs.org/",
    },
    {
      name: "Laravel",
      icon: FaLaravel,
      color: "text-[#F04235]",
      border: "border-[#F04235]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#F04235]",
      documentation: "https://laravel.com/",
    },
    {
      name: "PostgreSQL",
      icon: BiLogoPostgresql,
      color: "text-[#396C94]",
      border: "border-[#396C94]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#396C94]",
      documentation: "https://www.postgresql.org/",
    },
  ],
  "Hyperdrive (Infra & Tools)": [
    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-[#F05639]",
      border: "border-[#F05639]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#F05639]",
      documentation: "https://git-scm.com/",
    },
    {
      name: "CI/CD",
      icon: SiGithubactions,
      color: "text-[#ffffff]",
      border: "border-[#ffffff]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#ffffff]",
      documentation: "https://github.com/features/actions",
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: "text-[#2B99EE]",
      border: "border-[#2B99EE]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#2B99EE]",
      documentation: "https://www.docker.com/",
    },
    {
      name: "NGINX",
      icon: SiNginx,
      color: "text-[#089841]",
      border: "border-[#089841]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#089841]",
      documentation: "https://nginx.org/",
    },
    {
      name: "JetBrains",
      icon: SiJetbrains,
      color: "text-[#ED08CA]",
      border: "border-[#ED08CA]",
      shadow: "hover:shadow-[0px_0px_15px_4px_#ED08CA]",
      documentation: "https://www.jetbrains.com/",
    },
  ],
};
