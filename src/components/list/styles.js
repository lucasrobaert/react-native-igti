import styled from 'styled-components/native';
import {scaleFont, scaleSize} from '../../utils/mixins';

export const RootSafeAreaView = styled.SafeAreaView`
    flex:1;
    background-color: ${(props) => props.theme.background};
    justify-content: center;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.rootBackground};
    padding: ${scaleSize(20)}px;
`;

export const Card = styled.View`
        flex-direction: row;
        justify-content: center;
        border-color: ${(props) => props.theme.cardBorder};
        border-width: 1px;
        border-radius: 5px;
        background-color: ${(props) => props.theme.cardBackground};
        margin-bottom: 16px;
        width: ${scaleSize(335)}px;
        height: ${scaleSize(350)}px;
        flex-direction: column;
        justify-content: center;

`;

export const Title = styled.Text`
    color: ${(props) => props.theme.text};
    font-size: ${scaleFont(22)}px;
    font-weight: bold;
`;

export const Photo = styled.Image`
    width:${scaleSize(335)}px;
    height: ${scaleSize(190)}px;
`;

export const Info = styled.View`
    flex: 1;
    margin-left: 20px;
    margin-top: 5px;
`;

export const Meta = styled.View`
    margin-top: 8px;
    flex-direction: row;
    align-items: center;
`;

export const MetaText = styled.Text`
    margin-left: 8px;
    color: ${(props) => props.theme.text}

`;