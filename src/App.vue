<template>
<div>
<div class="navbar-wrapper">
		<div class="navbar navbar-inverse navbar-fixed-top ">
			<div class="navbar-inner">
				<div class="container">
					<!-- Responsive navbar -->
					<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
				</a>
					<img class="brand" src="./assets/diya.png" height="30" width="30">
         
					<h1 class="brand"><a href="index.html">Navjyoti</a></h1>
					<!-- navigation -->
					<nav class="pull-right nav-collapse collapse">
						<ul id="menu-main" class="nav">
							<li><a title="team" href="#about">About</a></li>
							<li><a title="services" href="#services">Services</a></li>
							<li><a title="works" href="#works">Works</a></li>
							<li><a title="blog" href="#blog">Books</a></li>
							<li><a title="contact" href="#contact">Contact</a></li>
							<!--<li><a href="page.html">Page</a></li>-->
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
  <!--compo-->
  <main-flex></main-flex>
  <org></org>
  <team></team>
  <serv></serv>
  <works></works>
  <bg3></bg3>
  <blog></blog>
  <cont></cont>
  <!--compo-->
  <footer>
		<div class="container">
			<div class="row">
				<div class="span6 offset3">
					<ul class="social-networks">
						<li><a href="#"><i class="icon-circled icon-bgdark icon-instagram icon-2x"></i></a></li>
						<li><a href="#"><i class="icon-circled icon-bgdark icon-twitter icon-2x"></i></a></li>
						<li><a href="#"><i class="icon-circled icon-bgdark icon-dribbble icon-2x"></i></a></li>
						<li><a href="#"><i class="icon-circled icon-bgdark icon-pinterest icon-2x"></i></a></li>
					</ul>
					<div class="copyright">
						&copy; All rights reserved.
						<div class="credits">
						
							Designed by Pps and one<!-- <a href="https://bootstrapmade.com/">Pps and one</a>-->
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- ./container -->
	</footer>
	<a href="#" class="scrollup"><i class="icon-angle-up icon-square icon-bgdark icon-2x"></i></a>
  </div>
  
 </template>

  <script>
//import HelloWorld from './components/HelloWorld.vue'
//import Cmp1 from './components/cmp1.vue'
// export default {
//   name: 'app',
//   components: {'fcmp':Cmp1 }
// }

//import Cmp1 from './components/main_flex.vue'
// import Mcmp from './components/mcmp.vue'
// export default {
//   name: 'app',
//   components: {'main-cmp':Mcmp }
// }
import Org from './components/org.vue'
import mflex from './components/main_flex.vue'
import Team from './components/team.vue'
import Serv from './components/services.vue'
import Work from './components/works.vue'
import Bg3 from './components/bg3.vue'
import Blog from './components/blog.vue'
import Cont from './components/contact.vue'
export default {
  name: 'app',
  components: {'main-flex': mflex,
                'org': Org,
                'team': Team,
                'serv':Serv,
                'works':Work,
                'bg3':Bg3,
                'blog':Blog,
                'cont':Cont,
                }
}
</script> 
<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
