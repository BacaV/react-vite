import './styles/Card.css'

function Card(){

    return(
        <>
            <div className="card">
                <img className="profile-img" src="https://avatars.githubusercontent.com/u/152823278?v=4" alt="profile picture" />
                <h2 className='card-title'>
                    Nikola
                </h2>
                <p className='card-text'>
                    I`m a web designer and student!
                </p>
            </div>
        </>
    );
}

export default Card;