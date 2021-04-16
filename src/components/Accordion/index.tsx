import React, { useCallback, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import {
  AccordionContainer,
  AccordionContainerItems,
  AccordionTitle
} from '@/styles/components/Accordion/styles'

interface AccordionContainerProps {
  title?: string
}

const Accordion: React.FC<AccordionContainerProps> = ({ title, children }) => {
  const [openAccordion, setOpenAccordion] = useState(false)

  const handleOpenAccordion = useCallback(() => {
    setOpenAccordion(!openAccordion)
  }, [openAccordion, setOpenAccordion])

  return (
    <AccordionContainer
      onClick={handleOpenAccordion}
      className={openAccordion === true ? 'active' : ''}
    >
      <AccordionTitle>
        {title}
        <FiChevronRight size={18} color="#BAC529" />
      </AccordionTitle>
      <AccordionContainerItems className={openAccordion === true ? 'open' : ''}>
        {children}
      </AccordionContainerItems>
    </AccordionContainer>
  )
}

export default Accordion
