import axios from 'axios';
import '../env.js';
const githubHeaders = {
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
};
const projectRepos = ['Medical-Insurance-Dictionaries', 'War-Card-Game', 'Bank-Teller', 'Portfolio2023'];
const getRepoInfo = 'https://api.github.com/repos/1Pete3/';
const repoInfo = [];

async function getID() {
  try {
    for (let i = 0; i < projectRepos.length; i++) {
      let repoURL = getRepoInfo + projectRepos[i];

      const res = await axios.get(repoURL, githubHeaders);
      if (res.status === 200) {
        let languageURL = repoURL + '/languages';
        try {
          const languages = await axios.get(languageURL, githubHeaders);
          let name = res.data.name;
          name = name.replaceAll('-', ' ');
          repoInfo[i] = {
            id: i,
            name: name,
            repoUrl: res.data.html_url,
            languagesInfo: languages.data,
            languages: Object.keys(languages.data),
          };
        } catch (error) {
          console.error(error);
        }
      }
    }
  } catch (err) {
    console.error(err);
  }

  return repoInfo;
}

export default getID;
