import Button from '../Button/Button'
import Heading from '../Typography/Heading'
import * as C from './Confirm.styles'

export interface ConfirmProps {
    title: string
    dangerLabel: string
    primaryLabel: string
    onCancel: () => any
    onConfirm: () => any
}

export default function Confirm(props:ConfirmProps) {
    return(
        <C.Wrapper>
            <C.Title>
                {props.title}
            </C.Title>

            <span className='Buttons'>
                <Button 
                    variant="danger" 
                    label={props.dangerLabel}
                    onClick={props.onCancel}
                ></Button>
                
                <Button 
                    variant="primary" 
                    label={props.primaryLabel}
                    onClick={props.onConfirm}
                ></Button>
            </span>
        </C.Wrapper>
    )
}