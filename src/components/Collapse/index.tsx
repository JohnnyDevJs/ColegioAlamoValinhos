import React, { useCallback, useState } from 'react'

import { Card, CardHeader, CardBody } from './styles'

interface CollapseProps {
  title: string
  cardColor: string
  className?: string
}

const Collapse: React.FC<CollapseProps> = ({
  title,
  cardColor,
  className,
  children
}) => {
  const [activeCollapse, setActiveCollapse] = useState(false)

  const handleCollapse = useCallback(() => {
    setActiveCollapse(!activeCollapse)
  }, [activeCollapse, setActiveCollapse])

  return (
    <Card
      className={`${className} ${activeCollapse === true ? 'open' : ''}`}
      cardColor={cardColor}
    >
      <CardHeader onClick={handleCollapse}>{title}</CardHeader>
      <CardBody className={activeCollapse === true ? 'active' : ''}>
        {children}
      </CardBody>
    </Card>
  )
}

export default Collapse
