 
import Section from '../section/section';
import img1 from '../../../img/slider/1.jpg';

const p = () => {
    const s1= {
        "title":"page 1",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora laborum ad velit possimus, corrupti vero.",
        "img": img1,
        "imgalt": "img"
    }
    return (  
        <>
 
        <Section  content={s1} className="section--light"/>
        <Section  content={s1}/>
        <Section content={s1} className="section--light"/>
        <Section content={s1}/>
        <Section content={s1} className="section--light"/>
            </>
    );
}
 
export default p;