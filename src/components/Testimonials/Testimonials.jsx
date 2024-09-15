import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
            <img src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww" alt="clients" />
            <h4>John Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
            <img src="https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fHww" alt="clients" />
            <h4>John Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
            <img src="https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D" alt="clients" />
            <h4>John Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials