import styled from 'styled-components/native'

export const Head = {
    backgroundColor: 'transparent',
    width: '100%',
    height: 50,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}


export const List = styled.TouchableOpacity`
    width:100%;
    height: 55px ;
    /* border: 1px solid black; */
    background-color:${props => props.b ? '#c2bad8':'#f8f8f8'}
    border-top-width:1px;
    border-bottom-width:1px;
    border-top-color:#eee;
    border-bottom-color:#eee;
    flex-direction:row;
    justify-content: ${props => props.b ? 'center': 'space-between'}
    align-items: center;
    padding-left:15px;
    padding-right:15px;
`
export const Logout = styled.TouchableOpacity`
    width:100%;
    height: 55px ;
    /* border: 1px solid black; */
    background-color:#FF0000;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding-left:15px;
    padding-right:15px;
    border-bottom-left-radius:25px;
    border-bottom-right-radius:25px;
`