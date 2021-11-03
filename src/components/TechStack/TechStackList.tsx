import {IStack} from 'src/types/project'

import {TechStackListItem} from '~components/TechStack/TechStackListItem'

type TechStackListProps = {
    stacks: IStack[]
}
const TechStackList = ({stacks}: TechStackListProps) => {
    return (
        <div className='flex items-center space-x-4'>
            {stacks.map(stack => (
                <TechStackListItem key={stack.name} stack={stack}/>
            ))}
        </div>
    )
}

export default TechStackList
