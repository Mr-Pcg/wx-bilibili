Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放首页导航数据
    navList:[],
    // 当前点击的导航内容，默认是首页
    currentIndexNav: 0,
    // 存放轮播图数据
    swiperList:[],
    // 存档视频列表数据
    videosList:[]

  },


  // 当前点击的导航
  activeNav(e){
    let that = this;
    that.setData({
      currentIndexNav: e.target.dataset.index
    })
  },

  // 获取首页导航数据的函数
  getNavList(){
    let that = this;
    // 微信小程序内置发送请求的方法
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      success: (res)=>{
        if (res.data.code === 0) {
          // setData是修改data里面的数据
          that.setData({
            navList: res.data.data.navList
          })
        }
      },
    });
  },
  
  // 获取轮播图数据
  getSwiperList(){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success: (res)=>{
        if (res.data.code === 0) {
          // setData是修改data里面的数据
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      },
    })
  },

  // 获取视频列表数据
  getVideoList(){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      success: (res)=>{
        if (res.data.code === 0) {
          // setData是修改data里面的数据
          that.setData({
            videosList: res.data.data.videosList
          })
        }
      },
    })

  },


  /**
   * 生命周期函数--监听页面加载（页面挂载阶段，一般一进入页面就需要完成的事情，比如一进入页面就需要发送的请求）
   */
  onLoad: function (options) {
    // 1.获取首页导航
    this.getNavList();
    // 2.获取轮播图
    this.getSwiperList();
    // 3.获取视频列表
    this.getVideoList();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})