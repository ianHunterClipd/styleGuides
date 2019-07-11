//you should know the difference between a default and non-default import statement
import React, { Component } from 'react'

//define the default state as a constant before your class definition
var defaultState = {
    //object keys are lowerCamelCase
    myProperty: 0
}

class Style extends Component {
    constructor(props) {
        //you should have an understanding of what is happening here
        super(props)

        this.state = defaultState

        //bind your class functions once, not many times
        this.classFunction = this.classFunction.bind(this)
    }

    classFunction() {
        return 0
    }

    render() {
        //always wrap JSX assignments and return statements in parentheses
        return (
            //opening and closing tags should always be at the same indentation level
            <div
                //each prop of a JSX component should be a newline
                style={{height: '10px'}}
                onClick={ () => { return 0}}>
                Out here with style
                <div 
                    style={{height: '5px'}}>
                    Whatcha gonna do with all that style
                    <div>
                        <div>
                            <div /*one liners are ok for small elements */> so many... </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//alternatively, we can write our React elements as functional components

//what is object destructuring? 
export const Style2 = ({prop1, prop2}) => {

    //just like with return statements, wrap JSX assignments in parentheses
    let content = (
        <div>
            The wonderful world of JSX
            { " You should be very comfortable with JSX's bracket notation" }
        </div>
    )

    return (
        <div>
            Just another example
            { content }
        </div>
    )
}


export default Style