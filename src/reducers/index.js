import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const reminders = (state = [], action) => {
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]
      return reminders;
    case DELETE_REMINDER:
      reminders = [...state, reminder(action)]
      return reminders;
    default:
      return state;
  }
}

export default reminders;
