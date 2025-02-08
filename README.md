Quiz ME
![License](https://img.shields.io/badge/License-MIT-yellow.svg "License")

Description
For this project I took the starter codebase from Denver University of a fully functioning Tech Quiz application and enhanced it by adding Cypress for both component and end-to-end tests. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It allows users to take a quiz of ten random questions and view their final score.

I had to:
- Install Cypress as a dev dependency.
- Configure Cypress for both component and end-to-end testing.
- Create a component test for the quiz component.
- Create an end-to-test for the quiz component.

Features
- Componet resting with Cypress
- End to end testing with Cypress

Technologies Used
- MERN
- MongoDB
- Node.js/Express.js
- API
- CYPRESS

Screenshots:
[ComponetTesting](https://i.postimg.cc/gc3Pxp8q/componet-Testing.jpg)
[E2E testing](https://i.postimg.cc/7hkd3C01/e2e.jpg)

View Demo:
[Link](https://drive.google.com/file/d/1ajfrq9JWllK-dH6bwZQbBDta_l_5RFYg/view?usp=sharing)

Table of Contents
- Installation
- Usage
- Credits
- License
- User Stories
- Acceptance Criteria

Installation
- git clone the repo
- cd tech-quiz
- npm install
- npm run dev
- npm run test:component
- npm run test:e2e
- npm run cypress

Credits
Contributors
- Kristy Thompson: [GitHub Profile](https://github.com/Kristy-H-Thompson)
- Starter code: University of Denver

Resources
- [Cypress Documentation](https://www.cypress.io/)
- [GraphQL](https://graphql.org/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Installation Guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)
- [MongoDB Documentation](https://www.mongodb.com/docs/v5.0/reference/method/cursor.toArray/)
- [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)


License
This project is licensed under the MIT License.

User Stories
- AS AN aspiring developer
- I WANT to take a tech quiz
- SO THAT I can test my knowledge and improve my skills

Acceptance Criteria
GIVEN I am taking a tech quiz
- WHEN I click the start button, THEN the quiz starts and I am presented with a question
- WHEN I answer a question, THEN I am presented with another question
- WHEN all questions are answered, THEN the quiz is over
- WHEN the quiz is over, THEN I can view my score
- WHEN the quiz is over, THEN I can start a new quiz