//JAVASCRIPT STYLE GUIDE
//last updated: 9/16/2019

//NAMING CONVENTIONS
//THESE WILL BE ENFORCED WITH A VENGANCE
//UpperCamelCase := React Component
//lowerCamelCase := function
//slither_case := object (anything that isn't a function or a React component)

//you should know the difference between default and non-default import statements
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import React, { Component } from 'react'

//we have three ways to declare variables in javascript

//CONST cannot be changed! They should be used for any static values
//CONST are block scoped - you should know what that means!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
const final_const = {
    is_stylish: true,
    can_change: false,
}

//VAR are defined in their execution context. If this is outside
//of a function, then it is declared in the global namespace!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
var initial_var = {
    can_change: true,
}
initial_var.can_change = false

//LET are block scoped variables that can be altered
let initial_let = {
    can_change: true,
    will_use_a_lot: true,
}

//Example of a class based component in React
class Style extends Component {
    constructor(props) {
        //What is super?
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
        super(props)

        //Declare the initial state
        this.state = final_const

        //bind any functions that need `this` as context
        //binding in the construtor is prefered so that methods are bound once per component mount
        this.classFunction = this.classFunction.bind(this)
    }

    //an example of a simple function that needs to be bound
    classFunction(event) {
        this.setState({
            trigged_function: event.target.id,
        })
    }

    //an example of a simple function that does not need to be bound
    classFunction2(value) {
        value = value.split(", ").join("/")
        return value
    }

    render() {
        //always wrap JSX assignments and return statements in parentheses
        return (
            //opening and closing tags should always be at the same indentation level
            <div
                //each prop of a JSX component should be a newline
                style={{ height: '10px' }}
                onClick={ (event) => this.classFunction(event)}>
                Out here with style
            </div>
        )
    }
}

//alternatively, we can write our React elements as functional components
//what is object destructuring?
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export const Style2 = ({first_prop, second_prop}) => {
    
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
    let final_div
    if (first_prop === 'whatever') {
        final_div = (
            <div> All I really needed to do was change the text! </div>
        )
    } else {
        final_div = (
            <div> But I made two divs for it! </div>
        )
    }
    //now you have to make changes to the code in two places to keep a single div styled
    //that's bad!

    ///this is better
    let var_text
    if (first_prop === 'whatever') {
        var_text = "This is what I really needed!"
    } else {
        var_text = "Some DRY code!"
    }

    final_div = (
        <div> { var_text } </div>
    )

    //or even more concise
    final_div = (
        <div> { (first_prop === 'whatever') ? "Use this string if the expression is true" : "Otherwise use this one!" } </div>
    )

    return (
        <div>
            Just another example
            { content }
            { final_div }
        </div>
    )
}


export default Style