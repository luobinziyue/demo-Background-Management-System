<template>
    <div class="login">
        <el-form :model="user" status-icon :rules="rules" ref="ruleForm" class="ruleForm">
            <el-form-item>
                <div class="circle">
                    <img src="../assets/admin.jpg" alt="">
                </div>
            </el-form-item>
            <el-form-item prop="username" >
                <el-input type="text" v-model="user.username" placeholder="姓名" prefix-icon="iconfont icon-personal"></el-input>
            </el-form-item>
            <el-form-item prop="password" >
                <el-input type="password" v-model="user.password" placeholder="密码" prefix-icon="iconfont icon-mima"></el-input>
            </el-form-item>            
            <el-form-item >
                <el-button class="loginBtn" type="primary" @click="loginSubmit('ruleForm')">提交</el-button>                
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {checkUser} from '@/api/index';
    import {setToken} from '@/api/cookies';

    export default {
        data() {
            var checkName = (rule,value,callback)=>{
                if(!value) {
                    callback(new Error('用户名不能为空'))
                }
                else{
                    callback();
                }
            };
            var validatePass = (rule,value,callback)=>{
                if(value==="") {
                    callback(new Error('请输入密码'));
                }
                else{
                    callback();
                }
            };
            return {
                user:{
                    username:'',
                    password:''
                },
                rules:{
                    username:[
                        {validator:checkName,trigger:'blur'} //trigger:触发条件
                    ],
                    password:[
                        {validator:validatePass,trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            loginSubmit(form) {
                this.$refs[form].validate((valid)=>{
                    //只有校验成功才执行函数
                    if(valid){
                        checkUser(this.user).then(res=>{
                            if(res.meta.status == 200) {
                                //当登录成功，将token设置到cookie中
                                setToken(res.data.token);
                                this.$router.push('home')
                            }
                            else{
                                this.$message({
                                    type:'error',
                                    message:'错了哦，用户名或密码错误'
                                })

                            }
                        });
                    }
                    else{
                        console.log('error submit!!');
                        return false;
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;

  .ruleForm {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding:15px 40px  ;
    margin: 200px auto;
    background: white;
  }

  .circle {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
      img {
          display: block;
          width: 150%;
      }
    }

   .loginBtn {
      width: 100%;
    }
}
</style>
