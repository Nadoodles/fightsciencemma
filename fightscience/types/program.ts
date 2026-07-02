export type ProgramIconName =
  | "striking"
  | "bjj"
  | "fit"
  | "kids"
  | "team";

export type ProgramCallout = {
  eyebrow: string;
  body: string;
  cta: { label: string; href: string };
};

export type Program = {
  slug: string;
  title: string;
  icon: ProgramIconName;
  image: string;
  description: string[];
  note?: string;
  cta: { label: string; href: string };
  callout?: ProgramCallout;
};
