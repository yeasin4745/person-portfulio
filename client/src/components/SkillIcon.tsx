import { useState } from 'react';
import {
  Code2,
  GitBranch,
  Github,
  FileCode,
  Palette,
  Box,
  Zap,
  Database,
  Cloud,
  Cpu,
  Layers,
  Workflow,
  Package,
  Terminal,
  Gauge,
} from 'lucide-react';

interface SkillIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  skillName: string;
}

// Map skill names to Lucide icons
const iconMap: Record<string, React.ReactNode> = {
  'Node js': <Cpu className="w-full h-full" />,
  'Express js': <Zap className="w-full h-full" />,
  'Mongo db': <Database className="w-full h-full" />,
  'Firebase': <Cloud className="w-full h-full" />,
  'Supabase': <Cloud className="w-full h-full" />,
  'PostgreSQL': <Database className="w-full h-full" />,
  'Git': <GitBranch className="w-full h-full" />,
  'GitHub': <Github className="w-full h-full" />,
  'VS Code': <FileCode className="w-full h-full" />,
  'Figma': <Palette className="w-full h-full" />,
  'Docker': <Box className="w-full h-full" />,
  'Postman': <Zap className="w-full h-full" />,
  'Redux': <Layers className="w-full h-full" />,
  'React Query': <Workflow className="w-full h-full" />,
  'Axios': <Zap className="w-full h-full" />,
  'Socket.io': <Gauge className="w-full h-full" />,
  'Stripe': <Package className="w-full h-full" />,
  'TensorFlow': <Cpu className="w-full h-full" />,
};

export function SkillIcon({ src, alt, width, height, skillName }: SkillIconProps) {
  const [imageError, setImageError] = useState(false);

  // Get the fallback icon for this skill
  const fallbackIcon = iconMap[skillName];

  if (imageError && fallbackIcon) {
    return (
      <div
        style={{ width: `${width}px`, height: `${height}px` }}
        className="flex items-center justify-center text-cyan-400"
      >
        {fallbackIcon}
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
      className="group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] transition-all duration-300"
    />
  );
}
