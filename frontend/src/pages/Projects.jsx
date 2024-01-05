import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';
import Jupyter from '../components/Jupyter';
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
    <div className='projectsPage'>
      <TopNavBar />
      <h1 className="animate__animated animate__bounceIn">Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <Button variant="primary" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            View on Github
          </Button>{' '}
          <Stack direction="horizontal" gap={3}>
            {project.languages.map((language, index) => {
              return (
                <div className="d-flex align-items-center" key={index}>
                  <span
                    className={
                      language === 'C++'
                        ? 'color-cpp'
                        : language === 'Jupyter Notebook'
                        ? 'jupyter'
                        : language === 'Swift'
                        ? 'color-swift'
                        : language === 'CSS'
                        ? 'color-css'
                        : language === 'JavaScript'
                        ? 'color-javascript'
                        : language === 'SCSS'
                        ? 'color-scss'
                        : language === 'HTML'
                        ? 'color-html'
                        : 'primary'
                    }
                  >
                    ■
                  </span>{' '}
                  {language}
                </div>
              );
            })}
          </Stack>
          <ProgressBar>
          

          </ProgressBar>
          <Jupyter />
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default Projects;
