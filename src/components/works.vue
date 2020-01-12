<template>
<div>
<section id="works" class="section">
		<div class="container clearfix">
			<h4>Our Works</h4>
			<!-- portfolio filter -->
			<div class="row">
				<div id="filters" class="span12">
					<ul class="clearfix">
						<li>
							<a href="#" data-filter="*" class="active">
								<h5>Explore</h5>
							</a>
						</li>
						<!--<li>
							<a href="#" data-filter=".web">
								<h5>English</h5>
							</a>
						</li>
						<li>
							<a href="#" data-filter=".print">
								<h5>Punjabi</h5>
							</a>
						</li>
						<li>
							<a href="#" data-filter=".design">
								<h5>Hindi</h5>
							</a>
						</li>
						<li>
							<a href="#" data-filter=".photography">
								<h5>Marathi</h5>
							</a>
						</li>-->
					</ul>
				</div>
				<!-- END PORTFOLIO FILTERING -->
			</div>
			<div class="row">
				<div class="span12">
                    <div id="portfolio-wrap" >
                        <!--<div id="works" >-->
                            <div  v-for="wor in works" :wor="wor" :key="wor.title">
                                <div class="portfolio-item grid " :class="wor.cate">
                                    <div class="portfolio">
                                        <a :href="wor.ref" data-pretty="prettyPhoto[gallery1]" class="portfolio-image">
                                <img :src="wor.imgsrc" alt="">
                                <div class="portfolio-overlay">
                                    <div class="thumb-info">
                                        <h5>{{wor.title}}</h5>
                                    <!-- <i class="icon-plus icon-2x"></i>-->
                                    </div>
                                </div>
                                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
						<!-- end portfolio item -->
					<!--</div>-->
				</div>
			</div>
		</div>
	</section>
</div>
</template>
<script>
import Vue from 'vue'
new Vue({
    el:"#wo",
    data: {
        
        works:[
            {cate:'design web',ref:"https://i1.wp.com/acidstag.com/wp-content/uploads/2019/02/two-lanes-acid-stag.jpg?fit=1080%2C675&ssl=1",imgsrc:"../img/works/10.png",title:'Two Lanes'},
            {cate:'photography web',ref:"https://www.thissongslaps.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-10-at-5.17.13-PM.png",imgsrc:"../img/works/9.png",title:'Back down'},
            {cate:'photography print',ref:"https://images-na.ssl-images-amazon.com/images/I/41M4Kj--e7L.jpg",imgsrc:"../img/works/1.png",title:'A Untold story'},
            {cate:'print design web',ref:"https://www.researchgate.net/profile/David_Roberts24/publication/316655684/figure/fig7/AS:667935735545879@1536259697791/Blood-diamonds-and-domestic-violence-Note-Figure-4-helps-in-the-discussion-of.png",imgsrc:"../img/works/2.png",title:'Blood Diamond'},
            {cate:'print design',ref:"https://cdn.tinybuddha.com/wp-content/uploads/2019/04/Breakup.png",imgsrc:"../img/works/3.png",title:'Kinha Nafaa Kamaya??'},
            {cate:'photography web',ref:"https://www.juggernaut.in/book_covers/9781476743707.jpg",imgsrc:"../img/works/4.png",title:'A sin such as this'},
            {cate:'photography web',ref:"https://st3.depositphotos.com/7293094/19410/v/600/depositphotos_194109854-stock-video-cute-little-girl-sitting-beach.jpg",imgsrc:"../img/works/5.png",title:'Sea the Sea'},
            {cate:'photography web',ref:"https://www.meghangenge.com/wp-content/uploads/2017/11/Header-Jpg-web-768x511.jpeg",imgsrc:"../img/works/6.png",title:'Navnay- A new way'},
            {cate:'photography web',ref:"https://i.pinimg.com/originals/a2/ed/94/a2ed94b4d0f0cdfdbca368ef972f4bac.png",imgsrc:"../img/works/7.png",title:'Qismat'},
            {cate:'photography',ref:"https://image.isu.pub/190913180716-617d1dbd1531e1923bc7214734db39fe/jpg/page_1_thumb_large.jpg",imgsrc:"../img/works/8.png",title:'Skin Ego'}
           
        ]},
    
});
// Vue.component('comp', {
//   template: '<p class="foo bar">Hi</p>'
// })
export default {
name:'Work',
data: function(){
return {
    msg: 'Work Works',
    works:[
            {cate:'design web',ref:"https://i1.wp.com/acidstag.com/wp-content/uploads/2019/02/two-lanes-acid-stag.jpg?fit=1080%2C675&ssl=1",imgsrc:"../img/works/10.png",title:'Two Lanes'},
            {cate:'photography web',ref:"https://www.thissongslaps.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-10-at-5.17.13-PM.png",imgsrc:"../img/works/9.png",title:'Back down'},
            {cate:'photography print',ref:"https://images-na.ssl-images-amazon.com/images/I/41M4Kj--e7L.jpg",imgsrc:"../img/works/1.png",title:'A Untold story'},
            {cate:'print design web',ref:"https://www.researchgate.net/profile/David_Roberts24/publication/316655684/figure/fig7/AS:667935735545879@1536259697791/Blood-diamonds-and-domestic-violence-Note-Figure-4-helps-in-the-discussion-of.png",imgsrc:"../img/works/2.png",title:'Blood Diamond'},
            {cate:'print design',ref:"https://cdn.tinybuddha.com/wp-content/uploads/2019/04/Breakup.png",imgsrc:"../img/works/3.png",title:'Kinha Nafaa Kamaya??'},
            {cate:'photography web',ref:"https://www.juggernaut.in/book_covers/9781476743707.jpg",imgsrc:"../img/works/4.png",title:'A sin such as this'},
            {cate:'photography web',ref:"https://st3.depositphotos.com/7293094/19410/v/600/depositphotos_194109854-stock-video-cute-little-girl-sitting-beach.jpg",imgsrc:"../img/works/5.png",title:'Sea the Sea'},
            {cate:'photography web',ref:"https://www.meghangenge.com/wp-content/uploads/2017/11/Header-Jpg-web-768x511.jpeg",imgsrc:"../img/works/6.png",title:'Navnay- A new way'},
            {cate:'photography web',ref:"https://i.pinimg.com/originals/a2/ed/94/a2ed94b4d0f0cdfdbca368ef972f4bac.png",imgsrc:"../img/works/7.png",title:'Qismat'},
            {cate:'photography',ref:"https://image.isu.pub/190913180716-617d1dbd1531e1923bc7214734db39fe/jpg/page_1_thumb_large.jpg",imgsrc:"../img/works/8.png",title:'Skin Ego'}
         
        ]
    
}
},
}
</script>
<style>
#act{
    color:#3399ff
}
a.portfolio-image{
    width:100 px;
    height:100px;
}
</style> 