import './body-styles.css'
import image from '../img/3x4.jpg'

const Body = () => {
    return(
        <div className='container-body'>
            <div className = 'container-1'>
                
            <div className='box-1'>
                    <div>
                        <h3>Who am I?</h3>
                    </div>
                    <div className='image-kratos'>
                        <img src={image} className='img-thumbnail' alt='foto do kratos'/>
                    </div>
                </div>
                
                <div className='box-1'>
                    <div>
                        <h3>I am the god of war, but...</h3>
                    </div>
                    <div>
                        <p>Born in Sparta, I was a respected soldier and a Spartan General and regonized by the god of war or ghost of Sparta, how you want.<br/>I have been killed everyone I see, but now, I am looking for a love. <br/>I don't want more this life, killing everybody don't make me happy anymore.</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
export default Body