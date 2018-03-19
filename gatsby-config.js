module.exports = {
  siteMetadata: {
    title: `Data Version Control - Make your data science projects reproducible and shareable.`,
    description: `Read more about dataversioncontrol. Git for data science projects.`,
    keywords: `DATA SCIENCE, MACHINE LEARNING, DEVTOOLS, DATA VERSION CONTROL`,
    preview: `preview.jpg`,
    siteUrl: `https://dataversioncontrol.com/`,
    author: `Dmitry Petrov`,
    videoId: `X8oEcNhKrZM`,
    githubUrl: 'https://github.com/dataversioncontrol/dvc',
    downloadUrl: '/',
    facebook: 'dataversioncontrol',
    linkedin: 'dataversioncontrol',
    twitter: 'dataversioncontrol',
    email: 'info@dataversioncontrol.com',
    downloadOSX: 'https://github.com/dataversioncontrol/dvc/releases/download/0.9.0/dvc-0.9.0.pkg',
    downloadLinux: 'https://github.com/dataversioncontrol/dvc/releases/download/0.9.0/dvc_0.9.0_amd64.deb',
    downloadLinuxRPM: 'https://github.com/dataversioncontrol/dvc/releases/download/0.9.0/dvc-0.9.0-1.x86_64.rpm',
    downloadWin: 'https://github.com/dataversioncontrol/dvc/releases/download/0.9.0/dvc-0.9.0.exe'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/documentation`,
        name: 'markdown-pages'
      }
    },
    `gatsby-transformer-remark`
  ]
}
