function MonsterCard({name, image, method, description,  }){
    return (
        <div className="card">
        <h2>{name}</h2>
        <img
          src={image}
          alt={name}
          className="monster-avatar"
        />
        <p>{likes} Likes </p>
        <button onClick={handleClick} className="like-btn">Like {"<3"}</button>
        
      </div>
    )
}
export default MonsterCard