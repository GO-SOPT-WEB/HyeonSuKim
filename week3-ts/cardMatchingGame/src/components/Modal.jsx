import ModalPortal from "../ModalProtal";
import styled from "styled-components";
import theme from "../styles/theme";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <ModalPortal>
      <ModalContainer onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
          <div>
            <h1>춘식게임<br/>승리!!<br/> 축하합니당!</h1>
            <button onClick={onClose}>게임으로 돌아가기</button>
          </div>
        </ModalContent>
      </ModalContainer>
    </ModalPortal>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  & > div {
    width: 40rem;
    height: 30rem;
    background-color: ${theme.colors.lightPurple};
    border-radius: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    & > h1 {
        font-size: 6rem;
        text-align: center;
    }
    & > button {
        border: none;
        background-color: ${theme.colors.pink};
        font-size: 2rem;
        cursor: pointer;
        &:hover{
            background-color: white;
        }
    }
  }
`;
