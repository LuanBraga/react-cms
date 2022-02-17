import { Default } from './../../stories/ValueDescriptor.stories';
import styled from "styled-components";

const COLORS = {
    default: '#274060',
    primary: '#0099FF',
}

export const Wrapper = styled.div<{color: 'default' | 'primary'}>`
    display: flex;
    flex-direction: column;

    span.Description {
        font-size: 12px;
        text-transform: lowercase;
    }

    div {
        color: ${p => COLORS[p.color]};
    }

    span.Value {
        font-size: 18px;
        font-weight: 800;
    }
`