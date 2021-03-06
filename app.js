const util = require('./utils/util');
const api = require('./config/api');
const user = require('./service/user');


App({
  onLaunch() {
    let _this = this;
    
    //获取用户的登录信息
    user.checkLogin().then(res => {
      _this.globalData.userInfo = wx.getStorageSync('userInfo');
      _this.globalData.token = wx.getStorageSync('token');
    }).catch(() => {

    });
  },
  globalData: {
    apiUrl: api.rootUrl,
    userInfo: {
      nickname: 'Hi, 游客',
      username: '点击去登录',
      avatar: ''
    },
    token: '',
  }
});