module.exports = {
  siteMetadata: {
    title: `Data Version Control - Make your data science projects reproducible and shareable.`,
    description: `Read more about dataversioncontrol. Git for data science projects.`,
    keywords: `DATA SCIENCE, MACHINE LEARNING, DEVTOOLS, DATA VERSION CONTROL`,
    preview: `https://content.linkedin.com/content/dam/developer/global/en_US/site/logos/techcrunch.png`,
    siteUrl: `https://dataversioncontrol.com/`,
    author: `Dmitry Petrov`,
    videoId: `X8oEcNhKrZM`,
    githubUrl: 'https://github.com/dataversioncontrol',
    downloadUrl: '/',
    facebook: 'dataversioncontrol',
    linkedin: 'dataversioncontrol',
    twitter: 'dataversioncontrol',
    email: 'info@dataversioncontrol.com',
    downloadOSX: 'https://s3-us-west-2.amazonaws.com/dataversioncontrol/dist/dvc-v0.7-macos.pkg',
    downloadLinux: 'https://s3-us-west-2.amazonaws.com/dataversioncontrol/dist/dvc-v0.7-linux.bin',
    downloadLinuxRPM: 'https://s3-us-west-2.amazonaws.com/dataversioncontrol/dist/dvc-v0.7-linux.bin',
    downloadWin: 'https://s3-us-west-2.amazonaws.com/dvc-share/dist/dvc-0.8.1.exe'
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
