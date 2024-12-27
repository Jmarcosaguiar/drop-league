import styled from 'styled-components/native';
import { useFonts,  } from 'expo-font';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    align-items: center;
    justify-content:center;   
`