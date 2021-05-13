import React from 'react'
import './Modal.css'
import Loader from '../components/Loader/Loader.js'
import Result from '../components/Result/Result.js'

export default function Modal({ posts, users, target, reset }) {

    const [loader, setLoader] = React.useState(true)
    const [background, setBackground] = React.useState()
    const [user, setUser] = React.useState()
    const [post, setPost] = React.useState()

    React.useEffect(() => {
        let randomUser = Math.floor(Math.random() * 10);
        let randomPost = Math.floor(Math.random() * 10);
        let userObj = users[randomUser];
        setUser(userObj.name);
        setBackground(target.url);
        let arr;
        switch (target.id) {
            case 1:
                arr = posts.slice(0, 9)
                setPost(arr[randomPost].body)
                setLoader(false)
                break;

            case 2:
                arr = posts.slice(10, 19)
                setPost(arr[randomPost].body)
                setLoader(false)
                break;

            case 3:
                arr = posts.slice(20, 29)
                setPost(arr[randomPost].body)
                setLoader(false)
                break;

            case 4:
                arr = posts.slice(30, 39)
                setPost(arr[randomPost].body)
                setLoader(false)
                break;

            case 5:
                arr = posts.slice(40, 49)
                setPost(arr[randomPost].body)
                setLoader(false)
                break;

            default:
                alert('Ошибка')
        }
    }, [target.id, target.url, users, posts])

    return (
        <div className='modal center'>
            <div className='modal-body center'>
                <button className='close-modal' onClick={reset}>X</button>
                {loader ? <Loader /> : <Result background={background} post={post} user={user} />}
            </div>
        </div>
    )
}