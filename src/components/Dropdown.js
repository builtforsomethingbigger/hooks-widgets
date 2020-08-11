import React, {useState} from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false)
    
    const renderedOptions = options.map((option) => {

        //if the color is selected, remove it as an option. only show the unselected options.
        if (option.value === selected.value){
            return null
        }

        return (
            <div className="item" key={option.value} onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })

    return(
        <div className="ui form">
            <div className="field">
                <label className="label">SELECT A COLOR</label>
                <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} 
                    /*onClick setOpen with the argument of whatever is the opposite state value of open*/
                    onClick={() => setOpen(!open)} 
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu visible ${open ? 'transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dropdown