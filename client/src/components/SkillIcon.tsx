import { useState } from "react";
import {
  SiAxios,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVscodium,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface SkillIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  skillName: string;
}

const iconMap: Record<string, IconType> = {
  "Html 5": SiHtml5,
  Css: SiCss,
  "Java Script": SiJavascript,
  "Tailwind Css": SiTailwindcss,
  React: SiReact,
  Redux: SiRedux,
  "React Query": SiReactquery,
  "Type Script": SiTypescript,
  "Next js": SiNextdotjs,
  "Next js 13": SiNextdotjs,
  "Framer Motion": SiFramer,
  "Stripe Payment": SiStripe,
  "Node js": SiNodedotjs,
  "Express js": SiExpress,
  "Mongo db": SiMongodb,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": SiVscodium,
  Figma: SiFigma,
  Docker: SiDocker,
  Postman: SiPostman,
  Axios: SiAxios,
  "Socket.io": SiSocketdotio,
  Stripe: SiStripe,
  TensorFlow: SiTensorflow,
};

const iconColors: Record<string, string> = {
  "Html 5": "#E34F26",
  Css: "#1572B6",
  "Java Script": "#F7DF1E",
  "Tailwind Css": "#06B6D4",
  React: "#61DAFB",
  Redux: "#764ABC",
  "React Query": "#FF4154",
  "Type Script": "#3178C6",
  "Next js": "#FFFFFF",
  "Next js 13": "#FFFFFF",
  "Framer Motion": "#FFFFFF",
  "Stripe Payment": "#635BFF",
  "Node js": "#5FA04E",
  "Express js": "#FFFFFF",
  "Mongo db": "#47A248",
  Firebase: "#FFCA28",
  Supabase: "#3ECF8E",
  PostgreSQL: "#4169E1",
  Git: "#F05032",
  GitHub: "#FFFFFF",
  "VS Code": "#22A8F2",
  Figma: "#F24E1E",
  Docker: "#2496ED",
  Postman: "#FF6C37",
  Axios: "#5A29E4",
  "Socket.io": "#FFFFFF",
  Stripe: "#635BFF",
  TensorFlow: "#FF6F00",
};

export function SkillIcon({
  src,
  alt,
  width,
  height,
  skillName,
}: SkillIconProps) {
  const [imageError, setImageError] = useState(false);
  const BrandIcon = iconMap[skillName];

  if (BrandIcon) {
    return (
      <div
        aria-label={alt}
        role="img"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          color: iconColors[skillName],
        }}
        className="flex items-center justify-center transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)]"
      >
        <BrandIcon className="w-full h-full" aria-hidden="true" />
      </div>
    );
  }

  if (imageError) {
    return (
      <div
        style={{ width: `${width}px`, height: `${height}px` }}
        className="flex items-center justify-center text-cyan-400"
        role="img"
        aria-label={alt}
      >
        <span className="text-xs font-semibold text-center">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setImageError(true)}
      className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)]"
    />
  );
}
