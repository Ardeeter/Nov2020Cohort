class Person: 
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0
        
    def greet(self, other_person):
        self.greeting_count += 1
        greet_msg = 'Hello {}, I am {}!'.format(other_person.name, self.name)
        return greet_msg

    def add_friend(self, friend):
        self.friends.append(friend)

    def print_contact_info(self):
        for friend in self.friends:
            print(f"{friend.name}'s email: {friend.email}, {friend.name}'s phone number: {friend.phone}")

    def num_friends(self):
        return len(self.friends)

    # def greeting_count(self):
    #     print (self.greeting_count)


sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")

sonny.greet(jordan)
jordan.greet(sonny)

print(f"{sonny.name}'s email is {sonny.email} and phone number is {sonny.phone}.")
print(f"{jordan.name}'s email is {jordan.email} and phone number is {jordan.phone}.")

# print(sonny.print_contact_info())

# jordan.friends.append(sonny)
# sonny.friends.append(jordan)

jordan.add_friend(sonny)

print(jordan.print_contact_info())

# print(len(jordan.friends))

jordan.num_friends()

print(sonny.greeting_count)




