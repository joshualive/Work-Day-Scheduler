# Work Day Scheduler

This homework assignment required building a work day scheduler from 9-5, with colour coded blocks indicating past, present, or future. Requirements included making use of moment.js, as well as jQuery to build the application. After clicking save, events are saved to localStorage and appended back to their textareas on page reload.

![Work Day Scheduler preview.](wds.png)

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```