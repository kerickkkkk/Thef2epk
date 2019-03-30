<template>
  <div class="cart">
    <div class="container px-0 px-md-3">
      <div class="row">
        <div class="col-md-8">
          <h1 class="text-center h4 mb-5 py-3 bg-primary-lighter">您的購物車</h1>
          <ul class="list-unstyled">
            <li class="mb-4 px-5 px-md-0">
              <div class="row">
                <div class="col-md-10">
                  <div
                    class="d-flex justify-content-between align-items-center board-bottom-lighter"
                  >
                    <div
                      class="cart__img bg-cover"
                      style="height: 110px; width: 110px; background-image: url(https://bit.ly/2zBDAxX);"
                    ></div>
                    <div class="row">
                      <div class="col-md-6 d-flex justify-content-center">
                        <div class="cart__info">
                          <div>
                            <div class="cart__info__title">焦糖馬卡龍</div>
                            <div class="cart__info__price">NT$ 450</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 d-flex justify-content-center">
                        <div class="cart__number">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="btn btn-primary btn-brand-light">+</div>
                            </div>
                            <!-- 用 number整個就是悲劇 -->
                            <input type="text" class="form-control" aria-label="數量" value="2">

                            <div class="input-group-prepend">
                              <div class="btn btn-primary btn-brand-light">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- col-md-10end -->
                <div class="col-md-2">
                  <div
                    class="d-flex justify-content-between align-items-center h-100 board-bottom-mdup-lighter"
                  >
                    <div class="cart__totalPrice ml-auto text-primary mr-md-5">NT$ 900</div>
                    <div class="cart__del d-none d-md-block">
                      <i class="far fa-trash-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-4 px-5 px-md-0">
              <div class="row">
                <div class="col-md-10">
                  <div
                    class="d-flex justify-content-between align-items-center board-bottom-lighter"
                  >
                    <div
                      class="cart__img bg-cover"
                      style="height: 110px; width: 110px; background-image: url(https://bit.ly/2zBDAxX);"
                    ></div>
                    <div class="row">
                      <div class="col-md-6 d-flex justify-content-center">
                        <div class="cart__info">
                          <div>
                            <div class="cart__info__title">焦糖馬卡龍</div>
                            <div class="cart__info__price">NT$ 450</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 d-flex justify-content-center">
                        <div class="cart__number">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="btn btn-primary btn-brand-light">+</div>
                            </div>
                            <!-- 用 number整個就是悲劇 -->
                            <input type="text" class="form-control" aria-label="數量" value="2">

                            <div class="input-group-prepend">
                              <div class="btn btn-primary btn-brand-light">-</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- col-md-10end -->
                <div class="col-md-2">
                  <div
                    class="d-flex justify-content-between align-items-center h-100 board-bottom-mdup-lighter"
                  >
                    <div class="cart__totalPrice ml-auto text-primary mr-md-5">NT$ 900</div>
                    <div class="cart__del d-none d-md-block">
                      <i class="far fa-trash-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
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
