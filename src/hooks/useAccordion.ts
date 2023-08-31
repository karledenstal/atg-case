import { useState } from 'react'

type UseAccordionReturnType = {
  isExpanded: boolean
  handleAccordionToggle: () => void
}

export const useAccordion = (): UseAccordionReturnType => {
  const [isExpanded, setIsExpanded] = useState(false)

  return {
    isExpanded,
    handleAccordionToggle: () => setIsExpanded((isExpanded) => !isExpanded),
  }
}
