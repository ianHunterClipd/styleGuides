#python is a syntantically opinionated language and enforces whitespace rules by nature
#so we will focus on naming conventions

#class names are UpperCamelCase. As always, names should be descriptive
class Style():
    #you should be comfortable with class constructors, positional vs keyword arguments,
    #and default argument values
    def __init__(self, text, text2="a default text"):
        self.text = text
        self.text2 = text2

    #function names are lowerCamelCase.
    def printStyle(self):
        #you should also know how self gets passed into this function
        #that is, I'll call style.printStyle() and not style.printStyle(style) 
        print(self.text)
        if self.text2 != "a default text":
            print(self.text2)

if __name__ == "__main__":
    #variable names are also lowerCamelCase
    myVariable = 1

    #let's instantiate a new object of type Style and call its printStyle method
    style = Style("Python is a styling language!")
    style.printStyle()

    #I love my plural 's' - if you have a variable that is a list, it should be a plural word
    #I'm ok with some slight grammatical errors, such as medias or mooses 
    styles = [ Style("It's got a little bit of this..."), Style("and a little bit of that!")]
    #when iterating over objects in the list, use the first letter of the word for the loop variable name
    for s in styles:
        s.printStyle()

    #you should be extremely comfortable with list comprehension syntax 
    styles = [ Style(str(i)) for i in range(0,10) ]
    for s in styles:
        s.printStyle()



