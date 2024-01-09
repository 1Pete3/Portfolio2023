import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
const Education = () => {
  return (
    <div>
      <TopNavBar />
      Education
      <Card style={{ width: '33%' }}>
        <Card.Img
          style={{ width: '200px', margin: '0 auto' }}
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Central_Connecticut_State_University_Seal.svg/800px-Central_Connecticut_State_University_Seal.svg.png"
        />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <strong>College:</strong> Central Connecticut State University
          </Card.Text>
          <Card.Text>
            <strong>Degree:</strong> Bachelor of Science in Computer Science with a minor in Business
          </Card.Text>
          <Card.Text>
            <strong>Graduation Year:</strong> 2022
          </Card.Text>
          <Card.Text>
            <strong>Favorite Course:</strong> Software Engineering
          </Card.Text>
          <Card.Text>
            <strong>Course Overview:</strong>{' '}
            <ul>
              <li>
                Collaberated on an android application with 3 other class members. Seperation of roles and peer code
                reviews
              </li>
              <li>Weekly scrum meeting</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
};

export default Education;
