
# Please enter your name: Eric
# Hello, Eric!


# Prompt the user for his name using the input function. Example:
name = input("Please enter your name: ")
print(f"Hello, {name}!")

# Same as the first exercise, but this time print the user's 
# name in ALL CAPS, and also tell them the number of letters in their name.

# (Hint: You'll want to search for documentation on how to uppercase a string.)
name = input("PLEASE ENTER YOUR NAME: ")
nameCaps = name.upper()
numOfLetters = len(name)

print(f"HELLO, {nameCaps}! YOUR NAME HAS {numOfLetters} LETTERS IN IT!")
