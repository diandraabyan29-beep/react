function Card({children}){
    return(
        <>
        <div className="border rounded-lg p-4 w-72 bg-white shadow">
            {children}
        </div>
        </>
    )
}

export default Card;