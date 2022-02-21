import Button from '../Button/Button'
import Heading from '../Typography/Heading'
import * as C from './Confirm.styles'

export interface ConfirmProps {
    title: string,
    label: 'Sim' | 'Não'
}

export default function Confirm(props:ConfirmProps) {
    return(
        <C.Wrapper>
            <Heading level={2}>{props.title}</Heading>
            <span>
                <Button variant="primary" label='Sim'></Button>
                <Button variant="danger" label='Não'></Button>
            </span>
        </C.Wrapper>
    )
}