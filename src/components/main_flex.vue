<template>
<div>
    <div id="header-wrapper" class="header-slider">
		<header class="clearfix">
			<div class="logo">
			<img src="../img/diya.png" height="200" width="200">
			</div>
			<div class="container">
				<div class="row">
					<div class="span12">
						<div id="main-flexslider" class="flexslider">
							<ul class="slides">
								<li>
									<p class="home-slide-content">
										<strong>Hindi</strong><font style="position:fixed top:-50px" size="40">जुनून</font>
									</p>
								</li>
								<li>
									<p class="home-slide-content">
										<font style="position:fixed top:-50px" size="40"> ভালবাসা </font><strong>Bengali</strong>
									</p>
								</li>
								<li>
									<p class="home-slide-content">
									<strong>Marathi</strong> <font style="position:fixed top:-50px" size="40">दृढनिश्चय</font>
									</p>
								</li>
								<li>
									<p class="home-slide-content">
									<font style="position:fixed top:-50px" size="40">ಶುದ್ಧತೆ</font><strong>Kannada</strong>
									</p>
								</li>
								<li>
									<p class="home-slide-content">
									<strong>Punjabi</strong> <font style="position:fixed top:-50px" size="40">ਸ਼ੁੱਧ</font>
									</p>
								</li>
								<li>
									<p class="home-slide-content">
									<font style="position:fixed top:-50px" size="40">సహనం</font> <strong>Urdu</strong>
									</p>
								</li>
							</ul>
						</div>
						<!-- end slider -->
					</div>
				</div>
			</div>
		</header>
	</div>
<!--<h3>{{msg}}</h3>-->
</div>
</template>
<script>
export default {
  name: "mflex",
  data: function() {
    return {
      msg: "Hello bando"
    };
  }
};
</script>
<style>
#header-wrapper.header-slider{
    background-image: url("../img/bg/bg-1.jpg")
}
i.icon-angle-up.icon-2x{
    background-image: url(../img/up1.png)
}
.flex-direction-nav .flex-next{
    background-image: url(../img/dwn.png)
}
</style> 