import React from 'react';
import Data from '../../utils/Data';



function Slider() {
  return (
     <main className="pb-12 mb-2 z-50 rounded-t-[150px]"
	  id="main" data-scroll data-scroll-speed="0" >
      <section data-scroll  className="tiles tiles--oneline " id="grid2">
				<div className="tiles__wrap ">
					<div className="tiles__line " data-scroll data-scroll-speed="2" data-scroll-target="#grid2" data-scroll-direction="horizontal">
						<img className="tiles__line-img"
						 src="https://ucarecdn.com/cec0070b-55fc-4a45-b20d-f8f6809f2f26/tw.jpg" />
						<img className="tiles__line-img" 
						src="https://ucarecdn.com/32674b8f-1187-4ec4-ab49-23cb991eee4f/bts.png" />
						<img className="tiles__line-img"
						 src="https://ucarecdn.com/3ee16fd1-fcba-4f77-bcdb-64406e04fa02/sb.jpg" />
						<img className="tiles__line-img"
						 src="https://ucarecdn.com/9e6383fd-218c-496d-b6e4-30a7e962efb7/ts.png" />


					</div>
				</div>
				<h2 className="tiles__title tiles__title--right tiles__title--full tiles__title--alt text-white " data-scroll data-scroll-speed="2">Full-Stack</h2>
			</section>


      <section className="tiles tiles--oneline" id="grid3">
				<div className="tiles__wrap">
					<div className="tiles__line" data-scroll data-scroll-speed="-2" data-scroll-target="#grid3" data-scroll-direction="horizontal">
						<img className="tiles__line-img"
						 src="https://ucarecdn.com/f3d6beec-959d-4802-83c4-032415e13b04/localhost3000home20April202.gif"  />
						<img className="tiles__line-img" 
						src="https://ucarecdn.com/fbb9840b-01f8-4452-8e7e-906f5fa2f9d4/CohortBasedCourses1.png" />
						<img className="tiles__line-img" 
						src="https://ucarecdn.com/32c8b9d5-9bb4-4d39-b2b2-b185436d92fa/pika20220418T20_14_04110Z.png" />
						<img className="tiles__line-img"
						 src="https://ucarecdn.com/76c0a55e-5dfb-442c-848d-c310302574e7/content.gif" />
					</div>
				</div>
				<h2 className="tiles__title tiles__title--left tiles__title--full tiles__title--alt text-white" data-scroll data-scroll-speed="2">Mini-Awwwards</h2>
			</section>


    <section className="tiles tiles--oneline" id="grid4">
				<div className="tiles__wrap">
					<div className="tiles__line" data-scroll data-scroll-speed="2" data-scroll-target="#grid4" data-scroll-direction="horizontal">
						<img className="tiles__line-img" 
						src="https://ucarecdn.com/1374f740-be62-4e8e-addd-b0dbbcddc579/localhost3000coursebb18Apri.gif"/>
						<img className="tiles__line-img"
						 src="https://ucarecdn.com/4d552622-55b1-49c0-8208-eebe3b189e85/reactjs.jpg" />
						<img className="tiles__line-img"
						 src="https://ucarecdn.com/05982a4c-f458-4843-959b-32d8590e9427/nextjs.png" />
						<img className="tiles__line-img"
						 src="https://ucarecdn.com/ec5898b3-db07-4580-ae9b-6bf98675f8c3/git.jpg" />
					</div>
				</div>
				<h2 className="tiles__title tiles__title--right tiles__title--full tiles__title--alt text-white" data-scroll data-scroll-speed="2">Experimentals</h2>
			</section>
            </main>
  )
}

export default Slider;