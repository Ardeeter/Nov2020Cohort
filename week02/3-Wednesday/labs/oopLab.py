

# 1. Create an empty class called "Student"
# class Student:
#     def __init__(self, name):
#         self.name = name

#     def greeting(self):
#         return (f"Good morning {self.name}")

<<<<<<< HEAD
# 2. Create 5 students objects (instances of the class "Student") of "Student" types
# kanny = Student("Kanny")
# matthew = Student("Matthew")
# joe = Student("Joe")
# kim = Student("Kim")
# adam = Student("Adam")

# print(kanny.greeting())
# print(matthew.greeting())
# print(joe.greeting())
# print(kim.greeting())
# print(adam.greeting())
=======
#2. Create 5 students objects (instances of the class "Student") of "Student" types

>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7

#3a. Create a "greeting" method inside of the class "Student" class that 
# takes as a parameter "name". The return of the  method should be
# "Good morning {name}" 


<<<<<<< HEAD

# 4. Call the greet  method on each of the students in # 5 passing in a different
=======
#4. Call the greet  method on each of the students in # 5 passing in a different
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7
# name argument each time.
# print(kanny.greeting('Kanny'))
# print(matthew.greeting('Matthew'))
# print(joe.greeting('Joe'))
# print(kim.greeting('Kim'))
# print(adam.greeting('Adam'))

#5a. Create a constructor for the Student class. 
#5b. Create a print statement inside of the constructor
#5c. Run your lab.py again and you should see a print statement for each student object 
# That you created 


#6a. Pass in "name" as a parameter to your Student constructor. 
#6b. Create an instance variable for name
#6c. Refactor your greeting method by removing the name parameter and 
# adding a "self" in front of the printed "name" variable in the return statement 
#6d. Refactor your Student objects by passing in the name as an argument when the
# object gets instantiated 

#7. Class Methods
#7a. Create a "Class" method inside of the "Student" called "campus" that returns the 
# Statement "Digital Crafts - Houston"
# Campus is a "Class" method so it should not have "self" as an argument. 
#7b. call the campus method by invoking Student.campus()
#7c. Call the campus method on each of the student objects 
#7d. Return the name of the student in the campus method (instance variable) (you should
# get an error)

#8. Class Variables 
#8a. Create a class variable inside of the Student class called "cohort" whose value is
# "June 2020 Cohort"
#8b. Print to the console each class variable for each of the student objects, i.e. 
# Michah.cohort 
#8c. Refactor your class method to print out the class variable when it is called 
#8d. Call the class method on the class (i.e. Student.campus())
#8e. Call the class method on each object (i.e. Dan.campus())

#9. Accessor Modifiers 
# Refactor your constructor to take a parameter for studentID
#9a. Create a new instance variable for studentID with the value _studentID
# Refactor the student objects to pass a studentID argument
#9b. Print the studentID value to the console
# Change the value of studentID to __studentID 
# Print the value to the console (you should get an error)


#. Inheritance 

# Create a new class called Car with the following method :
# CarDetails which prints "Here are details of this car"

class Car:
    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color

    def CarDetails(self):
        print(f'''
        Here are the car details:
        Make: {self.make}
        Model: {self.model}
        Color: {self.color}
        ''')

# Create a new class called Hybrid that inherits from the Car class
<<<<<<< HEAD
#  with the following method: CarType which prints "I am a hybrid car"
class Hybrid(Car):
    def CarType(self):
        print("I am a hybrid car.")



# Create a new class called Electric that inherits from the Car class
#  with the following  method: CarType which prints "I am a hybrid car"
class Electric(Car):
    def CarType(self):
        print("I am an electric car.")
=======
#  with the following method: CarType which prints "I am a hybrid car" 


# Create a new class called Electric that inherits from the Car class
#  with the following  method: CarType which prints "I am a hybrid car" 
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7

# Create a Hybrid instance and an Electric instance
# Call the method CarType on the Hybrid Instance and Electric Instance 
# Call the method Car Details on each instance

prius = Hybrid("Toyota", "Prius", "Silver")
prius.CarType()
prius.CarDetails()

tesla = Electric("Telsa", "Model X", "Black")
tesla.CarType()
tesla.CarDetails()


# Add the following instance variables to the Car class :
# - make 
# - model 
# - color








# Implicit Inheritance 

#. Override Explicitly

# Alter Before or After

# Super()

# COMPOSITION


