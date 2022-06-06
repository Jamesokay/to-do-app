# To-Do Application

An application for keeping track of tasks (and becoming a better, happier, more organised, fulfilled and all round actualised person; ready to seize the day and be all that you can be; achieving goals and overcoming limitations; setting sail for thrilling new horizons both personal and professional etc).

You can check out the live GitHub Pages site [here](https://jamesokay.github.io/to-do-app/)

<img width="800" alt="Screen Shot 2022-06-06 at 3 47 35 pm" src="https://user-images.githubusercontent.com/78640728/172119783-e82156a7-0e09-459a-b456-f4c57484195a.png">
<br>
<img width="800" alt="Screen Shot 2022-06-06 at 3 54 28 pm" src="https://user-images.githubusercontent.com/78640728/172119853-77ff1e9d-7745-4e4d-95a8-e3e6d5306b56.png">


## Features

Upon signing in with a 4+ character name, the user is able to add tasks to their to-do list. Current tasks are brighter and marked with a yellow circle. Completed tasks are greyed out. Clicking on a task will advance it to the next stage: a current task will be marked as completed, a completed task will be cleared from the to-do list. This logic is explained via a brief set of instructions that appear in the sidebar when the user's to-do list is empty. 

The to-do list can be toggled via the buttons at the top of the side bar, allowing the user to view all tasks, current tasks, or completed tasks, with each category being sorted accordingly ('all' in the order they were added, 'current' in reverse order, such that the oldest appear first, and 'completed' in the order they were completed)

State is managed with Redux. Redux store is synced with local storage via the loadState() and saveState() functions defined in localStorage.js and used by store.js. Any changes to Redux state will be added to local storage by saveState(). Upon load, store.js will then check local storage for an existing state via loadState() and configure the store's preloadedState accordingly. This allows the Redux state (name, theme, to-dos) to persist across refreshes and visits, being cleared only when the user signs out.

The user can update their name and toggle the theme of the app via a settings modal.

App design is mobile responsive.

## Lessons

Building this app was, for me, mostly a refresher course in Redux. I have tended to use React's Context API for state management in previous projects but enjoyed the opportunity to use Redux this time around, finding it was easier to centralise state in a single source of truth.

A (painful but perhaps worthwhile) lesson I learned right at the end was in regards to GitHub Pages, more specifically that GitHub Pages is not compatible with React Router's 'BrowserRouter', as this will lead to a 404 error on page refresh. Hence the last minute change to 'HashRouter', which I would not typically use, but does the trick just fine in this instance.
