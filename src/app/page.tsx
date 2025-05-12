import DescriptionBanner from "@/component/Banner/DescriptionBanner";
import HeroBanner from "@/component/Banner/HeroBanner";
import BlogList from "@/component/BlogList";
import StickeyStack from "@/component/Card/StickeyStack";
import Feedback from "@/component/Feedback";
import Hero from "@/component/Hero";
import Introduction from "@/component/Introduction";
import Portfolio from "@/component/Portfolio";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Introduction />
      <Portfolio />
      <Feedback />
      <StickeyStack/>
      <HeroBanner/>
      <DescriptionBanner/>
      <BlogList></BlogList>
      <div className="h-screen"></div>
    </>
  );
}
