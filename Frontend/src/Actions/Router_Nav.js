import React,{ useContext } from "react"
import Navigation from '../Component/Navigation.js'
import Footer from '../Component/Footer'

import UserContext from '../Function/UserContext'



import PageHome from '../Home/PageHome'
import PageGochart from '../Gochart/PageGochart'
import PageIntroduce from '../Introduce/PageIntroduce'
import PageNew from '../New/PageNew'
import PageLibrary from '../Library/PageLibrary'
import PageProfile from '../Component/PageProfile.js'
import DieuKhoan from '../Footer/DieuKhoan'
import LienHe from '../Footer/LienHe'

import Chen from './Chen'

import Player from '../Home/Player'
import './RouterPage.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




export default function RouterPage() {
  return (
    <Router>
      <div>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Intro_duce />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/gochart">
            <Gochart />
          </Route>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/dieukhoan'>
            <Dieu_Khoan />
          </Route>
          <Route path='/lienhe'>
            <Lien_He />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}
function Intro_duce() {
  return (
    <div>
      <PageIntroduce></PageIntroduce>
    </div>
  );
}

function Home() {
  const { userData } = useContext(UserContext);
  return (
    <div className='nen'>
      {userData.user ? (
        <PageHome></PageHome>
    ) : (
      <>
        <PageIntroduce></PageIntroduce>
      </>
    )}
    </div>
  )
}

function Gochart() {
  const { userData } = useContext(UserContext);
  return (
    <div className='nen'>
      {userData.user ? (
        <PageGochart></PageGochart>
    ) : (
      <>
        <PageIntroduce></PageIntroduce>
      </>
    )}
    </div>
  )
}

function New() {
  const { userData } = useContext(UserContext);
  return (
    <div className='nen'>
      {userData.user ? (
        <PageNew></PageNew>
    ) : (
      <>
        <PageIntroduce></PageIntroduce>
      </>
    )}
    </div>
  )
}
function Library() {
  const { userData } = useContext(UserContext);
  return (
    <div className='nen'>
      {userData.user ? (
        <PageLibrary></PageLibrary>
    ) : (
      <>
        <PageIntroduce></PageIntroduce>
      </>
    )}
    </div>
  )
}
function Profile() {
  const { userData } = useContext(UserContext);
  return (
    <div className='nen'>
      {userData.user ? (
        <PageProfile></PageProfile>
    ) : (
      <>
        <PageIntroduce></PageIntroduce>
      </>
    )}
    </div>
  )
}
function Dieu_Khoan() {
  return (
    <div className='nen'>
      <Chen></Chen>
      <DieuKhoan></DieuKhoan>
    </div>
  )
}
function Lien_He() {
  return (
    <div className='nen'>
      <Chen></Chen>
      <LienHe></LienHe>
    </div>
  )
}

