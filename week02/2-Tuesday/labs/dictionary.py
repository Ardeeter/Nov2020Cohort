# 1. Create a dictionary called zodiac with the following inforation.
# Each key is the name of the zodiac


# Aries - The Warrior
# Taurus - The Builder
# Gemini - The Messenger
# Cancer - The Mother
# Leo - The King
# Virgo -The Analyst
# Libra - The Judge
# Scorpio - The Magician
# Sagittarius - the Gypsy
# Capricorn - the Father
# Aquarius - The Thinker
# Pisces - TheMystic

# zodiac = {
#     "Aries" : "The Warrior",
#     "Taurus" : "The Builder",
#     "Gemini" : "The Messenger",
#     "Cancer" : "The Mother",
#     "Leo" : "The King",
#     "Virgo" : "The Analyst",
#     "Libra" : "The Judge",
#     "Scorpio" : "The Magician",
#     "Sagittarius" : "the Gypsy",
#     "Capricorn" : "the Father",
#     "Aquarius" : "The Thinker",
#     "Pisces" : "TheMystic"
# }

# myZodiac = zodiac["Aries"]
# print(myZodiac)


# 1a. Retrieve information about your zodiac from the zodiac dictionary

# 2. Given the following dictionary

# phonebook_dict = {
#     'Alice': '703-493-1834',
#     'Bob': '857-384-1234',
#     'Elizabeth': '484-584-2923'
# }


# # phonebook_dict["Kareem"] = "938-489-1234"
# # 2a. Print Elizabeth's phone number
# print(phonebook_dict["Elizabeth"])

# # 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# phonebook_dict["Kareem"] = "938-489-1234"
# print(phonebook_dict)

# # 2c. Delete Alice's phone entry.
# del phonebook_dict["Alice"]
# print(phonebook_dict)

# # 2d. Change Bob's phone number to '968-345-2345'.
# phonebook_dict["Bob"] = "968-345-2345"
# print(phonebook_dict)

# # 2e. Print all the phone entries.
# for key, value in phonebook_dict.items():
#     print (f"{key} : {value}")


# 3. Nested dictionaries

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
# # 3a. Write a python expression that gets the email address of Ramit.
# ramit_email = ramit['email']
# print(ramit_email)

# # 3b. Write a python expression that gets the first of Ramit's interests.
# ramit_interest1 = ramit['interests'][0]
# print(ramit_interest1)

# # 3c. Write a python expression that gets the email address of Jasmine.
# jasmine_email = ramit['friends'][0]['email']
# print(jasmine_email)

# # 3d. Write a python expression that gets the second of Jan's two interests.
# jan_interest2 = ramit['friends'][1]['interests'][1]
# print(jan_interest2)


# 4. Letter Summary
# Write a letter_histogram function that takes a word as its input,
# and returns a dictionary containing the tally of how many times
# each letter in the alphabet was used in the word. For example:

# >>>letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}

# def letter_histogram(word):
#     lower_word = word.lower()
#     count_of_letter = {}
#     for letter in lower_word:
#         count_of_letter[letter] = int(lower_word.count(letter))
#     return count_of_letter

# input_word = input("Please enter a word: ")
# print(letter_histogram(input_word))

# Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

# >>> word_histogram('To be or not to be')

def word_histogram(paragraph):
    count_of_word = {}
    lower_paragraph = paragraph.lower()
    words = lower_paragraph.split()
    for word in words:
        count_of_word[word] = int(words.count(word))
        # if word in count_of_word:
        #     count_of_word[word] += 1
        # else:
        #     count_of_word[word] = 1
    return count_of_word

input_paragraph = input('Please enter a paragraph: ')
print(word_histogram(input_paragraph))

# Sorting a histogram
# Given a histogram tally (one returned from either letter_histogram
# or word_histogram), print the top 3 words or letters.

# def sorting_histogram(word):
#     dictionary_histogram = letter_histogram(word)
#     sorted_string = ""
#     for key in sorted(dictionary_histogram):
#         sorted_string += (f"{key}: {dictionary_histogram[key]}\n")
#     return sorted_string.strip()


# input_word = input("Please enter a word: ")
# print(sorting_histogram(input_word))

