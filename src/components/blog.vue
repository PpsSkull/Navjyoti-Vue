<template>
<div>
<section id="blog" class="section">
		<div class="container">
			<h4>Our recent releases</h4>
			<!-- Three columns -->
			<div class="row">
				<div class="span3">
					<div class="home-post">
						<div class="post-image">
							<img class="max-img" src="../img/blog/img1.jpg" alt="" />
						</div>
						<div class="post-meta">
							<i class="icon-file icon-2x"></i>
							<span class="date">Jan 05, 2020</span>
							<span class="tags"><a href="#">English</a> <a href="#">हिन्दी</a> <a href="#">ਪੰਜਾਬੀ </a></span>
						</div>
						<div class="entry-content">
							<h5><strong><a href="#">The Journey Untold</a></strong></h5>
							<p>
								A story about a girl to find her destiny &hellip;
							</p>
							<a href="#" class="more">Read more</a>
						</div>
					</div>
				</div>
				<div class="span3">
					<div class="home-post">
						<div class="post-image">
							<img class="max-img" src="../img/blog/img2.jpg" alt="" />
						</div>
						<div class="post-meta">
							<i class="icon-file icon-2x"></i>
							<span class="date">Jan 02, 2020</span>
							<span class="tags"><a href="#">English</a> <a href="#">ਪੰਜਾਬੀ </a> <a href="#">தமிழ்</a></span>
						</div>
						<div class="entry-content">
							<h5><strong><a href="#">The Power in you</a></strong></h5>
							<p>
								Explore the unrevealed powers that lie within you. &hellip;
							</p>
							<a href="#" class="more">Read more</a>
						</div>
					</div>
				</div>
				<div class="span3">
					<div class="home-post">
						<div class="post-image">
							<img class="max-img" src="../img/blog/img3.jpg" alt="" />
						</div>
						<div class="post-meta">
							<i class="icon-file icon-2x"></i>
							<span class="date">Dec 22, 2019    </span>
							<span class="tags"><a href="#">हिन्दी</a> <a href="#">ਪੰਜਾਬੀ </a>  <a href="#">मराठी </a>  <a href="#">English</a></span>
						</div>
						<div class="entry-content">
							<h5><strong><a href="#">Ye Lamha</a></strong></h5>
							<p>
								Taking in account the present moment. &hellip;
							</p>
							<a href="#" class="more">Read more</a>
						</div>
					</div>
				</div>
				<div class="span3">
					<div class="home-post">
						<div class="post-image">
							<img class="max-img" src="../img/blog/img4.jpg" alt="" />
						</div>
						<div class="post-meta">
							<i class="icon-file icon-2x"></i>
							<span class="date">Nov 27, 2019</span>
							<span class="tags"><a href="#">हिन्दी</a> <a href="#">ਪੰਜਾਬੀ </a> <a href="#">தமிழ்</a> <a href="#">मराठी </a></span>
						</div>
						<div class="entry-content">
							<h5><strong><a href="#">Maa</a></strong></h5>
							<p>
								A book that would change your life forever. &hellip;
							</p>
							<a href="#" class="more">Read more</a>
						</div>
					</div>
				</div>
			</div>
			<div class="blankdivider30"></div>
			<div class="aligncenter">
				<a href="#" class="btn btn-large btn-theme">More blog post</a>
			</div>
		</div>
	</section>
</div>
</template>
<script>
export default {
name:'Blog',
data: function(){
return {
msg: 'Recent books',
}
},
}
</script>
<style>
.post-meta{
    background-color: #00b3b3;
}
</style> 