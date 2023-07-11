import {useState} from 'react';
import Avatar from './Avatar';
import PDF from './PDF';
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
`;

const Profile_Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
`;

const Edit_Avatar = styled(Avatar)`
    width: 70px;
    height: 70px;
`;

const Edit_Image = styled.div`
    height: fit-content;
    width: fit-content;
    background-color: #915A44;
    text-align: center;
    border-radius: 10px;
    padding: 5px;
    color: white;
`;

const Edit_Button = styled.input`
    display: none;
`;

const Edit_Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 5px;
`;

const Edit_Info = styled.div`
    display: flex;
    flex-direction: row;
`;

const Edit_Label = styled.label`
    width: 140px;
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

const Logo_Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
`;

const Edit_Logo = styled(Avatar)`
    width: 50px;
    height: 50px;
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

const EditForm = ({isVendor, source, fName, lName, phone, storeName, logo, description, categories, open, ...props}) => {
    //States for update Info
    const [image, setImage] = useState(null);
    const [firstName, setFirstName] = useState(fName);
    const [lastName, setLastName] = useState(lName);
    const [phoneNumber, setPhoneNumber] = useState(phone);

    // Info for Vendor only
    const [des, setDes] = useState(description);
    const [cat, setCat] = useState(categories);
    const [menuFile, setMenuFile] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const [store, setStore] = useState(storeName);
    const [logoPic, setLogoPic] = useState(null);

    if (!open) return null;

    // Handling first name change
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    // Handling last name change
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    // Handling phone number change
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleDescription = (e) => {
        setDes(e.target.value);
    }

    const handleCategories = (e) => {
        setCat(e.target.value);
    }

    const handleMenu = (e) => {
        setMenuFile(e.target.files[0]);
        setIsSelected(true);
    }

    // Handling store name change
    const handleStoreName = (e) => {
        setStore(e.target.value);
    }

    const test = (data) => {
        props.setOpenEdit(false);
        props.setEditData(data, `${(!image) ? source : URL.createObjectURL(image)}`, firstName, lastName, phoneNumber, menuFile, store, `${(!logoPic) ? logo : URL.createObjectURL(logoPic)}`, des, cat);
        setImage(null);
        setLogoPic(null);
        if (data === 'Cancel'){
            setFirstName(fName);
            setLastName(lName);
            setPhoneNumber(phone);
            setStore(storeName);
            setDes(description);
            setCat(categories);
        }
    }

    return (
        <Edit_Overlay>
            <Edit_Container onClick={(e) => {
                e.stopPropagation()
            }}>
                <Profile_Image>
                    <Edit_Avatar src={`${(!image) ? source : URL.createObjectURL(image)}`} name={"tn"}/>
                    <Edit_Image>
                        <label htmlFor="img">Edit Picture</label>
                    </Edit_Image>
                    <Edit_Button 
                        id="img"
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => {
                            console.log(e.target.files[0]);
                            setImage(e.target.files[0]);
                        }}
                    />
                </Profile_Image>

                <Edit_Content>
                    {/* Labels and inputs for form data */}
                    <form>
                        <Edit_Info>
                            <Edit_Label>First Name:</Edit_Label>
                            <Text_Input 
                                onChange={handleFirstName} 
                                value={firstName} 
                                type = "text" 
                            />
                        </Edit_Info>

                        <Edit_Info>
                            <Edit_Label>Last Name:</Edit_Label>
                            <Text_Input 
                                onChange={handleLastName} 
                                value={lastName} 
                                type = "text" 
                            />
                        </Edit_Info>

                        <Edit_Info>
                            <Edit_Label>Phone Number:</Edit_Label>
                            <Text_Input 
                                onChange={handlePhoneNumber} 
                                value={phoneNumber} 
                                type = "text" 
                            />
                        </Edit_Info>
                    </form>
                
                    {isVendor && (
                        <form>
                            <Edit_Info>
                                <Edit_Label>Store Name:</Edit_Label>
                                <Text_Input 
                                    onChange={handleStoreName} 
                                    value={store} 
                                    type = "text" 
                                />
                            </Edit_Info>

                            <Logo_Image>
                                <Edit_Logo src={`${(!logoPic) ? logo : URL.createObjectURL(logoPic)}`} name={store}/>
                                <Edit_Image>
                                    <label htmlFor="logo">Choose Store Logo</label>
                                </Edit_Image>
                                <Edit_Button 
                                    id="logo"
                                    type="file" 
                                    accept="image/*" 
                                    onChange={(e) => {
                                        console.log(e.target.files[0]);
                                        setLogoPic(e.target.files[0]);
                                    }}
                                />
                            </Logo_Image>

                            <Edit_Info>
                                <Edit_Label>Description:</Edit_Label>
                                <Text_Input 
                                    onChange={handleDescription} 
                                    value={des} 
                                    type = "text" 
                                />
                            </Edit_Info>

                            <Edit_Info>
                                <Edit_Label>Categories:</Edit_Label>
                                <Text_Input 
                                    onChange={handleCategories} 
                                    value={cat} 
                                    type = "text" 
                                />
                            </Edit_Info>

                            <Edit_Label>Menu:</Edit_Label>
                            <input 
                                type="file" 
                                name="file" 
                                accept = "pdf/"
                                onChange={handleMenu} 
                            />
			                {isSelected ? (<PDF pdf={menuFile}/>) : (<p>Select a pdf file for menu</p>)}
                        </form>    
                   )}
                </Edit_Content>

                <Edit_Button_Container>
                    <Edit_Primary_Button 
                        onClick={() => {
                            if (firstName === '' || lastName === '' || phoneNumber === ''){
                                alert("Empty Items!!!")
                            } else {
                                test('Continue')
                            }
                        }}
                    >
                        Continue
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

export default EditForm;