import BankDetails from '@/components/Funds/Bankdetails'
import Donate from '@/components/Funds/Donate'
import HowDonationHelps from '@/components/Funds/Donationhelps'
import DonationForm from '@/components/Funds/Form'
import WhyFundSection from '@/components/Funds/Whyfund'
import PartnerSection from '@/components/Funds/Partnersection'
import React from 'react'

function page() {
  return (
    <div>
      <Donate/>
      <DonationForm/>
      <WhyFundSection/>
      <HowDonationHelps/>
      <BankDetails/>
      <PartnerSection/>
    </div>
  )
}

export default page
