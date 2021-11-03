import {FaCode, FaHtml5, FaJs, FaSass} from 'react-icons/fa'
import {IStack} from 'src/types/project'

type Props = {
    stack: IStack
}
const getLanguageIcon = (language: string) => {
    switch (language.toLowerCase()) {
        case 'javascript':
            return FaJs
        case 'sass':
            return FaSass
        case 'html':
            return FaHtml5
        default:
            return FaCode
    }
}
export const TechStackListItem = ({stack}: Props) => {
    const {bg, color, name} = stack
    const LanguageIcon = getLanguageIcon(name)
    return (
        <div
            className='flex items-center p-1 space-x-2 rounded-md'
            style={{color, background: bg}}
        >
            <LanguageIcon/>
            <span>{name}</span>
        </div>
    )
}
