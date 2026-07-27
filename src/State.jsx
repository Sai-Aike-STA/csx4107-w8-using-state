import { useState} from "react";


export default function State(){
    const [name, setName] = useState();

    const onNameChange = (event) => {
        setName(event.target.value)
    }


    return (
        <div>
            <label>Name</label>
            <input type={"text"} name = "name" id = "name"  onChange = {onNameChange}/>

            <hr/>

            <div>
                {name}
            </div>
        </div>
    )
}
