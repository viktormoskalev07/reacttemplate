import Swiper from '../../slider/Swiper';
import Section from '../section/section';
import img1 from '../../../img/slider/1.jpg';

const Mainppage = () => {
    const s1= {
        "title":"Some titile",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora laborum ad velit possimus, corrupti vero.",
        "img": img1,
        "imgalt": "img"
    }; 
    return (  
        <>
        <section className="hero">
            <div className="container">
                       <h1 className="hero__title"> react</h1>
                        </div>
                        <Swiper className="hero-slide"/>
           
        </section>
 
        <Section  content={s1} className="section--light"/>
        <Section  content={s1}/>
        <Section content={s1} className="section--light"/>
        <Section content={s1}/>
        <Section content={s1} className="section--light"/>
            </>
    );
}
 
export default Mainppage;