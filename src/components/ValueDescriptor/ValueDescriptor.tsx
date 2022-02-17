import * as VD from './ValueDescriptor.styles'

export interface ValueDescriptorProps {
    description: string,
    value: number,
    color: 'default' | 'primary',
    isCurrency?: boolean
}

export default function ValueDescriptor( props: ValueDescriptorProps){
    return<VD.Wrapper
                color={props.color}
            >
        <span
            className='Description'
        >
            { props.description }:
        </span>

        <div
            color={props.color}
        >
            { 
                props.isCurrency &&
                    <span
                    className='Currency'
                    >
                        {'R$'} 
                    </span>            
            }

            <span
                className='Value'
            >
                { props.value.toLocaleString('pt-br') }
            </span>
        </div>
    </VD.Wrapper>
}