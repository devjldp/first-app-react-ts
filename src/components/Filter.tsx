import { TODO_FILTERS, FILTER_BUTTONS } from '../consts'

interface Props {
    // filterSelected: 'all'|'active'|'completed',
    filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
    onFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void
}
export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul className='list-none'>
            {Object.entries(FILTER_BUTTONS).map(([key, { literal, href }]) => {
                return (
                    <li key={key}>
                        <a href={href}>{literal}</a>
                    </li>
                )
            }

            )}


        </ul>
    )
}
