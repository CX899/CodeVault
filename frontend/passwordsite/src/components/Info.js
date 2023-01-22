import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
const Info = () => {
  return (
    <div>
        <Container>
            <Row className='info__container'>
                <Col className='info__text'>
                <h1>How to create a strong password</h1>
                <h3>1. A strong password is a password that is hard to guess?</h3>
                <p>
                Using a combination of upper and lowercase letters, numbers, and special characters in a password helps to increase its complexity and make it harder for an attacker to guess or crack.<br/><br/>

                Uppercase letters add an additional set of characters that must be guessed, making it harder to crack the password. Lowercase letters, numbers, and special characters all add to the complexity of the password, making it more difficult to crack.<br/><br/>

                It's recommended to use a mix of at least three of these types of characters in your password. For example, a password like "P@ssw0rd!" would be considered more secure than "password" because it includes uppercase letters, numbers, and special characters.<br/><br/>

                Also, avoid using easily guessable information such as "password" or "1234" as your password. These are commonly used and can be easily cracked.<br/><br/>
                </p>    
                </Col>
                <Col className='info__text'>
                <h3>2. A strong password is a password that is hard to remember?</h3>
                <p>
                A strong password is a password that is hard to guess, but it is also a password that is easy to remember. The best passwords are ones that are easy to remember, but hard to guess. This is because if you can't remember your password, you will be more likely to write it down or use the same password for multiple accounts.<br/><br/>
                </p>
                </Col>            
            </Row> 
        </Container>
    </div>
  )
}

export default Info