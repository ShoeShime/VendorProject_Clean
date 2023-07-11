import Logout from "../features/auth/components/Logout";
import styled from 'styled-components';

const Modal_Overlay = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`;

const Modal_Container = styled.div`
    width: fit-content;
    height: fit-content;
    position: fixed;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    gap: 5px;
    background-color: white;
    border: solid grey;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
`;

const Modal_Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 5px;
`;

const Modal_Button_Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;

const SignOutModal = ({content, open, ...props}) => {
    if (!open) return null;

    const test = (data) => {
        props.setOpenModal(false);
        props.setData(data);
    }
    return (
        <Modal_Overlay>
            <Modal_Container onClick={(e) => {
                e.stopPropagation()
            }}>
                <Modal_Content>
                    <h2>Are you Sure?</h2>
                    <p>{content}</p>
                </Modal_Content>
                <Modal_Button_Container>
                    <Logout/>
                    <button onClick={() => test('Cancel')}>
                        Cancel
                    </button>
                </Modal_Button_Container>
            </Modal_Container>
        </Modal_Overlay>
    )
}

export default SignOutModal;