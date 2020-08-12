import React, {useState} from 'react'
import Route from './components/Route'
import Header from './components/Header'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'


const items = [
    {
        title: 'What is the purpose of this widget application?',
        content: 'To demonstrate practical application of React 16 Hooks and custom routing architecture.'
    },
    {
        title: 'Navigation Menu Overview',
        content: "The Nav menu is built without using the standard React Router. It leverages Route and Link components that connect each component with their associated URL based on the 'children' props that are passed up to the parent JSX component."
    },
    {
        title: 'Info Menu Widget Overview',
        content: "This overview menu leverages Semantic UI's 'Accordion' class along with the {useState} hook to display each selected menu dropdown."
    },
    {
        title: 'Search Widget Overview',
        content: "The Search widget leverages the {useState} and {useEffect} hooks applied to the event listener functions. It also integrates the Wikipedia API and a controlled form to dynamically pull in data associated with the entered search term after the user key strokes have paused for a short amount of time to reduce the amount of requests that are being made."
    },
    {
        title: 'Dropdown Widget Overview',
        content: "The Dropdown widget is a reusable component that leverages the {useState}, {useEffect}, and {useRef} hooks. As a standalone component, it's being used to display a simple color picker. However, it is also repurposed as a language selector in the Translate widget."
    },
    {
        title: 'Translate Widget Overview',
        content: "The Translate widget leverages the {useState} hook along with the Dropdown component. It makes API requests to the Google Translate API (only accessible from localhost:3000)."
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
    
    return(
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/search'>
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
        </div>
    )
}