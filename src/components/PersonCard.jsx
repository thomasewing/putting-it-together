import React, {useState} from 'react';

const PersonCard = ({lastName,firstName,age,hairColor}) => {
    const [initialAge, setAge]=useState(age);
    return(
        <div>
            <h2>{lastName}, {firstName}</h2>
            <h3>Age: {initialAge}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <button onClick={(event)=> setAge(initialAge + 1)}>Happy Birthday</button>
        </div>
    )
}
export default PersonCard;