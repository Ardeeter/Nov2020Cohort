# class Student():
#     def __init__(self, firstName, lastName, campus):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.campus = campus
#     def printStudent(self):
#         print(f"{self.firstName} {self.lastName} campus: {self.campus}")

# cedael = Student("Cedael", "white", "Atlanta")
# micah = Student("Micah", "Peterson", "Houston")
# ian = Student("Ian", "Haddock", "Atlanta")

# class Campus:
#     def __init__(self):
#         self.students = []  # list contains object of student type

#     def addStudent(self, firstName, lastName, campus):

#         student = Student(firstName, lastName, campus)
#         self.students.append(student)

#     def showCurrentStudents(self):
#         for studentObj in self.students:
#             print(f"{studentObj.firstName} {studentObj.lastName} {studentObj.campus}")


# dc = Campus()

# dc.addStudent("Kanny", "Mohammad", "Houston")
# dc.addStudent("Matthew", "Chun", "Seattle")
# dc.addStudent("Kim", "Long", "Atlanta")
# dc.addStudent("Joe", "Stocks", "Houston")

# dc.showCurrentStudents()


class AccountHolder:
    def __init__(self, fName, accountType, status, balance):
        self.fName = fName
        self.accountType = accountType
        self.status = status
        self.balance = balance


class Bank:
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.accounts = []

    def open_new_account(self, fName, accountType, status, balance):
        newAccount = AccountHolder(fName, accountType, status, balance)
        self.accounts.append(newAccount)
        
    def show_account_holder(self):
        for person in self.accounts:
            all_accounts += (f"Name: {person.fName} Status: {person.status} Balance: {person.balance}\n")
        return all_accounts
        # pass # name and status and balance

    def show_bank_balance(self):
        bank_balance = 0
        for person in self.accounts:
            bank_balance += person.balance
        return bank_balance 
        # pass # add all account holder balances

chase = Bank("Chase", "Houston")
chase.open_new_account("Ally", "checking", "good", 100)

chase.show_bank_balance()
chase.show_account_holder()

