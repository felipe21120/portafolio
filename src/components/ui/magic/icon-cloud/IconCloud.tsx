import IconCloud from "@/components/magicui/icon-cloud";
 
const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];
 
export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}