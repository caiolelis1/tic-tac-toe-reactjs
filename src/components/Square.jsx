import React from 'react'

const Square = ({ id, value, handleClick }) => {

    return (
        <button className="square" onClick={() => handleClick(id)}>
            {value}
        </button>
    )
}

export default Square
