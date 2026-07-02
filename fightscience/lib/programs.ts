import type { Program } from "@/types/program";

export const programs: Program[] = [
  {
    slug: "mma-striking",
    title: "MMA Striking",
    icon: "striking",
    image: "/images/programs/mma-striking.jpg",
    description: [
      "This class covers all forms of the striking arts. With a heavy emphasis on Boxing and Kickboxing, we also incorporate some Jeet Kune Do and Traditional Martial Arts to be well rounded. Each class has a combination of technical drills, bag work, partner work and cardio.",
    ],
    note: "Requires boxing gloves & shin guards.",
    cta: { label: "Free Trial", href: "/#contact" },
  },
  {
    slug: "brazilian-jiu-jitsu",
    title: "Brazilian Jiu-Jitsu",
    icon: "bjj",
    image: "/images/programs/brazilian-jiu-jitsu.jpg",
    description: [
      "The art of Brazilian Jiu-Jitsu is the foundation of MMA and one of the best single forms of self-defense. Joint locks, chokes and controlling any opponent on the ground, where 90% of ALL fights and altercations end up! We train BJJ both the traditional way with a Gi or Kimono and also with no Gi to get used to a more realistic situation or an MMA fight.",
    ],
    cta: { label: "Free Trial", href: "/#contact" },
    callout: {
      eyebrow: "Women’s BJJ",
      body: "Due to the up close and personal nature of BJJ, we have created an all women introduction to the art for those who might be intimidated at first.",
      cta: { label: "Ask About Women’s BJJ", href: "/#contact" },
    },
  },
  {
    slug: "fighter-fit",
    title: "Fighter-Fit",
    icon: "fit",
    image: "/images/programs/fighter-fit.jpg",
    description: [
      "MMA Fighters are in the best shape of any athlete. This is partly due to their rigorous circuit training that combines resistance training, bodyweight exercises, aerobic and anaerobic cardio workouts — kettlebells, medicine balls, calisthenics, etc. All designed to push you like a fighter, to fit with your current fitness level.",
    ],
    cta: { label: "Free Trial", href: "/#contact" },
  },
  {
    slug: "kids-classes",
    title: "Kids Classes",
    icon: "kids",
    image: "/images/programs/kids-classes.jpg",
    description: [
      "Anti-bullying, self-defense, discipline, fitness… kids today need all of these things. Our Kids program does it all. Every aspect of fighting and self-defense is taught with a heavy dose of humility, self-respect, respect for others and respect for the art and their new-found skills.",
    ],
    cta: { label: "Free Trial", href: "/#contact" },
  },
  {
    slug: "mma-team-training",
    title: "MMA Team Training",
    icon: "team",
    image: "/images/programs/mma-team-training.jpg",
    description: [
      "This is the class for our pro and amateur fighters. This class is by invite only. If you feel you want to be a fighter, you can ask to be evaluated and if you are ready, you will be allowed to train on the team. We boast one of the longest running and most successful MMA fight teams in California with an average win rate of 75%. If you want to be a fighter… this is THE team to be on in Southern California.",
    ],
    cta: { label: "Request Evaluation", href: "/#contact" },
  },
];
