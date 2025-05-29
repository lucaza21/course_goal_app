import { type ReactNode } from "react";

type CourseGoalProps = {
    title: string; 
    id: number
    children: ReactNode;
    onDelete: (id :number) => void
}
function CourseGoal( {title, id, children, onDelete}: CourseGoalProps ) {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}

export default CourseGoal