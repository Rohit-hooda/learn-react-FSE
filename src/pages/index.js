// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
<<<<<<< Updated upstream
import Profile from './components/profile'
=======
// import Profile from './components/profile'
import Profile from './qcomps/profile_mistake'
import MyProfile from './qcomps/firstcomp';
import Bio from './qcomps/bios'
import PackingList from './qcomps/props_item'
import Todo from './qcomps/todos'
// import Gallery from './components/whyState'
// import Gallery from './components/state'
import Gallery from './qcomps/state'
import Form from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
import RequestTracker from './qcomps/shoppingCart'
>>>>>>> Stashed changes

export default function Home() {
  return (
    <div className={styles.main}>
<<<<<<< Updated upstream
        <Profile />
=======
    {/* <Profile /> */}
      {/* <MyComp /> */}
      {/* <TodoList /> */}
      {/* <Gallery /> */}
      {/* <PackingList /> */}
      {/* <List /> */}
      {/* <RecipeList /> */}
      {/* <Gallery /> */}
      {/* <Form /> */}
      {/* <FeedbackForm /> */}
      <RequestTracker />
>>>>>>> Stashed changes
    </div>
  )
}
