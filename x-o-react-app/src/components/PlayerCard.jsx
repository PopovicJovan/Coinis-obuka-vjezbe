import {useState} from "react";


const PlayerCard = ({name, mark, onChange}) => {

    const [edit, setEdit] = useState(false);

    const toogleEdit = () => {
        if (!name && edit) return alert("Please enter a name");
        setEdit(!edit);
    }


    return (
        <div className="w-1/2  flex items-center justify-around bg-white player-card  border-2 border-amber-300">
            <input className={"text-2xl uppercase font-bold w-50 border "} value={name} onChange={onChange} disabled={!edit}/>
            <div className={"flex gap-x-3"}>
                <span className={"text-2xl uppercase font-bold"}>{mark}</span>
                <span className={"text-xl uppercase"} onClick={toogleEdit}>{!edit ? "EDIT": "SUBMIT"}</span>
            </div>
        </div>
    )
}

export default PlayerCard;