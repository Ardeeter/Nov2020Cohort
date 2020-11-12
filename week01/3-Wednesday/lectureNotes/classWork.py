# Write a program that accepts a number from a user.  
# Test the number to see if it is an even number or an odd number.  
# Print to the screen “This is an even number” 
# or “This is an odd number” based on the result.

# num = int(input("Please enter a number: "))

# if num % 2 == 0:
#     print("This is an even number")
# else:
#     print("This is an odd number")

num = ""

while num!= -1:
    num = int(input("Please enter a number: "))
    if num % 2 == 0:
        print("This is an even number")
    elif num == -1:
        print("exit")
    else:
        print("This is an odd number")

