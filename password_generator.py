import secrets 

def generate_password(length):
    digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] 
    lower_letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                     'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q',
                     'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
                     'z']
 
    upper_letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                     'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q',
                     'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
                     'Z']
    special_chr = ['!', "@", "$"]

    and_chr = ['&', ',', '/', ';', '.']

    
    LETTER_LS = upper_letters + lower_letters + digits + special_chr
    COMBINED_LS = upper_letters + lower_letters + special_chr + and_chr
    password = ''
    state = True
    
    for x in range(length):
        if state:
            current_letter = secrets.choice(LETTER_LS)
            password += current_letter
            state = False
            if current_letter in digits:
                state = True
        else:
            password += secrets.choice(COMBINED_LS)
            state = True
    
    return password



def _upper_conv(word):
    return word[0].upper() + word[1:]


def password_to_sentence(password):
    subject_letters = {'a': 'astronaut', 'b': 'bumblebee', 'c': 'canary', 'd': 'dinosaur', 'e': 'elephant', 'f': 'fish', 'g': 'goat', 
        'h' : 'horse', 'i': 'iguana', 'j': 'joker', 'k': 'koala', 'l': 'lion', 'm': 'mouse', 'n': 'ninja', 'o': 'owl', 
        'p': 'panda', 'q': 'queen', 'r': 'rabbit', 's': 'snake', 't': 'tiger', 'u': 'unicorn', 'v': 'vulture', 
        'w': 'worm', 'x': 'xylophone', 'y': 'yak', 'z': 'zebra' }

    verb_letters = {'a': 'accepts', 'b': 'blesses', 'c': 'challenges', 'd': 'delights', 'e': 'enjoys', 'f': 'fetches', 'g': 'guards', 
        'h' : 'handles', 'i': 'imagines', 'j': 'jokes', 'k': 'kicks', 'l': 'launches', 'm': 'manages', 'n': 'needs', 'o': 'observes', 
        'p': 'paints', 'q': 'questions', 'r': 'recognizes', 's': 'scratches', 't': 'ticks', 'u': 'uses', 'v': 'visits', 
        'w': 'weighs', 'x': 'x-rays', 'y': 'yells', 'z': 'zips'}

    symbol_letters = {'!': 'i', '$':'s', '@' : 'a'}
    
    and_chr = {'&': 'and', ',' :',', '/': '/', ';' :';', '.':'.'}
  
    reverse_acroynm = []
    state = 0
    for letter in password:
            
        if letter in and_chr:
            reverse_acroynm.append(letter)
            state = 0

        elif letter in symbol_letters: 
            temp_letter = symbol_letters[letter]
            if state ==0 or state == 2:
                word = subject_letters[temp_letter]
            else:
                word = verb_letters[temp_letter]
                word = letter + word[1:]
                reverse_acroynm.append(word)

        elif letter.isdigit():
            reverse_acroynm.append(letter)

        elif state == 0 or state == 2:
            word = subject_letters[letter.lower()]
            if letter.isupper():
                word = _upper_conv(word)
            reverse_acroynm.append(word)
            state += 1
        elif state == 1:
            word = verb_letters[letter.lower()]
            if letter.isupper():
                word = _upper_conv(word)
            reverse_acroynm.append(word)
            state += 1
        
        
        if state == 3:
            state = 0




    return ' '.join(reverse_acroynm)

print(password_to_sentence(generate_password(10)))

