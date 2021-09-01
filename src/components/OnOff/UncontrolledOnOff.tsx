import React, {useState} from "react";

// type OnOffType = {
//     on: boolean
// }


function OnOff () {
    const [isOn, setOn] = useState(true);

    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: isOn ? 'green' : 'white'
    }
    const offStyle = {
        display: 'inline-block',
        margin: '0 2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: isOn ? 'white' : 'red'
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '15px',
        height: '15px',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: isOn ? 'green' : 'red'
    }

    console.log('render');
    return (
        <div>
            <span onClick={()=> setOn(true)} style={onStyle}>On</span>
            <span onClick={()=> setOn(false)} style={offStyle}>Off</span>
            <span style={indicatorStyle}> </span>
        </div>
    )
}

export default OnOff;