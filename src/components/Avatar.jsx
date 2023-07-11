import styled from 'styled-components';

const Avatar_Image = styled.img`
    width: 35px;
    height: 35px;
    padding: 5px;
    object-fit: fit;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
    margin-top: 3px;
`;

const Text_In_Image = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #FF6D33;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 500;
    border: 1px solid #d9d9d9;
    color: white;
`;


const Avatar = ({src, name, ...props}) => {
    const handleOnError = (e) => {
        e.target.src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
    }
    return (
        <div>
            {src && <Avatar_Image {...props} src={src} onError={handleOnError} alt="logo"/>}
            {src === "" && name !== "" && (
                <Text_In_Image>
                    {name.substring(0,1)}
                </Text_In_Image>)}
            {src === "" && name === "" && <Avatar_Image {...props} src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png" alt="logo"/>}
        </div>
    );
}

export default Avatar;