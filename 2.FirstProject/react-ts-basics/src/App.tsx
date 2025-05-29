
import './App.css'
import CourseGoal from './components/CourseGoal'
import Header from './components/Header'

import goalsImg from './assets/goals.jpg'

function App() {

  return (
    <>
      <Header image={{src: goalsImg, alt:"A list of goals"}}>
       <h1> Your Course Goal </h1>
      </Header>
      <CourseGoal title="Learn React + TS">
       <p>Learn it from the ground</p>
      </CourseGoal>
    </>
  )
}

export default App
