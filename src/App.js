import React, {useState} from 'react'
import Route from './components/Route'
import Header from './components/Header'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'


const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend JavaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'RED',
        value: 'red'
    },
    {
        label: 'GREEN',
        value: 'green'
    },
    {
        label: 'BLUE',
        value: 'blue'
    }
]


export default () => {

    const [selected, setSelected] = useState(options[0])
    // const [showDropdown, setShowDropdown] = useState(true)
    
    return(
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                    label="SELECT A COLOR"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
            <Translate/>
            </Route>            
            
            {/* <button className="ui button" onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? 
                <Dropdown 
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
                : null
            }
            <div className="ui card" style={{backgroundColor: selected.label}}>
                <p style={{color: 'white', padding: 10, textAlign: 'center'}}>You chose {selected.label} as your color.</p>
            </div> */}
        </div>
    )
}