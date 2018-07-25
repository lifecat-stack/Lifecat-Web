<template>
    <Row type="flex" justify="center" align="middle" class="login" @keydown.enter.native="submitLogin">
        <Col :xs="{span:22}" style="width: 368px;">
            <Row class="header">
                <img src="../images/xboot.png" width="220px"/>
                <div class="description">X-Boot 是很不错的Web前后端分离架构脚手架</div>
            </Row>

            <Alert type="error" show-icon v-if="error">{{errorMsg}}</Alert>

            <Row class="login-form">
                <Tabs v-model="tabName">
                    <TabPane label="账户密码登录" name="username" icon="person">
                         <Form ref="usernameLoginForm" :model="form" :rules="rules" class="form">
                            <FormItem prop="username">
                                <Input v-model="form.username" size="large" clearable placeholder="请输入用户名">
                                    <span slot="prepend">
                                        <Icon :size="16" type="person"></Icon>
                                    </span>
                                </Input>
                            </FormItem>
                            <FormItem prop="password">
                                <Input type="password" v-model="form.password" size="large" clearable  placeholder="请输入密码">
                                    <span slot="prepend">
                                        <Icon :size="14" type="locked"></Icon>
                                    </span>
                                </Input>
                            </FormItem>
                        </Form>
                    </TabPane>
                    <TabPane label="手机号登录" name="mobile" icon="iphone">
                        <Form ref="mobileLoginForm" :model="form" :rules="rules" class="form">
                            <FormItem prop="mobile">
                                <Input v-model="form.mobile" size="large" clearable placeholder="请输入手机号">
                                    <span slot="prepend">
                                        <Icon :size="18" type="iphone"></Icon>
                                    </span>
                                </Input>
                            </FormItem>
                            <FormItem prop="verifyCode" :error="errorCode">
                                <Row type="flex" justify="space-between" class="code-row-bg">
                                    <Input v-model="form.verifyCode" size="large" clearable  placeholder="请输入短信验证码" :maxlength="maxLength" class="input-verify">
                                        <span slot="prepend">
                                            <Icon :size="14" type="ios-email-outline"></Icon>
                                        </span>
                                    </Input>
                                    <Button size="large" @click="sendVerify" v-if="!sended" class="send-verify">获取验证码</Button>
                                    <Button size="large" disabled v-if="sended" class="count-verify">{{countButton}}</Button>
                                </Row>
                            </FormItem>
                        </Form>
                    </TabPane>
                </Tabs>

                <Row type="flex" justify="space-between" class="code-row-bg">
                    <Checkbox v-model="saveLogin" size="large">自动登录</Checkbox>
                    <a class="forget-pass" @click="showAccount">忘记密码</a>
                </Row>
                <Row>
                    <Button class="login-btn" type="primary" size="large" :loading="loading" @click="submitLogin" long>
                        <span v-if="!loading">登录</span>
                        <span v-else>登录中...</span>
                    </Button>
                </Row>
                <Row type="flex" justify="space-between" class="code-row-bg other-login">
                    <span class="other-way">
                        其它方式登录
                        <icon class="other-icon" name="brands/qq"></icon>
                        <icon class="other-icon lower" scale="1.2" name="brands/weixin"></icon>
                        <icon class="other-icon lower" scale="1.2" name="brands/weibo"></icon>
                    </span>
                    <router-link to="/regist"><a class="forget-pass">注册账户</a></router-link>
                </Row>
            </Row>

            <Row class="foot">
                <Row type="flex" justify="space-around" class="code-row-bg help">
                    <a class="item">帮助</a>
                    <a class="item">隐私</a>
                    <a class="item">条款</a>
                </Row>
                <Row type="flex" justify="center" class="code-row-bg copyright">
                    Copyright © 2018 <a href="http://exrick.cn" target="_blank" style="margin:0 5px;">Exrick</a> Presents
                </Row>
            </Row>
        </Col>
    </Row>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      errorMsg: "",
      tabName: "username",
      saveLogin: true,
      loading: false,
      sended: false,
      count: 60,
      countButton: "60 s",
      maxLength: 4,
      errorCode: "",
      form: {
        username: "",
        password: "",
        mobile: "",
        verifyCode: ""
      }
    }
  }
}
</script>

<style lang="less">
@import "./login.less";
</style>
