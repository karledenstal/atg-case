import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/solid'

export const ExpandIcons = {
  chevron: 'chevron',
  expansion: 'expansion',
} as const

export type ExpandIconType = (typeof ExpandIcons)[keyof typeof ExpandIcons]

const className = 'inline-block w-6 h-6'

export const ExpandIcon = ({
  isExpanded,
  type = ExpandIcons.chevron,
}: {
  isExpanded: boolean
  type?: ExpandIconType
}) => {
  switch (type) {
    case ExpandIcons.chevron:
      if (isExpanded) return <ChevronUpIcon className={className} />
      return <ChevronDownIcon className={className} />
    case ExpandIcons.expansion:
      if (isExpanded) return <MinusIcon className={className} />
      return <PlusIcon className={className} />
  }
}
