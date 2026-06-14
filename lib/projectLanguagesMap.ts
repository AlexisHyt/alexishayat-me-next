export const projectLanguagesMap: Record<
  string,
  { text: string; border: string }
> = {
  TypeScript: {
    text: "text-[#3178C6]",
    border: "border-[#3178C6]",
  },
  JavaScript: {
    text: "text-[#EFD81D]",
    border: "border-[#EFD81D]",
  },
  CSS: {
    text: "text-[#254BDD]",
    border: "border-[#254BDD]",
  },
  PHP: {
    text: "text-[#7377AD]",
    border: "border-[#7377AD]",
  },
  Blade: {
    text: "text-[#E83A2D]",
    border: "border-[#E83A2D]",
  },
  Dockerfile: {
    text: "text-[#2391E6]",
    border: "border-[#2391E6]",
  },
  HTML: {
    text: "text-[#DD4B25]",
    border: "border-[#DD4B25]",
  },
  SCSS: {
    text: "text-[#C76494]",
    border: "border-[#C76494]",
  },
  Python: {
    text: "text-[#356C99]",
    border: "border-[#356C99]",
  },
  Twig: {
    text: "text-[#19161A]",
    border: "border-[#19161A]",
  },
  Vue: {
    text: "text-[#41B883]",
    border: "border-[#41B883]",
  },
  Shell: {
    text: "text-[#00ff00]",
    border: "border-[#00ff00]",
  },
  Java: {
    text: "text-[#E32C2D]",
    border: "border-[#E32C2D]",
  },
  Hack: {
    text: "text-[#ededed]",
    border: "border-[#ededed]",
  },
};

export const getLangColor = (name: string, type: "text" | "border") => {
  if (Object.hasOwn(projectLanguagesMap, name)) {
    return projectLanguagesMap[name][type];
  } else {
    return "#ededed";
  }
};
