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

    .description {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            width: 464px;
            text-align: center;
        }
    }


.images{
    display: flex;
    align-items: center;
}
}
</style>
<template>
    <div class="main-footer grid grid-cols-5">
        <div class="col-span-2 description">
            <span>هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم</span>
        </div>
        <div class="col-span-1">
            <h1>دسترسی سریع</h1>
            <ul>
                <li>درباره ما</li>
                <li>بلاگ</li>
                <li>تماس با ما</li>
                <li>خدمات پس از فروش</li>
            </ul>
        </div>
        <div class="col-span-1">
            <h1>راهنمای سایت</h1>
            <ul>
                <li>قوانین و مقررات</li>
                <li>دریافت مشاوره</li>
                <li>انتقادات و پیشنهادات</li>
            </ul>
        </div>
        <div class="col-span-1">
            <h1>شبکه های اجتماعی</h1>
            <ul>
                <li>تلگرام</li>
                <li>اینستاگرام</li>
                <li>لینکدین</li>
            </ul>
        </div>
    </div>
    <div class="copy-right  grid grid-cols-4">
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
</template>
<script setup lang="ts"></script>