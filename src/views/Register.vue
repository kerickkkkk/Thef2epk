<template>
  <div class="register">
    <div class="container my-md-7 px-0 px-md-3">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row no-gutters">
            <div class="col-md-6 minus-md-margin">
              <div class="login bg-primary">
                <div class="login__head">
                  <h1 class="text-primary-lighter text-center py-6">會員登入</h1>
                  <!-- social link -->
                  <div class="bg-primary-lighter d-block d-md-none p-5">
                    <div class="row no-gutters">
                      <div class="col-4">
                        <div class="btn btn-brand-light py-3 h-100">
                          <img
                            src="../assets/images/ic-facebook-logotype.svg"
                            class="img-fluid w-100"
                            alt
                          >
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="btn btn-brand-light py-3 h-100">
                          <img src="../assets/images/ic-google.svg" class="img-fluid w-100" alt>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="btn btn-brand-light py-3 h-100">
                          <img src="../assets/images/ic-yahoo.svg" class="img-fluid w-100" alt>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="login__content p-5 pt-md-0">
                    <!-- uer -->
                    <div class="mb-3 form-sqare d-flex justify-content-center align-items-center">
                      <label class="form-square-icon h4 mb-0 text-primary" for="subdescript">
                        <i class="fas fa-user"></i>
                      </label>
                      <input
                        class="form-sqare__input w-100"
                        id="subdescript"
                        type="text"
                        placeholder="電子信箱/手機號碼"
                      >
                    </div>
                    <!-- pwd -->
                    <div class="mb-3 form-sqare d-flex justify-content-center align-items-center">
                      <label class="form-square-icon h4 mb-0 text-primary" for="subdescript">
                        <i class="fas fa-key"></i>
                      </label>
                      <input
                        class="form-sqare__input w-100"
                        id="subdescript"
                        type="password"
                        placeholder="請輸入使用者密碼"
                      >
                    </div>

                    <!-- checkbox -->
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck1">
                      <label
                        class="custom-control-label text-primary-lighter"
                        for="customCheck1"
                      >記住我</label>
                    </div>
                  </div>
                </div>
                <div class="btn btn-lg btn-block btn-accent h4 mb-0 text-primary py-3">登入帳號</div>
              </div>
            </div>
            <div class="col-md-6">
              <!-- social link -->
              <div class="bg-primary-lighter d-none d-md-block py-6 px-5">
                <h2 class="h4 mb-5 text-center">—— 連結社群帳號 ——</h2>
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <div class="btn btn-brand-light btn-lg py-3 d-block h-100">
                      <img
                        src="../assets/images/ic-facebook-logotype.svg"
                        width="108"
                        class="img-fluid"
                      >
                    </div>
                  </div>
                  <div class="col-md-12 mb-3">
                    <div class="btn btn-brand-light btn-lg py-3 d-block h-100">
                      <img src="../assets/images/ic-google.svg" class="img-fluid" width="108" alt>
                    </div>
                  </div>

                  <div class="col-md-12 mb-3">
                    <div class="btn btn-brand-light btn-lg py-3 d-block h-100">
                      <img src="../assets/images/ic-yahoo.svg" class="img-fluid" width="108" alt>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
