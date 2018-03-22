module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Data Version Control. Git extension for data scientists – manage your code and data together"`,
    description: `Make your data science and machine learning projects reproducible and shareable.`,
    keywords: `DATA SCIENCE, MACHINE LEARNING, DEVTOOLS, DATA VERSION CONTROL`,
    preview: `https://dataversioncontrol.com/preview.jpg`,
    siteUrl: `https://dataversioncontrol.com/`,
    author: `Dmitry Petrov`,
    videoId: `4h6I9_xeYA4`,
    githubUrl: 'https://github.com/dataversioncontrol/dvc',
    downloadUrl: '/',
    facebook: 'dataversioncontrol',
    linkedin: 'dataversioncontrol',
    twitter: 'dataversioncontrol',
    email: 'info@dataversioncontrol.com',
    downloadOSX:
      'https://github.com/dataversioncontrol/dvc/releases/download/0.9.0/dvc-0.9.0.pkg',
    downloadLinux:
      'https://github.com/dataversioncontrol/dvc/releases/download/0.9.0/dvc_0.9.0_amd64.deb',
    downloadLinuxRPM:
      'https://github.com/dataversioncontrol/dvc/releases/download/0.9.0/dvc-0.9.0-1.x86_64.rpm',
    downloadWin:
      'https://github.com/dataversioncontrol/dvc/releases/download/0.9.0/dvc-0.9.0.exe'
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-97468780-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    }
  ]
}
