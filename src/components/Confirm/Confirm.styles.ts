import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    background-color: #F3F8FA;
    color: #274060;
    width: 229px;

    .Buttons{
        display: flex;
        justify-content: center;
        width: 229px;
    }

    .Buttons {
        button:nth-child(2){
            margin-left: 8px;
        }
    }
`

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    overflow: hidden;
`