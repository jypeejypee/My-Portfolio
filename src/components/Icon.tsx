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
  Printer,
  MapPin,
  GraduationCap,
  GameController,
  Browser,
  Terminal,
  Layout,
  Database,
  Copy,
  Check,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

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
  printer: Printer,
  pin: MapPin,
  graduation: GraduationCap,
  game: GameController,
  browser: Browser,
  terminal: Terminal,
  layout: Layout,
  database: Database,
  copy: Copy,
  check: Check,
  sparkle: Sparkle,
} satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof icons;

export default function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const Cmp = icons[name];
  return <Cmp size={size} weight="regular" aria-hidden="true" />;
}
