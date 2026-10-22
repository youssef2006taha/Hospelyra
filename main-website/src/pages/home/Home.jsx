import CtaSection from "./sections/CtaSection"
import FeaturesSections from "./sections/FeaturesSections"
import HeroSection from "./sections/HeroSection"
import PlansSection from "./sections/PlansSection"
import PreviewSection from "./sections/PreviewSection"

function Home({data}) {
  return (
    <div>
      <HeroSection data={data.hero} />
      <FeaturesSections data={data.features}/>
      <PreviewSection data={data.preview}/>
      <PlansSection data={data.plans}/>
      <CtaSection data={data.cta}/>
    </div>
  )
}

export default Home