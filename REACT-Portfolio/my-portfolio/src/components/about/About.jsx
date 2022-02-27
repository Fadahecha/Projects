import React from 'react'
import "./about.css"
import GigaGiga from "../../images/GigaGiga.jpg"
import sello from "../../images/sello.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src={GigaGiga} alt="" className="about-image" />
            </div>
        </div>
        <div className="about-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-sub">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam assumenda perferendis veritatis explicabo minus quaerat veniam voluptatem, distinctio dicta ducimus.
          </p>
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit molestias quasi ad laboriosam veritatis quos dolor optio eum blanditiis modi, asperiores eveniet, voluptatem nihil doloribus labore velit minima porro saepe? Excepturi animi tempora sequi expedita amet. Consequuntur modi odit accusantium natus voluptatum deserunt rerum ex necessitatibus molestiae tempore, non veniam. Ducimus tempore accusantium animi mollitia dolorem! Quod nam perspiciatis optio, dolores a sed nemo voluptatibus architecto delectus minus deleniti enim officiis. Similique odit quas, amet alias omnis itaque ipsum, laboriosam minima aliquam, magnam repudiandae cum iure repellendus harum illum voluptatibus cumque dicta ipsam hic architecto quibusdam voluptas enim sequi.
          </p>
          <div className="about-tech">
            <img src={sello} alt="" className="about-tech-img" />
            <div className="about-tech-text">
              <h4 className="about-tech-title">Techniques et Certificats</h4>
              <p className="about-tech-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem recusandae ex facilis, rerum, quisquam nesciunt sit dolor deserunt iusto eius saepe ipsum modi, quae nostrum at reiciendis odio fuga! Eaque.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About