import DonationType from '@/components/howwehelp/DonationType'
import HoeWeHelpFirstSection from '@/components/howwehelp/HowWeHelpFirstSection'
import LastSection from '@/components/whoweare/LastSection'
import React from 'react'

export default function page() {
  return (
    <div>
        <HoeWeHelpFirstSection />
        <DonationType/>
        <LastSection/>
    </div>
  )
}
