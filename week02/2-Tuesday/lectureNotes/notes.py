## *************DICTIONARIES*************

## CRUD  ---> CREATE / READ / UPDATE / DELETE

# myList = [2, 5, 7, 7]

# myList[0] = 99

## CREATE

# myDictionary = {

#         "firstName" : "Ally",
#         "lastName" : "Deeter",
#         "age" : 21,
#         "accountBalance" : {
#             "savings" : 3, 
#             "checking" : [45 , 67]
#         },
#         "city" : True,
#         False : "Tampa"
# }


# ## READ 

# name = myDictionary["firstName"]
# print(name)

# # name = myDictionary["middleName"]

# name = myDictionary.get("middleName")


# isValid = "middleName" in myDictionary

# print(isValid)

# ## UPDATE

# myDictionary["firstName"] = "Buddha"

# print(myDictionary)

# keys = myDictionary.keys()
# values = myDictionary.values()

# print(keys)
# print(values)

# ## DELETE

# del myDictionary["lastName"]

# print(myDictionary)

# items = myDictionary.items()
# print(items)

# for k, v in myDictionary.items():
#     print(k)
#     print(v)




# contact = [
#     {
#         'first_name': 'Phillip',
#         'last_name': 'Guo',
#         'email': 'phillip.guo@gmail.com',
#         'phone':{
#             'work':'837-494-3948',
#             'cell': '234-897-4933'
#         }
#     },
#     {
#         'first_name': 'Mark',
#         'last_name': 'Guzdial',
#         'email': 'mark.guzdial@gatech.edu',
#         'phone':{
#             'work':'484-569-3466',
#             'cell': '493-485-9845'
#         }
#     }
# ]

# markEmail =contact[1]['email']

# print(markEmail)

# markPhone = contact[1]['phone']['cell']

# print(markPhone)






