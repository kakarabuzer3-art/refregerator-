import type { Metadata } from "next";
import { GlassButton } from "@/components/ui/GlassButton";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <PageIntro eyebrow="Error 404" title="We could not find that page">
        The link may be out of date. Try the range or head back home.
      </PageIntro>
      <div className="flex flex-col gap-3 px-4 pb-20 sm:flex-row sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 sm:flex-row">
          <GlassButton href="/" variant="primary">
            Back to home
          </GlassButton>
          <GlassButton href="/products">See the range</GlassButton>
        </div>
      </div>
    </>
  );
}
