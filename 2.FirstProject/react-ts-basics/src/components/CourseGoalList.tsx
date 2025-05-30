import type { ReactNode } from 'react';
import { type CourseGoal as CGoal } from '../App';
import CourseGoal from "./CourseGoal";
import InfoBox from './InfoBox';
type CourseGoalListProps = {
    goals: CGoal[]
    onDeleteGoal: (id :number) => void
}

function CourseGoalList( {goals, onDeleteGoal}: CourseGoalListProps ) {

  if (goals.length === 0){
    return (
        <InfoBox mode="hint">
            You have no Course goals yer, Start adding some!
        </InfoBox>
    )
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
        <InfoBox mode="warning">
            You have no Course goals yet, Start adding some!
        </InfoBox>
    )
  }
  return (
    <>
    {warningBox}
    <ul>
        {goals.map( (goal) => (
            <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}  
    </ul>
    </>
       
  )
}

export default CourseGoalList