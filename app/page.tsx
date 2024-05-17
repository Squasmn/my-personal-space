import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { Button } from "@/components/ui/button";

import { DotBackgroundDemo } from "@/components/dot-bg";
import Head from "next/head";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <DotBackgroundDemo>
      <TracingBeam>
        <div>
          <Head>
            <title>My Page Title</title>
            <meta
              name="description"
              content="This is a description of my page."
            />
          </Head>
          <div className="flex justify-center items-center min-h-screen">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle className="mb-4">
                Welcome to My Page
              </GlowingStarsTitle>
              <GlowingStarsDescription>
                This is a description of my page. It's a great page.
              </GlowingStarsDescription>
            </GlowingStarsBackgroundCard>
          </div>
          <div className="flex justify-center items-center min-h-screen">
            <Button variant="outline" size="default">
              Click me
            </Button>
          </div>
        </div>
      </TracingBeam>
    </DotBackgroundDemo>
  );
}
