
const Cell = ({onCLick, value, onClick}) => {
    return (
        <div className={"border-4 border-amber-300 bg-white w-1/3 h-full flex justify-center items-center"} onClick={onClick}>
            <span className={"text-5xl"}>{value}</span>
        </div>
    )
}

export default Cell;