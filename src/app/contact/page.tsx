import ContactBanner from '@/component/ContactBanner'
import ContactPage from '@/component/ContactPage'
import React from 'react'

function Page() {
  return (
    <div>

        <ContactBanner></ContactBanner>
        <div className='min-h-screen'></div>
        <ContactPage></ContactPage>
    </div>
  )
}

export default Page