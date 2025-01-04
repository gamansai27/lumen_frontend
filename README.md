# lumen_frontend

# lumen
LUMEN HACKATHON

# Lumen Technical Documentation

## Table of Contents

- [Steps to Run the Project](#steps-to-run-the-project)
- [Branching Guidelines](#branching-guidelines)
- [Pull Request Workflow](#pull-request-workflow)
- [Steps to Build and Deploy](#steps-to-build-and-deploy)
- [Environment Variables](#environment-variables)
- [Things to Keep in Mind](#things-to-keep-in-mind)


## Steps to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/gamansai27/lumen_frontend.git
   ```

2. Install dependencies:

   ```bash
   cd lumen_frontend
   npm install
   ```

3. Run the Development Server:

   ```bash
   npm run dev
   ```


## Branching Guidelines

### Deployment Branch

- **Branch Name**: `deployment`
- **Purpose**: The production branch represents the latest stable release of the application. It should always reflect the current state of the deployed production environment.
- **Usage**: Merge development branch into this branch once they have been thoroughly tested and approved for deployment.

### Development/Testing Branch

- **Branch Name**: `development`
- **Purpose**: The development branch is used for ongoing development work. It represents the latest state of development and may contain incomplete features or work in progress. Also the testing of the newly added features will also take place here and once tested will be pushed to deployment.
- **Usage**: Developers should create feature branches from this branch for implementing new features or fixing bugs and also testing the added features. Regularly merge changes from feature and branches back into this branch to keep it up to date.

### Feature-Specific Branches

- **Branch Naming**: `feature/{feature-name}`
- **Purpose**: Feature-specific branches are used for implementing individual features or addressing specific issues. They isolate development work for each feature, allowing for easier collaboration and tracking of changes.
- **Usage**: Create a new feature branch from the development branch for each new feature or issue. Once development is complete and the feature has been tested, raise a pull request from the feature branch to the development branch.

### Bug-Specific Branches

- **Branch Naming**: `bug/{bug-brief}`
- **Purpose**: Bug-specific branches are used for isolating and fixing individual bugs identified during development or testing.
- **Usage**:Create a new bug-specific branch from the development or testing branch for each bug. Once the bug fix is implemented and tested, praise a pull request from the bug branch back to the appropriate development or testing branch.

Sure, here's a pull request (PR) workflow for developers to ensure they add proper information in their PR description and tag them properly:

## Pull Request Workflow

### 1. Create a New Branch

Before starting work on a new feature or bug fix, create a new branch from the `development` branch. Use a descriptive branch name that reflects the purpose of your changes.

```bash
git checkout -b feature/{feature-name} development
```

### 2. Implement Changes

Make your changes in the new branch, following the project's coding standards and guidelines. Commit your changes frequently with clear and descriptive commit messages.

```bash
git add .
git commit -m "Brief description of changes"
```

### 3. Push Changes and Open Pull Request

Once your changes are ready for review, push your branch to the remote repository and open a pull request on GitHub.

```bash
git push origin feature/{feature-name}
```

In the pull request description, provide the following information:

- **Description**: A detailed description of the changes introduced by the pull request.
- **Changes Made**: List the specific changes made or features added in bullet points.
- **Files Changes**: List all the files that were changed in this pull request.
- **Testing**: Describe any testing you performed to ensure the changes work as expected.
- **Related Issues**: If applicable, reference any related GitHub issues or JIRA tickets.
- **Screenshots**: Include screenshots or GIFs if the changes are visual.

### 4. Reviewer Approval

Wait for approval from at least one reviewer before merging the pull request. Reviewers should thoroughly review the code, provide feedback, and approve the changes once satisfied.

### 5. Merge Pull Request

Once the pull request is approved and all checks pass, let the reviewer merge the changes into the `development` branch. Use the "Squash and Merge" option if multiple commits are present.

### 6. Cleanup

After merging, delete the feature branch both locally and remotely to keep the repository clean.

```bash
git checkout development
git branch -d feature/{feature-name}
git push origin --delete feature/{feature-name}
```

## Steps to Build and Deploy

Once the testing is done in the development/testing branch the changes will be pushed to the deployment branch which will build and deploy the changes in the production server directly.

## Environment Variables

Document any environment variables used in the project, including their purpose and how to configure them.


## Things to Keep in Mind

Include any additional considerations, best practices, or tips for developers working on the project.






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
