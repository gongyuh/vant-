<template>
    <div>
        <van-form @submit="onSubmit">

            <van-nav-bar title="登录"
                         left-arrow
                         class="page-nav-bar"
                         @click-left="onClickLeft" />
            <van-field v-model="user.username"
                       label="用户名"
                       placeholder="用户名"
                       :rules="userFormRule.name" />
            <van-field v-model="user.code"
                       label="验证码"
                       placeholder="验证码"
                       :rules="userFormRule.code">
                <template #button>
                    <van-button round
                                type="default"
                                size="small">发送验证码</van-button>
                </template>
            </van-field>
            <div style="margin: 16px;">
                <van-button block
                            type="info"
                            native-type="submit">提交</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: 'zhangsan',
                code: '123'
            },
            userFormRule: {
                name: [
                    {
                        require: true,
                        message: '输入框不为空'
                    },
                    {
                        pattern: /^1[3|5|7|8]\d{9}$/,
                        message: '手机格式错误'
                    }
                ],
                code: [
                    {
                        require: true,
                        message: '输入框不为空'
                    },
                    {
                        pattern: /^\d{4}$/,
                        message: '手机格式错误'
                    }
                ]
            }
        };
    },
    components: {},
    methods: {
        async onSubmit() {
            const result = await login(this.user);
        },
        onClickLeft() {
            Toast('返回');
        },
        onClickRight() {
            Toast('按钮');
        }
    }
};
</script>

<style scoped lang="less">
</style>
