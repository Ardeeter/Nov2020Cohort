
# file_handle = open('hello.txt', 'w')

# file_handle.write('hello world\nthis is a new line')

# file_handle.close()

# file_handle = open('declaration.txt', 'r')

# contents = file_handle.read()

# file_handle.close()

# print(contents)

import pickle

# ramit = {
#     'name': 'Ramit',
#     'email': 'ramit@gmail.com',
#     'interests': ['movies', 'tennis'],
#     'friends': [
#         {
#             'name': 'Jasmine',
#             'email': 'jasmine@yahoo.com',
#             'interests': ['photography', 'tennis']
#         },
#         {
#             'name': 'Jan',
#             'email': 'jan@hotmail.com',
#             'interests': ['movies', 'tv']
#         }
#     ]
# }

# with open('rammit.pickle', 'wb') as fx:
#   pickle.dump(ramit, fx)

# with open('rammit.pickle', 'rb') as fh:
#     phoneBook = pickle.load(fh)

# print(phoneBook['friends'])