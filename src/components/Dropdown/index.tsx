import React from 'react'
import { DropdownContainer, DropdownItems, DropdownTitle } from './styles'

export interface DropdownProps {
  title: string
  dropdownWidth?: string
  className?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  dropdownWidth,
  title,
  className,
  children
}) => (
  <DropdownContainer>
    <span className={className}>{title}</span>
    <DropdownItems dropdownWidth={dropdownWidth}>
      <DropdownTitle>{title}</DropdownTitle>
      {children}
    </DropdownItems>
  </DropdownContainer>
)

export default Dropdown
