import {useState} from 'react';
import styled from 'styled-components';

const Edit_Overlay = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`;

const Edit_Container = styled.div`
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
    padding: 10px;
`;

const Password_Header = styled.div`
    align-self: center;
`;

const Edit_Info = styled.div`
    display: flex;
    flex-direction: row;
`;

const Edit_Label = styled.label`
    width: 200px;
    display: block;
    font-size: large;
    font-weight: bold;
    padding: 5px;
    color: black;
`;

const Text_Input = styled.input`
    padding: 5px;
    margin: 2px;
    color: grey;
    border-style: none none solid none;
    border-color: #FF6D33;
`;

const Edit_Button_Container = styled.div`
    display: flex;
    padding: 5px;
`;

const Edit_Confirm_Button = styled.button`
    width: 80%;
    margin: 10px;
    padding: 10px;
    border: none;
    color: white;
    font-weight: bold;
`;

const Edit_Primary_Button = styled(Edit_Confirm_Button)`
    background-color: #FF6D33;
`;

const Edit_Outline_Button = styled(Edit_Confirm_Button)`
    background-color: #FFE7D5;
`;

const ChangePasswordModal = ({open, password, ...props}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (!open) return null;

  const test = (data) => {
    props.setPasswordModal(false);
    props.setPasswordData(data, newPassword);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  }

  return (
        <Edit_Overlay>
            <Edit_Container onClick={(e) => {
                e.stopPropagation()
            }}>
                <Password_Header>
                  <h2>Change Password</h2>
                </Password_Header>
                <form>
                    <Edit_Info>
                        <Edit_Label htmlFor = "current-password">Current Password:</Edit_Label>
                        <Text_Input 
                            id = "current-password"
                            value={currentPassword} 
                            type = "password" 
                            onChange = {(e) => setCurrentPassword(e.target.value)}
                        />
                    </Edit_Info>

                    <Edit_Info>
                        <Edit_Label htmlFor = "new-password">New Password:</Edit_Label>
                        <Text_Input 
                            id = "new-password"
                            value={newPassword} 
                            type = "password" 
                            onChange = {(e) => setNewPassword(e.target.value)}
                        />
                    </Edit_Info>

                    <Edit_Info>
                        <Edit_Label htmlFor = "confirm-password">Current Password:</Edit_Label>
                        <Text_Input 
                            id = "confirm-password"
                            value={confirmPassword} 
                            type = "password" 
                            onChange = {(e) => setConfirmPassword(e.target.value)}
                        />
                    </Edit_Info>
                </form>

                <Edit_Button_Container>
                  <Edit_Primary_Button
                    onClick={() => {
                      if (currentPassword === '' || newPassword === '' || confirmPassword === ''){
                        alert("Empty Items!!!");
                      } else {
                        if (currentPassword === password){
                            if (newPassword !== confirmPassword){
                            alert("Confirm password doesn't match with the new one.");
                            } else {
                            if (newPassword === password){
                                alert("Your new passowrd should be different from current password.")
                            } else {
                                test('Continue');
                            }
                            }
                        } else {
                            alert("The current password you entered isn't match with the database.")
                        }
                    }}}
                  >
                    Save
                  </Edit_Primary_Button>
                  <Edit_Outline_Button 
                    onClick={() => test('Cancel')}
                  >
                    Cancel
                  </Edit_Outline_Button>
                </Edit_Button_Container>
            </Edit_Container>
        </Edit_Overlay>
    )
}

export default ChangePasswordModal;