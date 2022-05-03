import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => (props.bgColor ? '#231f20' : '#f9f9f9')};
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const WebsiteLogo = styled.img`
  width: 120px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const IconButton = styled.button`
  font-size: 20px;
  align-self: center;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  background-color: transparent;
  border: none;
`

export const PopUpContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#231f20' : '#f9f9f9')};
  padding: 30px;
  border-radius: 10px;
`

export const PopupDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  margin-top: 10px;
`

export const CancelButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  height: 29px;
  width: 80px;
  margin-top: 10px;
  margin-left: auto;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  background-color: transparent;
  border: 1px solid ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  border-radius: 5px;
`

export const ConfirmButton = styled(CancelButton)`
  background-color: #4f46e5;
  border: none;
  height: 30px;
  margin-right: auto;
`
export const ProfileImage=styled.img`
height:50px;
width:50px;
@media screen and (max-width:576px){
    display:none
}
`
 