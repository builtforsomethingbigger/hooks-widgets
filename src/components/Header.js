import React from 'react'
import Link from './Link'

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                INFO MENU
            </Link>
            <Link href="/search" className="item">
                SEARCH
            </Link> 
            <Link href="/dropdown" className="item">
                DROPDOWN
            </Link> 
            <Link href="/translate" className="item">
                TRANSLATE
            </Link>     
        </div>
    )
}
export default Header