For a typescript application, for a team of 6 people. We employ ESLint and have a dedicated ESLint.ts file in our TypeScript project, establishing uniform coding standards for all team members.
We leverage Jest and Cypress to conduct comprehensive tests. These tests are routinely executed before initiating the project build using the built-in build tools.

For Cloud-based CI tools, we use Azure Pipelines and AWS CodePipeline.
For self-hosted CI, Jenkins is a robust option, especially suitable for on-premises installation.
Other tools include GitLab CI, CircleCI and Travis CI.
It also depends on what version control system you use.
The dcision between self-hosted and cloud-based envirnoment depends on many factors. Factors like:
- Project scale
- Security requirements
- Infrastructure already in place
- Team's preference

A self-hosted solution like Jenkins might be preferable for larger projects with specific on-premises needs. In contrast, cloud-based solutions offer scalability, ease of setup, and integration possibilities, making them suitable for projects with diverse requirements.