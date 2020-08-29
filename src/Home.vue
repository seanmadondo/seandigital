<template>
  <div id="home">
    <br/><br/><br/><br/><br/><br/>
    <section id ="section1">
      <h5 class="animate__animated animate__heartBeat" style="font-size:5vw;">Your Brand,</h5>
      <h1 class="bigFont animate__animated animate__heartBeat" style="font-size:13vw;">Digitalized.</h1>
    </section>
    <br/><br/>
    <hr class="solid animate__animated animate__bounceInRight">
    <br/><br/>


    <section class="section2">
      <h1 class="offerCSS" style="font-size:4vw;"> What I offer </h1>
      <br/><br/>
      <h1 class="offerCSS"> <b-icon icon="chevron-double-down" animation="cylon-vertical"> </b-icon></h1>
    </section>

    <br/><br/>
    <hr class="solid">
    <br/><br/>

    <section class="section3" >
      <h1 class="offerCSS" style="font-size:4vw;" data-aos="fade-left" > App & Web Development </h1>
      <img src="./assets/AppDev.png" width="800" height="380" class="center" data-aos="fade-up" data-aos-duration="1800">
    </section>

    <br/><br/>


    <footer>

    </footer>

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

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: auto;
}

.animate__animated.animate__heartBeat {
  --animate-duration: 4s;
}

</style>
