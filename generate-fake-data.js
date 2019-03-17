const faker = require('faker')

function generateData () {
  let jobs = []
  for (let id = 0; id < 10; id++) {
    let technologies = getTechnologies()
    let title = getJobTitle()
    let companyName = faker.company.companyName()
    let shortParagraph = getShortParagraph(title, companyName)
    let datePosted = faker.date.recent()

    jobs.push({
      id: id,
      title: title,
      datePosted: datePosted,
      technologies: technologies,
      shortParagraph: shortParagraph,
      company: {
        name: companyName
      }
    })
  }

  return { jobs }
}

function getTechnologies () {
  const availableTechnologies = ['Vue.js', 'Angular', 'Laravel', 'Python', 'flask', 'Java', 'PHP', 'Javascript']
  let numberOfTechnologies = Math.floor((Math.random() * 5) + 1)
  return availableTechnologies
    .map(x => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(a => a.x)
    .slice(0, numberOfTechnologies)
}

function getJobTitle () {
  const availableTitles = ['Software Developer', 'Software Engineer', 'Programmer',
    'Front-end developer', 'Back-end developer']
  return availableTitles[Math.floor(Math.random() * availableTitles.length)]
}

function getShortParagraph (jobTitle, companyName) {
  const availableParagraphs = [
    `${companyName} is looking for a talented ${jobTitle} to join the team! `,
    `Looking for a ${jobTitle} to join ${companyName} for a great project!`,
    `We, at ${companyName} are currently looking for a ${jobTitle} to join us.`,
    `Currently trying to find a ${jobTitle} to join our team for a new project.`
  ]

  return availableParagraphs[Math.floor(Math.random() * availableParagraphs.length)]
}

module.exports = generateData
