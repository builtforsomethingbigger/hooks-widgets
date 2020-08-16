import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({ label, options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false)
    const [showDropdown, setShowDropdown] = useState(true)
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current.contains(e.target)){
                return
            }

            setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])
    
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

    const showUiCard = () => {
        if (window.location.pathname === '/dropdown'){
            return(
                <div className="ui card" style={{backgroundColor: selected.label}}>
                    <p style={{color: 'white', padding: 10, textAlign: 'center'}}>You chose {selected.label} as your color.</p>
                </div>
            )
        }
    }
    
    return(
        <div id="Main" className="ui form" ref={ref}>
            <button className="ui button shrink" onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? 
            <div className="field">
                <label className="label">{label}</label>
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
            : null}
            {showUiCard()}
        </div>
    )
}
export default Dropdown

