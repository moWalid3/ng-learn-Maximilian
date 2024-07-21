import { CanDeactivateFn } from '@angular/router';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

export const canLeaveEditPageGuard: CanDeactivateFn<NewTaskComponent> = (component , currentRoute, currentState, nextState) => {
  if(component.submitted) {
    return true;
  }

  if(component.enteredTitle() || component.enteredSummary() || component.enteredDate()) {
    return confirm("are you sure you need to leave, you will lost data ?")
  }

  return true;
};
