# # def someFunction(name):

# class Greeting:
#     def __init__(self, first_name, last_name, age, city): #constructor
#         self.first_name = first_name
#         self.last_name = last_name
#         self.age = age
#         self.city = city


#     #function
#     def say_hello(self):
#         print(f"Hello World {self.first_name} {self.last_name}")





# #variable

# greet = Greeting("Ally", "Deeter", 28, "Santa Barbara") # greet is an object  .Greeting
# # &43567 (memory location for greet)
# # greet.say_hello()  # object of class type
# greet.say_hello()

# greet1 = Greeting("Keegan", "Kovach", 28, "Santa Barbara")
# # &23049 
# greet1.say_hello()

# # greet1 = Greeting() # greet1 is an object
# # greet1.say_hello()

# # # my_string = 'Atlanta'
# # my_string = str('Atlanta')

# class Button:

#     FontWeight = "bold"
#     FontColor = "red"

#     def __init__(self, color):
#         self.count = 0
#         self.color = color

#     @classmethod
#     def popUp(cls):
#         print("jdo you need some help?")

#     def click(self):
#         self.count += 1

#         if(self.count > 2):
#             popUp()
#             self.count = 0

# navButton = Button("green")
# helpButton = Button("yellow")

# print(navButton.FontWeight)
# print(helpButton.FontWeight)

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")

# navButton.click()
# navButton.click()

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")

# navButton.click()

# print(f"nav {navButton.count}")
# print(f"help {helpButton.count}")

class Test:
    def __init__(self):
        self.__a = "a"
        self._b = "b" #semi-private

firstTest = Test()

print(firstTest._b)

class GoogleMaps:

    def __init__(self, address):

        self.address1 = address1
        self.address2 = address2

    def determineLat(self):
        pass

    def determineLong(self):
        pass

map = GoogleMapsAPI("123 my street", "some other street")