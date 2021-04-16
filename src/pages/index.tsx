import React from 'react'

import Hero from '@/partials/Home/Hero'
import Courses from '@/partials/Home/Courses'
import About from '@/partials/Home/About'
import Differentials from '@/partials/Home/Differentials'
import Network from '@/partials/Home/Network'

import SEO from '@/components/SEO'

const Index: React.FC = () => (
  <>
    <SEO
      color="#001D7E"
      title="Colégio Particular Álamo Valinhos"
      description="Conheça o jeito Álamo de educar!"
      shouldExcludeTitleSuffix
    />

    <Hero />
    <Courses />
    <About />
    <Differentials />
    <Network />
  </>
)

export default Index
