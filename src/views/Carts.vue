<template>
  <div class="carts">
    <div class="container px-0 px-md-3">
      <div class="row mb-md-4">
        <div class="col-md-8">
          <div class="row flex-column">
            <h1 class="text-center h4 mb-5 py-3 bg-primary-lighter">您的購物車</h1>
            <div
              class="carts__inner row flex-column flex-md-row mx-5 mx-md-0 justify-content-md-between mb-4"
            >
              <div class="d-flex align-items-end align-items-md-center mb-2 flex-md-grow-1">
                <div
                  class="carts__img flex-grow-1 flex-md-grow-0 mr-3"
                  style="background-image: url(https://bit.ly/2zBDAxX);"
                ></div>
                <div
                  class="d-flex flex-column flex-md-row flex-md-grow-1 justify-content-md-around"
                >
                  <div class="carts__info mb-2 mr-md-5">
                    <div class="carts__info__title h5 mb-0">焦糖馬卡龍</div>
                    <div class="carts__info__price">NT$ 450</div>
                  </div>
                  <div class="carts__number">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="btn btn-primary btn-brand-light">+</div>
                      </div>
                      <!-- 用 number整個就是悲劇 -->
                      <input
                        type="text"
                        class="carts__control form-control"
                        aria-label="數量"
                        value="2"
                      >

                      <div class="input-group-prepend">
                        <div class="btn btn-primary btn-brand-light">-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carts__price align-items-center d-flex flex-md-row">
                <div class="carts__totalPrice ml-auto text-primary h5 mb-0">NT$ 900</div>
                <a href="#" class="carts__del d-none d-md-block ml-md-5">
                  <i class="far fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <!-- carts__inner -->
            <div
              class="carts__inner row flex-column flex-md-row mx-5 mx-md-0 justify-content-md-between mb-4"
            >
              <div class="d-flex align-items-end align-items-md-center mb-2 flex-md-grow-1">
                <div
                  class="carts__img flex-grow-1 flex-md-grow-0 mr-3"
                  style="background-image: url(https://bit.ly/2zBDAxX);"
                ></div>
                <div
                  class="d-flex flex-column flex-md-row flex-md-grow-1 justify-content-md-around"
                >
                  <div class="carts__info mb-2 mr-md-5">
                    <div class="carts__info__title h5 mb-0">焦糖馬卡龍</div>
                    <div class="carts__info__price">NT$ 450</div>
                  </div>
                  <div class="carts__number">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="btn btn-primary btn-brand-light">+</div>
                      </div>
                      <!-- 用 number整個就是悲劇 -->
                      <input
                        type="text"
                        class="carts__control form-control"
                        aria-label="數量"
                        value="2"
                      >

                      <div class="input-group-prepend">
                        <div class="btn btn-primary btn-brand-light">-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carts__price align-items-center d-flex flex-md-row">
                <div class="carts__totalPrice ml-auto text-primary h5 mb-0">NT$ 900</div>
                <a href="#" class="carts__del d-none d-md-block ml-md-5">
                  <i class="far fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <!-- carts__inner -->
            <div
              class="carts__inner row flex-column flex-md-row mx-5 mx-md-0 justify-content-md-between mb-4"
            >
              <div class="d-flex align-items-end align-items-md-center mb-2 flex-md-grow-1">
                <div
                  class="carts__img flex-grow-1 flex-md-grow-0 mr-3"
                  style="background-image: url(https://bit.ly/2zBDAxX);"
                ></div>
                <div
                  class="d-flex flex-column flex-md-row flex-md-grow-1 justify-content-md-around"
                >
                  <div class="carts__info mb-2 mr-md-5">
                    <div class="carts__info__title h5 mb-0">焦糖馬卡龍</div>
                    <div class="carts__info__price">NT$ 450</div>
                  </div>
                  <div class="carts__number">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="btn btn-primary btn-brand-light">+</div>
                      </div>
                      <!-- 用 number整個就是悲劇 -->
                      <input
                        type="text"
                        class="carts__control form-control"
                        aria-label="數量"
                        value="2"
                      >

                      <div class="input-group-prepend">
                        <div class="btn btn-primary btn-brand-light">-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carts__price align-items-center d-flex flex-md-row">
                <div class="carts__totalPrice ml-auto text-primary h5 mb-0">NT$ 900</div>
                <a href="#" class="carts__del d-none d-md-block ml-md-5">
                  <i class="far fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <!-- carts__inner -->
          </div>
          <!--col-md-8 > row end -->
        </div>
        <div class="col-md-4">
          <div class="bg-md-primary text-primary-md-lighter text-primary p-3">
            <h4
              class="bg-primary-lighter bg-md-primary pb-md-3 pt-md-0 py-3 text-center board-bottom-md-lighter"
            >訂單摘要</h4>
            <p class="d-flex mb-0">
              <span>小計</span>
              <span class="ml-auto">NT$ 2,700</span>
            </p>
            <p class="d-flex mb-3">
              運費
              <span class="ml-auto">NT$ 300</span>
            </p>
            <p class="d-flex mb-0">
              總計
              <span class="ml-auto">NT$ 3,300</span>
            </p>
          </div>
          <div class="btn btn-lg btn-accent btn-block text-md-primary">結帳</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // name: "home",
  components: {
    // HelloWorld
  }
};
</script>
