import PageBanner from '@/component/Banner/PageBanner'
import ContactPage from '@/component/ContactPage'
import React from 'react'

function Page() {
  return (
    <div>

        <PageBanner>
          CONTACT
        </PageBanner>
        <ContactPage></ContactPage>
    </div>
  )
}

export default Page