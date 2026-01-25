import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiGithub,
  SiGit,
  SiReplit,
  SiJupyter,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";


export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "OpenCV", icon: SiOpencv },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: BiLogoVisualStudio },
      { name: "Replit", icon: SiReplit  },
      { name: "Jupyter ", icon: SiJupyter  },
    ],
  },
];
