import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('/api/Projects')
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TopNavBar />
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <Button variant="primary" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            View on Github
          </Button>{' '}
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Projects;
