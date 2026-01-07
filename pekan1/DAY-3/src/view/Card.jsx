function card(props){
    return(
        <>
        <div className="margine-4 border-2 border-blue p-4 flex item-center flex-col">
            {props.children}
        </div>
        </>
    )
}

export default card;