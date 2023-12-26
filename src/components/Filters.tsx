import { FILTERS_BUTTONS } from '../const'
import { type FilterValues } from '../types'

interface Props {
  filterSelected: FilterValues
  onFilterChange: (filter: FilterValues) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                  const isSelected = key === filterSelected
                  const className = isSelected ? 'selected' : ''

                  return (
                        <li key={key}>
                            <a
                              href={href}
                              className={className}
                              onClick={(e) => {
                                e.preventDefault()
                                onFilterChange(key as FilterValues)
                              }}
                            >
                                {literal}
                            </a>
                        </li>
                  )
                })
            }
        </ul>
  )
}
