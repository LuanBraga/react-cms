import * as I from './Input.styles';

export interface InputProps {
    label?: string,
}

export default function Input ({ label }: InputProps) {
    return<I.Wrapper>
        {
            label &&
                <span>
                    { label }
                </span>
        }
        <input type="text"/>
    </I.Wrapper>
}