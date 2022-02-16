import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 56px;

    span.Label {
        color: #274060;
        font-size: 14px;
        font-weight: 500;
    }

    input {
        height: 28px;

        color: #274060;
        font-size: 18px;
        font-weight: 500;

        padding-bottom: 6px;

        border: none;
        border-radius: 0;
        border-bottom: 1px solid #274060;

        outline: none;

        &::placeholder {
            color: ${transparentize(0.5, '#274060')};
        }
    }
`