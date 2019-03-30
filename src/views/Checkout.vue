<template>
  <div class="register">
    <div class="container my-md-7 px-0 px-md-3">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row no-gutters">
            <div class="col-md-8">
              <div class="login bg-primary">
                <div class="login__head">
                  <h1 class="text-primary-lighter py-6">會員登入</h1>

                  <div class="login__content p-5 pt-md-0">
                    <!-- uer -->
                    <div class="mb-3 form-sqare d-flex justify-content-center align-items-center">
                      <label class="form-sqare-icon h4 mb-0 text-primary" for="subdescript">
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
                      <label class="form-sqare-icon h4 mb-0 text-primary" for="subdescript">
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
                <button class="btn btn-lg btn-block btn-accent h4 mb-0 text-primary py-3">登入帳號</button>
              </div>
            </div>

            <div class="col-md-4">
              <div class="board-primary-lighter">
                <h4 class="bg-primary-lighter py-3 text-center text-primary-light">訂單摘要</h4>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>