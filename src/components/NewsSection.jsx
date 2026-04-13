import React from 'react';

// You will need to add 3 flood images to your src/images folder and import them here!
// For now, these are placeholders.
import news1 from '../assets/images/phone.png'; 
import news2 from '../assets/images/phone.png';
import news3 from '../assets/images/phone.png';

const newsData = [
  {
    id: 1,
    title: "Updates title here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ipsum augue. Quisque risus nisi, venenatis eget neque ut, elementum commodo tellus.",
    image: news1,
    link: "#"
  },
  {
    id: 2,
    title: "Updates title here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ipsum augue. Quisque risus nisi, venenatis eget neque ut, elementum commodo tellus.",
    image: news2,
    link: "#"
  },
  {
    id: 3,
    title: "Updates title here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ipsum augue. Quisque risus nisi, venenatis eget neque ut, elementum commodo tellus.",
    image: news3,
    link: "#"
  }
];

const NewsSection = () => {
  return (
    // The ID "news" here connects perfectly to your TopNav "News" link!
    <section id="news" className="w-full bg-[#dfeeff] py-24">
      {/* Container aligned perfectly with your Nav and Hero */}
      <div className="max-w-[1920px] w-full mx-auto px-6 md:px-8"
      style={{paddingTop:'150px',paddingBottom:'150px', paddingRight:'250px', paddingLeft:'250px'}}>
        
        {/* CSS Grid: 1 column mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          
          {newsData.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
              
            >
              {/* Image Container */}
              <div className="h-[240px] w-full overflow-hidden bg-gray-200 shrink-0 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow"
              style={{paddingLeft:'30px', paddingRight:'30px', paddingTop:'25px', paddingBottom:'25px'}}>
                <h3 className="text-[22px] font-bold text-black mb-3"
                >
                  {item.title}
                </h3>
                
                <p className="text-[16px] text-gray-500 leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                
                <a 
                  href={item.link} 
                  className="text-black font-bold text-[16px] flex items-center gap-2 hover:text-[#005ec6] transition-colors w-max"
                  style={{marginTop:'10px'}}
                >
                  Click here 
                  <span className="text-xl leading-none">&rarr;</span>
                </a>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default NewsSection;