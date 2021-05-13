import React from 'react'
import './Slider.css'

export default function Slider(props) {

    const [imgStyle, setImgStyle] = React.useState({
        width: 70 + 'px',
        height: 70 + 'px'
    })

    function iconSmallSize() {
        setImgStyle({
            width: 65 + 'px',
            height: 65 + 'px'
        })
    }

    function iconNormalSize() {
        setImgStyle({
            width: 70 + 'px',
            height: 70 + 'px'
        })
        setTimeout(() => props.openModal(), 1500)
    }

    return (
        <div className='window'>
            <div className='arrow'></div>
            <ul className={props.classes.join(' ')} onAnimationStart={iconSmallSize} onAnimationEnd={iconNormalSize}>
                {props.icons.map((icon, index) => {
                    return (
                        <div className='item' key={index}>
                            <img style={imgStyle} alt={icon.title} src={icon.url}></img>
                        </div>
                    )
                })}
            </ul>
        </div >
    )
}