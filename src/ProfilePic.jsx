
function ProfilePic(){ 

    const imageUrl = 'https://avatars.githubusercontent.com/u/152823278?v=4'

    const handleClick = () => console.log("mmmhm");
    
    return(
        <img src={imageUrl} onClick={handleClick} alt="Profile pic" />
    );

}

export default ProfilePic;