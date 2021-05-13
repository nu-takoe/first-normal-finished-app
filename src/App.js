import Loader from './components/Loader/Loader';
import Slider from './components/Slider/Slider';
import Modal from './Modal/Modal';
import React from 'react';
import './App.css';

function App() {
  const [images, setImages] = React.useState([])
  const [posts, setPosts] = React.useState([])
  const [users, setUsers] = React.useState([])
  const [classes, setClasses] = React.useState(['slider'])
  const [loader, setLoader] = React.useState(true)
  const [target, setTarget] = React.useState()
  const [isOpen, setIsOpen] = React.useState(false)
  const [update, setUpdate] = React.useState(true)

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
      .then(response => response.json())
      .then(json => {
        let arr = []
        for (let i = 0; i < 20; i++) {
          let rand = Math.floor(Math.random() * 5);
          let item = json[rand]
          arr.push(item)
        }
        return arr
      })
      .then(arr => {
        setImages(arr)
        setLoader(false)
        setTarget(arr[17])
      })
      .catch(e => console.log(e))

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(responce => responce.json())
      .then(json => setPosts(json))

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(json => setUsers(json))

  }, [update])

  function start() {
    setClasses(classes.concat(['start']))
  }

  function openModal() {
    setIsOpen(true)
  }

  function reset() {
    setClasses(['slider'])
    setUpdate(!update)
    setIsOpen(false)
  }

  return (
    <>
      <div className="App center">
        <div className="app-body center">
          <div className="block-text center">
            <h1>Нажми на кнопку</h1>
            <p>и будет чё-то</p>
          </div>
          <div className='screen center'>
            {loader ? <Loader /> : <Slider openModal={openModal} icons={images} classes={classes} />}
          </div>
          <button className="start-btn" onClick={start}>Начать!</button>
        </div>
      </div>
      {isOpen && <Modal posts={posts} users={users} target={target} reset={reset} />}
    </>
  );
}

export default App;
