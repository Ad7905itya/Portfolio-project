import React from 'react'

const Input = ({ Name, value, Error, handleChange, style, PlaceName, TypeName }) => {
    return (
        <>
            <TypeName
                name={Name}
                id={Name}
                placeholder={PlaceName}
                value={value}
                onChange={handleChange}
                className="bg-gray-700 p-3 border border-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                style={style}
                rows={TypeName === "textarea" ? 5 : 1}
                cols={TypeName === "textarea" ? 40 : 1}
            />
            {Error && <p className='my-0 ml-2 text-md text-red-500'>{Error}</p>}
        </>
    )
}

export default Input