<template>
  <div id="home">

<!--    ======================================= SECTION 1 of (Landing Page) =========================================-->

    <br/><br/><br/><br/><br/><br/>
    <section id ="section1">
      <h5 class="animate__animated animate__heartBeat" style="font-size:5vw;">Your Brand,</h5>
      <h1 class="bigFont animate__animated animate__heartBeat" style="font-size:13vw;">Digitalized.</h1>
    </section>
    <br/><br/>
    <hr class="solid animate__animated animate__bounceInRight">
    <br/><br/>

<!--    ================================================ SECTION 2 ====================================================-->

    <section class="section2">
      <h1 class="offerCSS animate__animated animate__bounceInLeft" style="font-size:4vw;"> My Services </h1>
      <br/><br/>
      <h1 class="offerCSS"> <b-icon icon="chevron-double-down" animation="cylon-vertical"> </b-icon></h1>
    </section>

    <br/><br/>
<!--    <hr class="solid">-->
    <br/><br/>
<!--    ================================================ SECTION 3 ====================================================-->

    <section class="section3">
      <h1 class="offerCSS" style="font-size:4vw;" data-aos="zoom-in-up" data-aos-duration="1000"> App & Web Development </h1>
      <br/>
      <h6 class="description" data-aos="zoom-in-up" data-aos-duration="2000">
        I design & build modernised mobile, website & desktop
        applications together with the backend systems that keep them running.
        In more techy terms, I am a Full Stack Developer with an eye for design!
     </h6>
      <br/>
      <h6 class="description"><b-button class="buttonPos" pill variant="outline-danger">Enquire</b-button></h6>
      <img src="./assets/Apps.png" width="700" height="280" class="center" data-aos="fade-up" data-aos-duration="2300">
    </section>

    <hr class="solid">
    <br/><br/>

<!--    ================================================ SECTION 3-1 ====================================================-->

    <section class="section3-1">
      <h1 class="offerCSS" style="font-size:4vw;" data-aos="fade-up-left" data-aos-duration="1000"> End-to-End Production</h1>
      <br/>
      <h6 class="description" data-aos="fade-up-right" data-aos-duration="2000">
        Using my problem solving skills, I can nail down any problem and take it through the software development journey,
        from sketching ideas right through releasing and maintaining the product.
      </h6>
      <br/>
      <h6 class="description"><b-button class="buttonPos" pill variant="outline-danger">Enquire</b-button></h6>
      <img src="./assets/Process.png" width="700" height="280" class="center" data-aos="fade-up" data-aos-duration="2300">
    </section>

    <hr class="solid">
    <br/><br/>

<!--    ================================================ SECTION 4 ====================================================-->

    <section class="section4">
      <h1 data-aos="fade-right" data-aos-duration="2000" class="offerCSS" style="font-size:4vw;">Tech Stack </h1>
      <h6 data-aos="fade-left" data-aos-duration="2000" class="description"> As you will be able to see from
        my tech stack below, I’m very passionate about keeping up to date with the most relevant
        technologies and using these effectively to build world class apps!</h6>
      <img src="./assets/Stack.png" width="700" height="280" class="center" data-aos="fade-up">
    </section>

    <hr class="solid">
    <br/><br/>

<!--    ================================================ SECTION 5 ====================================================-->

    <section class="section5">
      <h1 class="offerCSS" style="font-size:4vw;"> My Work (Coming Soon)</h1>
    </section>
    <br/><br/>
    <hr class="solid">
    <br/><br/>

<!--    ================================================ SECTION 5 ====================================================-->

    <section class="section6">
      <h1 data-aos="fade-left" data-aos-duration="2000" class="offerCSS" style="font-size:4vw;"> Who is this Sean guy?</h1>
      <br/>
      <img src="./assets/sean.png" data-aos="fade-right" data-aos-duration="2000" width="250" height="250" class="seanPhoto">
      <br/>
      <h6 class="description"> Sean Madondo</h6>
      <h6 class="description"> Full Stack Software Engineer | UI/UX Designer | Music Director (hobby) </h6>
      <br/>
      <h6 class="description">
        <i class="fa fa-github-square fa-4x" onclick="window.open('https://github.com/seanmadondo', '_blank')"></i>
        <i class="fa fa-linkedin-square fa-4x" onclick="window.open('https://www.linkedin.com/in/sean-madondo-b1399213a/', '_blank')"></i>
        <i class="fa fa-facebook-square fa-4x" onclick="window.open('https://www.facebook.com/sean.madondo.7', '_blank')"></i>
      </h6>
      <br/>
      <h6 class="description"><i class="fa fa-envelope-o"></i> seanmadondo@gmail.com</h6>
<!--      <h6 class="description"><i class="fa fa-phone-square"></i> +64 22 31 86 935 </h6>-->
    </section>

    <br/><br/>
    <hr class="solid">
    <br/><br/>
    <h6 class="description"> <i class="fa fa-copyright"> SeanDigital Inc 2020</i> </h6>


  </div>
</template>

<script>
export default {
name: "Home"
}
</script>

<style scoped>


h1.bigFont {
  color: #ff1616;
  text-align: center;
}

h1.offerCSS {
  color: black;
  text-align: center;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
}

h5 {
  padding-left: 20%;
  font-family: "Sofia";
}

hr.solid {
  border-top: 3px solid #ff1616;
  width:10%
}

hr.long {
  border-top: 1px solid #ff1616;
  /*width:10%*/
}

h6.description {
  color: #ff1616;
  text-align: center;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 8vm;
  /*min-font-size: 2vw;*/
  /*!*max-font-size: 4vw;*!*/
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
}

.seanPhoto {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: auto;
}

.animate__animated.animate__heartBeat {
  --animate-duration: 4s;
}

</style>
