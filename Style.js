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

    //when you are writing your components, try to keep things as D(ont)R(epeat)Y(ourself) as possible
    //example

    //this is pretty bad
    let finalDiv
    if (prop2 === 'whatever') {
        finalDiv = (
            <div> All I really needed to do was change the text! </div>
        )
    } else {
        finalDiv = (
            <div> But I made two divs for it! </div>
        )
    }
    //now you have to make changes to the code in two places to keep a single div styled
    //that's bad!

    ///this is better
    let varText
    if (prop2 === 'whatever') {
        varText = "This is what I really needed!"
    } else {
        varText = "Some DRY code!"
    }

    finalDiv = (
        <div> { varText } </div>
    )

    //or even more concise
    finalDiv = (
        <div> { (prop2 === 'whatever') ? "Use this string if the expression is true" : "Otherwise use this one!" } </div>
    )

    return (
        <div>
            Just another example
            { content }
            { finalDiv }
        </div>
    )
}


export default Style