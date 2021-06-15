import React from 'react'
import NavigationBar from '../component/navigationBar'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <h1>This is Home Page</h1>
            </div>
        )
    }
}

export default HomePage