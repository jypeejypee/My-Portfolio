import {
  House,
  Folder,
  User,
  Envelope,
  FileText,
  GithubLogo,
  LinkedinLogo,
  XLogo,
  FacebookLogo,
  InstagramLogo,
  Globe,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  DownloadSimple,
  MapPin,
  GraduationCap,
  Briefcase,
  RocketLaunch,
  Clock,
  Certificate,
  Sun,
  Moon,
  Copy,
  Check,
  Sparkle,
  Lock,
  Play,
  Stack,
  Wrench,
  Code,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon as PhosphorIcon, IconWeight } from "@phosphor-icons/react";

// Central icon map so components use names, not imports.
const icons = {
  house: House,
  folder: Folder,
  user: User,
  envelope: Envelope,
  file: FileText,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  x: XLogo,
  facebook: FacebookLogo,
  instagram: InstagramLogo,
  website: Globe,
  arrow: ArrowUpRight,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  download: DownloadSimple,
  pin: MapPin,
  graduation: GraduationCap,
  briefcase: Briefcase,
  rocket: RocketLaunch,
  clock: Clock,
  certificate: Certificate,
  sun: Sun,
  moon: Moon,
  copy: Copy,
  check: Check,
  sparkle: Sparkle,
  lock: Lock,
  play: Play,
  stack: Stack,
  wrench: Wrench,
  code: Code,
} satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof icons;

export default function Icon({
  name,
  size = 18,
  weight = "regular",
}: {
  name: IconName;
  size?: number;
  weight?: IconWeight;
}) {
  const Cmp = icons[name];
  return <Cmp size={size} weight={weight} aria-hidden="true" />;
}
