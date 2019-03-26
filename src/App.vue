<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <nav class="navbar navbar-expand-md bg-white">
      <div class="container">
        <button
          class="navbar-toggler py-6 px-5"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon d-flex justify-content-center align-items-center">
            <i class="fas fa-bars"></i>
          </span>
        </button>
        <!-- 調整大小圖 -->
        <a class="navbar-brand d-none py-6 d-md-inline-block" href="#">
          <img src="./assets/images/logo-all-dark.svg" height="40" alt="甜點電商" class>
        </a>
        <a class="navbar-brand d-md-none py-6" href="#">
          <img
            src="./assets/images/logotype-sm-dark.svg"
            width="114"
            height="33"
            alt="甜點電商"
            class="d-inline-block"
          >
        </a>
        <!-- cart -->
        <a class="navbar-brand order-md-1 p-5 py-md-6 pl-md-6 pr-md-0" href="#">
          <span class="d-block" style="padding:5px 0;">
            <i class="fas fa-shopping-cart"></i>
          </span>
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link py-6 px-5" href="#">
                <span class="d-block" style="padding:8px 0;">首頁</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link py-6 px-5" href="#">
                <span class="d-block" style="padding:8px 0;">甜點</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link py-6 px-5" href="#">
                <span class="d-block" style="padding:8px 0;">登入</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>

    <!-- footer -->
    <section class="bg-primary py-5">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-5">
            <div
              class="d-flex justify-content-center justify-content-md-start align-items-center mb-5 mb-md-0"
            >
              <img src="./assets/images/logo-light.svg" width="40" height="40" alt>
              <span class="h4 text-white mx-5 mb-0">訂閱你我的甜蜜郵件</span>
            </div>
          </div>
          <div class="col-md-5">
            <div class="form-sqare d-flex justify-content-center align-items-center">
              <label class="form-square-icon h4 mb-0 text-primary" for="subdescript">
                <i class="fas fa-envelope"></i>
              </label>
              <input class="form-sqare__input w-100" id="subdescript" type="text">
              <button class="btn btn-accent p-4 text-primary">
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="bg-primary-lighter py-5">
      <div class="container">
        <div class="row justify-content-center">
          <!-- 這層才有 h-100 -->
          <div class="col-md-5 d-flex flex-column justify-content-between">
            <img
              class="d-block my-md-0 my-4"
              width="171"
              height="26"
              src="./assets/images/logotype-sm-dark.svg"
              alt
            >
            <ul class="list-unstyled mt-4">
              <li>07-123-45678</li>
              <li>
                <a href="mailto:sweetaste@email.com">sweetaste@email.com</a>
              </li>
              <li>800 高雄市新興區幸福路 520 號</li>
            </ul>
          </div>
          <div class="col-md-5">
            <div class="text-right d-none d-md-block">
              <img width="60" src="./assets/images/sm-今天是個吃甜點的好日子.svg" alt="今天是個吃甜點的好日子">
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-10 d-md-flex align-items-baseline">
            <ul class="list-unstyled d-flex my-1 mb-md-0">
              <li>
                <a href="#">
                  <img
                    class="footer_img d-block"
                    src="./assets/images/ic-line@.svg"
                    width="32"
                    height="32"
                    alt="line"
                  >
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    class="d-block"
                    src="./assets/images/ic-facebook.svg"
                    width="32"
                    height="32"
                    alt="facebook"
                  >
                </a>
              </li>
            </ul>
            <span class="ml-auto">© 2018 Sweetaste* All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  // created() {
  //   console.log(process.env.VUE_APP_API);
  // }
};
</script>
<style lang="scss">
@import "./assets/all.scss";
</style>

