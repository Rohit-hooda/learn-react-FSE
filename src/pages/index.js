// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Profile from './components/profile'
import Profile from './qcomps/profile_mistake'
import MyProfile from './qcomps/firstcomp';
import Bio from './qcomps/bios'
import PackingList from './qcomps/props_item'
import Todo from './qcomps/todos'

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        <MyProfile />
        <Bio />
        <Todo />
    </div>
  )
}
