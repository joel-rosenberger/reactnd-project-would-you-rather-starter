# Would You Rather Project

## Description
This is an implementation of the Udacity Would You Rather starter, which includes the following features:
* Login by selecting a user from the dropdown.
* Choose the Home nav option to view all questions.
    * Choose a tab:
        * Answered: questions that this user has answered.
        * Unanswered: questions that this used has not answered.        
    * View statistics by clicking an answered question.
    * Answer an unanswered question by clicking on it, choosing an answer, and saving the form.
* Choose the New nav option to create a new question.
    * Enter the questions and two possible answers, then submit the form.
* Choose the Leaderboard nav option to display the scores for each user.
* Click logout to quit the application or login as a different user.

## Installing and Running
This app requires node.js.

1. Clone this repository.
2. Navigate to the repo directory.
3. Execute the following from the command line:
    ```bash
    npm install
    npm start
    ```

## Architecture

This is a React/Redux application, organized into the following folder structure:
* actions: Redux action creators.
* components: React components.  App.js is the starting point.
* middleware: Redux middleware setup, including thunk plus a logger (from the lesson materials.)
* reducers: Redux reducers.
* utils: JSON data and API provided by the starter project.

## Acknowledgements
The playful avatar files were sourced from https://randomuser.me

The solution for redirecting after a form submission was based on the discussion at https://gist.github.com/elitan/5e4cab413dc201e0598ee05287ee4338

The theme uses the following Bootstrap libraries.  Note that the dynamic features of Bootstrap are not used.  All interactivity was hand coded using React/Redux.

The architecture is based on the examples provided in the lesson materials from Udacity's React Nanodegree program.

https://getbootstrap.com/docs/3.4/css/

https://getbootstrap.com/docs/3.4/components/

## Contributing

This repository is a student project, so pull requests are not likely to be accepted. For details about the original Udacity starter project, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
