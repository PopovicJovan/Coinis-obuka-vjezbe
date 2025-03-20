
const MovieCard = ({img, year, title, rating, genre}) => {
    return (
        <div className="card my-w-18" style={{"height": "650px"}}>
            <img className="card-img-top w-100 h-75" src={img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title text-center fw-bold">{title}</h5>
                <div className={"mt-3"}>
                    <h6><span className={"fw-bold"}>Year: </span>{year}</h6>
                    <h6><span  className={"fw-bold"}>Genre: </span> {genre}</h6>
                    <h6><span  className={"fw-bold"}>Rating:</span> {rating}</h6>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;