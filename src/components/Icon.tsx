import {
  House,
  Folder,
  User,
  Envelope,
  GithubLogo,
  LinkedinLogo,
  XLogo,
  FacebookLogo,
  InstagramLogo,
  Globe,
  ArrowUpRight,
  DownloadSimple,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

// Central icon map so components use names, not imports.
const icons = {
  house: House,
  folder: Folder,
  user: User,
  envelope: Envelope,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  x: XLogo,
  facebook: FacebookLogo,
  instagram: InstagramLogo,
  website: Globe,
  arrow: ArrowUpRight,
  download: DownloadSimple,
} satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof icons;

export default function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const Cmp = icons[name];
  return <Cmp size={size} weight="regular" aria-hidden="true" />;
}
