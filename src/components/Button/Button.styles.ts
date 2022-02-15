import styled from 'styled-components';
import { transparentize } from 'polished';

const COLORS = {
    primary: '#0099FF',
    red: '#F84735',
    foreground: '#274060'
};

const THEME = {
    primary: {
        bg:'#0099FF',
        color: '#FFFFFF',
        onHover: `
            box-shadow: 0 3px 6px rgba(0,0,0,.2);
        `,
        disabled: {
            bg: transparentize(0.44, COLORS.primary),
            color: '#FFFFFF'
        }
    },

    danger: {
        bg:'#F84735',
        color: '#FFFFFF',
        onHover: `
            box-shadow: 0 3px 6px rgba(0,0,0,.2);
        `,
        disabled: {
            bg: transparentize(0.75, COLORS.red),
            color: '#FFFFFF'
        }
    },

    text: {
        bg: 'transparent',
        color: '#274060',
        onHover: `
            box-shadow: 0 3px 6px rgba(0,0,0,.2);
            border-color: #274060;
        `,
        disabled: {
            bg: transparentize(0.44, '#508AC9'),
            color: COLORS.foreground
        }
    }
}

export const Wrapper = styled.button<{
    variant: 'primary'| 'danger' | 'text'
}>`
    padding: 6px 8px 4px;
    border: 1px solid ${p => THEME[p.variant].bg};

    background-color: ${p => THEME[p.variant].bg};
    color: ${p => THEME[p.variant].color};

    &:hover,
    &:focus {
        ${p => THEME[p.variant].onHover};
    }

    &:disabled {
        background-color: ${p => THEME[p.variant].disabled.bg};
        color: ${p => THEME[p.variant].disabled.color};

        border: transparent;

        pointer-events: none;
    }
`