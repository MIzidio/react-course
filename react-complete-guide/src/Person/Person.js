import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Sou {props.name} e tenho {props.age} anos!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;