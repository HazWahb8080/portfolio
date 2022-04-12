import React from 'react';
import Data from '../../utils/Data';



function Slider() {
  return (
     <main className=" bg-[#EEF0F2] py-12  mt-12 mb-2 "
	  id="main" data-scroll>
      <section  className="tiles tiles--oneline " id="grid2">
				<div className="tiles__wrap">
					<div className="tiles__line" data-scroll data-scroll-speed="2" data-scroll-target="#grid2" data-scroll-direction="horizontal">
						<img className="tiles__line-img"
						 src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
						<img className="tiles__line-img" 
						src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
						<img className="tiles__line-img"
						 src="https://images.unsplash.com/photo-1528484701073-2b22dc76649e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" />
						<img className="tiles__line-img"
						 src="https://images.unsplash.com/photo-1566345984367-fa2ba5cedc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />


					</div>
				</div>
				<h2 className="tiles__title tiles__title--right tiles__title--full tiles__title--alt" data-scroll data-scroll-speed="2">Full-Stack</h2>
			</section>


      <section className="tiles tiles--oneline" id="grid3">
				<div className="tiles__wrap">
					<div className="tiles__line" data-scroll data-scroll-speed="-2" data-scroll-target="#grid3" data-scroll-direction="horizontal">
						<img className="tiles__line-img"
						 src="https://ucarecdn.com/9db1060a-91c8-43eb-acac-a22073eed8e9/apes2.webp"  />
						<img className="tiles__line-img" 
						src="https://images.unsplash.com/photo-1636969423277-8757e3f2cf99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
						<img className="tiles__line-img" 
						src="https://images.unsplash.com/photo-1615842928372-bf534d286c62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
						<img className="tiles__line-img"
						 src="https://images.unsplash.com/photo-1637431936926-cbc530e851ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
					</div>
				</div>
				<h2 className="tiles__title tiles__title--left tiles__title--full tiles__title--alt" data-scroll data-scroll-speed="2">Mini-Awwwards</h2>
			</section>


    <section className="tiles tiles--oneline" id="grid4">
				<div className="tiles__wrap">
					<div className="tiles__line" data-scroll data-scroll-speed="2" data-scroll-target="#grid4" data-scroll-direction="horizontal">
						<img className="tiles__line-img" 
						src="https://images.unsplash.com/photo-1641437639284-fe3b18b7a1a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80/"/>
						<img className="tiles__line-img"
						 src="https://images.unsplash.com/photo-1610216165491-d746db827214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
						<img className="tiles__line-img"
						 src="https://images.unsplash.com/photo-1626358228177-abe1b30e1283?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
						<img className="tiles__line-img"
						 src="https://images.unsplash.com/photo-1636969423277-8757e3f2cf99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
					</div>
				</div>
				<h2 className="tiles__title tiles__title--right tiles__title--full tiles__title--alt" data-scroll data-scroll-speed="2">Experimentals</h2>
			</section>
            </main>
  )
}

export default Slider;