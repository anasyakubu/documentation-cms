import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <Link
        href="https://github.com/anasyakubu"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
        Your Portfolio, <br /> Supercharged by Our API.
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        Empower your creativity with our Portfolio API. Seamlessly manage
        projects, showcase testimonials, and display skills on any platform. No
        coding hassle — just clean, simple integration.
      </p>
      <div className="flex  flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({
            variant: "secondary",
            className: "px-6 p-5",
            size: "lg",
          })}
        >
          Get Stared
        </Link>
        <Link
          href="https://port-cms.vercel.app/Login"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Get API Key
        </Link>
      </div>
      <span className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
        <ExternalLink className="w-5 h-5 sm:mr-1 mt-0.5" />
        {"https://api-port-cms.vercel.app"}
      </span>
    </div>
  );
}
