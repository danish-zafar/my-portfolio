import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: 'Modi alias "Sed ut perspicia voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur'
  
  },
  
  {
  
    avatar: AVTR2,
    name: "Tina Snow",
    review: 'Modi alias "Sed ut perspiciatis unde omnis iste natus error accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur'
  
  },
  
  {
  
    avatar: AVTR3,
    name: "Tina Snow",
    review: 'Modi alias "Sed ut perspiciatis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur'
  
  },
  
  {
  
    avatar: AVTR4,
    name: "Tina Snow",
    review: ' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur'
  
  },
  
  ]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>


      {
        data.map(({avatar, name, review}, index) => {
          return (

            <SwiperSlide key={index} className="testimonials">
           <div className="clients__avatar">
             <img src={avatar}/>
           </div>
           <h5 className="client__name">{name}</h5>
           <small className="client__review">{review}</small>
         </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials;
