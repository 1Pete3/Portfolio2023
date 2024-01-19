import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SkillsCard from '../components/Education/SkillsCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../components/Education/education.scss';
const Education = () => {
  return (
    <div className="test">
      <TopNavBar />
      <Card id="educationContainer" className='bg-filler'>
        <Card.Title className="text-center fs-1 fw-bold">University</Card.Title>
        <Card.Img
          style={{ width: '200px', margin: '0 auto' }}
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Central_Connecticut_State_University_Seal.svg/800px-Central_Connecticut_State_University_Seal.svg.png"
        />
        <Card.Body>
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
                Worked with Promly (non-profit) to create an android app focused on mental health for teenagers from an
                already existing ios app with the help of Figma
              </li>
              <li>Collaborated with 3 other class members. Separation of roles and peer code reviews</li>
              <li>Weekly scrums, sprint reviews, and retrospectives </li>
              <li>Constant communication with the product owner about required features</li>
            </ul>
            <Button href="https://github.com/shanec1225/PromlyApp" target="_blank" rel="noopener noreferrer">
              View on Github
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card id="skillsContainer" className='bg-filler'>
        <Card.Title className="text-center fs-1 fw-bold">Skills</Card.Title>
        <Card.Body>
          <Card.Text>
            <SkillsCard />
          </Card.Text>
        </Card.Body>
      </Card>

      <Card id="favoriteContainer" className='bg-filler'>
        <Card.Title className="text-center fs-1 fw-bold">My Favorite Resources</Card.Title>
        <Container className="text-center">
          <Row>
            <Col className="p-3">
              <h3>Codeacademy</h3>
              <Card.Img
                style={{ width: '200px', margin: '0 auto' }}
                variant="top"
                src="https://creatorchannels.com/wp-content/uploads/2019/02/Codecademy.jpg"
              />
            </Col>

            <Col className="p-3">
              <h3>FreeCodeCamp</h3>
              <Card.Img
                style={{ width: '200px', margin: '0 auto' }}
                variant="top"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJwFt03RAznOsPwlfo5c1kW1rp-1o3Xgpw9MNreQMQ%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=94b62a6ec9287092f72a9890572480c7479ed7fcb04c8b05557d0e6c0e4c4abc&ipo=images"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                There are both free and paid courses. A subscription is required to access paid courses but I think that
                it is worth it. There are many projects, articles, videos and an online code editor so everything is all
                in one place. I like the progression of topics in the courses and I think it is easy to follow / learn.
              </p>
              <p>
                Some courses I have taken / am taking are :
                <br />
                rwar
              </p>
            </Col>
            
          </Row>
        </Container>
        <Card.Body></Card.Body>
      </Card>

      <Footer />
    </div>
  );
};

export default Education;
