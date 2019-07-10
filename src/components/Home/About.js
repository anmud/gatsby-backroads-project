import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'


const About = () => {
    return (
      <section className={styles.about}>
       <Title title="about" subtitle="us"/>
       <div className={styles.aboutCenter}>
         <article className={styles.aboutImg}>
           <div className={styles.imgContainer}>
             <img src={img} alt="about company"/>
           </div>
         </article>
         <article className={styles.aboutInfo}>
           <h4>explore the difference</h4>

             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec suscipit feugiat odio, sed consequat ligula. Ut cursus, quam eu tristique bibendum, enim eros accumsan nisl, eget posuere dui ante eu tellus. 
               Maecenas tincidunt lacus eget placerat cursus.  
             Nam et volutpat est. Duis convallis risus in efficitur scelerisque.
              </p>

             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec suscipit feugiat odio, sed consequat ligula. Ut cursus, quam eu tristique bibendum, enim eros accumsan nisl, eget posuere dui ante eu tellus. 
               Maecenas tincidunt lacus eget placerat cursus.  
             Nam et volutpat est. Duis convallis risus in efficitur scelerisque.
              </p>
             
             <button type="button" className="btn-primary">read more</button>
          
         </article>
       </div>
      </section>
    )
}

export default About;