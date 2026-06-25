import HeroHome from '@/components/HeroHome'
import TheShift from '@/components/TheShift'
import PositioningStatement from '@/components/PositioningStatement'
import WhyUs from '@/components/WhyUs'
import WealthSystems from '@/components/WealthSystems'
import BlueprintFramework from '@/components/BlueprintFramework'
import FastracSection from '@/components/FastracSection'
import From30to10 from '@/components/From30to10'
import WhoWeHelp from '@/components/WhoWeHelp'
import SocialProof from '@/components/SocialProof'
import GlobeSection from '@/components/GlobeSection'
import CTABand from '@/components/CTABand'

export const metadata = {
  title: 'CFO On The Go Pro | Build Wealth Like a Business',
  description:
    'We help families, professionals, and business owners build structured 3 - 4 property portfolios and SMSF strategies using proven CFO - level financial systems.',
}

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <TheShift />
      <PositioningStatement />
      <WhyUs />
      <WealthSystems />
      <BlueprintFramework />
      <FastracSection />
      <From30to10 />
      <WhoWeHelp />
      <SocialProof />
      <GlobeSection />
      <CTABand />
    </>
  )
}
