import * as React from 'react';
import {Accordion} from '@mui/material/';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

const Info = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='accord'>
        <h1 className="title">How to create a strong password?</h1>
      <Accordion square = {false} className='accord_content' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          1. Use a combination of upper and lowercase letters, numbers, and special characters.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginLeft: "5%" }}>
          Step 1 in creating a strong password is to use a combination of upper and lowercase letters, numbers, and special characters. This increases the complexity and difficulty of guessing or cracking the password.<br></br><br></br>
Including numbers in a password adds an additional layer of complexity and makes it harder to guess. Special characters, such as !, @, #, $, %, etc. add even more complexity and make it even more difficult to crack the password.<br></br><br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accord_content' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0}}>
            2. Make it at least 12 characters long.
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginLeft: "5%" }}>
          Step 2 in creating a strong password is to make it at least 12 characters long. The longer a password is, the harder it is to guess or crack using brute force methods. <br></br><br></br>
Brute force attacks involve guessing a password by trying every possible combination of characters until the correct one is found. The more characters a password has, the more possible combinations there are, making it much harder to guess the correct one.<br></br><br></br>
It is highly recommended to use a password of at least 15 characters for better security.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accord_content' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          3. Avoid using easily guessable information such as your name, birthdate, or common words.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginLeft: "5%" }}y>
          Step 3 in creating a strong password is to avoid using easily guessable information such as your name, birthdate, or common words. This is important because these types of information can be easily obtained through social engineering or by looking at personal information that is publicly available.<br></br><br></br>

Your name, birthdate, or other personal information can be used as a starting point for guessing your password. For example, if your name is John Smith, someone may try using "JohnSmith" as a password or variations like "J0hnSm!th".<br></br><br></br>

Common words or phrases that are found in the dictionary are also easily guessable, especially if they are not combined with other characters or numbers. For example, "password" or "123456" are common passwords that are easily cracked.<br></br><br></br>

By avoiding the use of easily guessable information in your password, you make it much more difficult for someone to guess or crack it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accord_content' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>4. Avoid using the same password for multiple accounts.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginLeft: "5%" }}>
          Step 4 in creating a strong password is to avoid using the same password for multiple accounts. Reusing the same password for multiple accounts can be very risky, as it only takes one of those accounts to be compromised for all of your other accounts to be at risk. <br></br><br></br>
If an attacker gains access to one of your accounts using a guessed or cracked password, they can then use that same password to try and gain access to your other accounts. This is known as "password spraying" and it's a very common tactic used by attackers. <br></br><br></br>
A password manager can be very helpful in generating and keeping track of unique and complex passwords for different accounts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accord_content' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>5. Use a passphrase, this is a sentence or phrase that is easy for you to remember, but difficult for others to guess.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginLeft: "5%" }}>
          Step 5 in creating a strong password is to use a passphrase. A passphrase is a sentence or phrase that is easy for you to remember, but difficult for others to guess. <br></br><br></br>

A passphrase can be made up of multiple words and can include spaces, making it much longer and more complex than a traditional password. For example, "I love to play the guitar on the weekends" is a passphrase that is easy to remember, but difficult to guess. <br></br><br></br>

Passphrases are considered to be more secure than traditional passwords because they are longer and harder to crack. They also tend to be easier to remember because they are made up of words and phrases that have meaning to the user. <br></br><br></br>

You can also use the first letter of each word and add numbers and special characters to make it more complex. For example, "Il2ptgo2wt" is a passphrase that is easy to remember but difficult to guess.   <br></br><br></br>

It's important to note that the use of passphrase does not replace the use of other steps to create a strong password, it adds to it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accord_content' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>6. Avoid using keyboard patterns or repeating characters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginLeft: "5%" }}>
          Step 6 in creating a strong password is to avoid using keyboard patterns or repeating characters. Keyboard patterns refer to using consecutive letters, numbers or symbols that are found on a keyboard such as "qwerty" or "asdfgh". <br></br><br></br>

Repeating characters refer to using the same character multiple times in a row, such as "1111" or "aaaa". These types of patterns are easily guessable and can be cracked quickly using automated tools. <br></br><br></br>
You can use a password manager to generate a random password and avoid falling into the trap of using patterns or repeating characters.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accord_content' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>7. Use a password manager to generate and store complex passwords for you.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ marginLeft: "5%" }}>
          Step 7 in creating a strong password is to use a password manager. A password manager is a tool that can generate, store, and manage complex passwords for you. It can also automatically fill in login information for you, so you don't have to remember all of your different passwords. <br></br><br></br>

Password managers use encryption to protect your passwords, so even if someone gains access to the password manager, they will not be able to see your passwords in plain text. Some password managers also include features such as two-factor authentication to add an extra layer of security.   <br></br><br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Info;