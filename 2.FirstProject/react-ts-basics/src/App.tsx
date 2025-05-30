
import Header from './components/Header'

import { useState } from 'react'
import goalsImg from './assets/goals.jpg'
import CourseGoalList from './components/CourseGoalList'
import NewGoal from './components/NewGoal'

export type CourseGoal = {
    title: string;
    description: string;
    id: number
}

function App() {

    const [goals, setGoals] = useState<CourseGoal[]>([])

    const handleAddGoal = (goal: string, summary: string) => {
        console.log('added')
        setGoals(prevValue => {
          const newGoal: CourseGoal = {
            id: Math.random(),
            title: goal,
            description: summary
          }
          return [...prevValue, newGoal]
        })
    }

    const handleDeleteGoal = (id: number) => {
      setGoals(prevGoals => prevGoals.filter( (goal) => goal.id != id))
    }
  return (
    <>
      <Header image={{src: goalsImg, alt:"A list of goals"}}>
       <h1> Your Course Goal </h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      
    </>
  )
}

export default App
