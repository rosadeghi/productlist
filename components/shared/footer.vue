<style scoped lang="scss">
.main-footer {
    background-color: #fff;
    padding: 50px 150px;

    // align-items: center;
    .description {
        display: flex;
        align-items: center;

        span {
            font-size: 13px;
            font-weight: 500;
            color: #445A74;
        }
    }

    h1 {
        margin-bottom: 20px;
    }

    ul {
        line-height: 30px;
        text-align: right;

        li {
            color: #30445B;
            font-size: 13px;
            font-weight: 500px;
        }
    }
}

.copy-right {
    height: 149px;
    background-color: #F8F9FC;
    // display: flex;
    align-items: center;
    justify-content: center;

    .description {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            width: 464px;
            text-align: center;
        }
    }


    .images {
        display: flex;
        align-items: center;
    }
}
</style>
<template>

    <!-- Footer container -->
    <footer class="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
        <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. -->
        <div class="mx-6 py-10 text-center md:text-left main-footer">
            <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <!-- TW Elements section -->
                <div class="description">

                    <span>هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم</span>
                </div>
                <!-- Products section -->
                <div>
                    <h1>دسترسی سریع</h1>

                    <ul>
                        <li>درباره ما</li>
                        <li>بلاگ</li>
                        <li>تماس با ما</li>
                        <li>خدمات پس از فروش</li>
                    </ul>
                </div>
                <!-- Useful links section -->
                <div>
                    <h1>راهنمای سایت</h1>

                    <ul>
                        <li>قوانین و مقررات</li>
                        <li>دریافت مشاوره</li>
                        <li>انتقادات و پیشنهادات</li>
                    </ul>
                </div>
                <!-- Contact section -->
                <div>
                    <h1>شبکه های اجتماعی</h1>

                    <ul>
                        <li>تلگرام</li>
                        <li>اینستاگرام</li>
                        <li>لینکدین</li>
                    </ul>
                </div>
            </div>
        </div>

        <!--Copyright section-->
        <div class="bg-black/5 p-6 text-center copy-right md:d-flex">
            <div class="col-span-3 description">
                <p>
                    تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه کپی برداری پیگرد قانونی دارد.

                </p>
                <div>

                </div>
            </div>
            <div class="col-span-1 images">

                <img src="~/assets/img/img1.png" alt="">
                <img src="~/assets/img/img2.png" alt="">

            </div>
        </div>
    </footer>




</template>
<script setup lang="ts"></script>