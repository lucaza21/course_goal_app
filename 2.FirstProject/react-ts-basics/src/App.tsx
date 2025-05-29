
import Header from './components/Header'

import { useState } from 'react'
import goalsImg from './assets/goals.jpg'
import CourseGoalList from './components/CourseGoalList'

export type CourseGoal = {
    title: string;
    description: string;
    id: number
}

function App() {

    const [goals, setGoals] = useState<CourseGoal[]>([])

    const handleAddGoal = () => {
        console.log('added')
        setGoals(prevValue => {
          const newGoal: CourseGoal = {
            id: Math.random(),
            title: "Learn Ts",
            description: "Learn it in Depth"
          }
          return [...prevValue, newGoal]
        })
    }
  return (
    <>
      <Header image={{src: goalsImg, alt:"A list of goals"}}>
       <h1> Your Course Goal </h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals}/>
      
      
    </>
  )
}

export default App
