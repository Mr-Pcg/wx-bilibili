// pages/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoInfo: null,
    // 其他推荐视频
    othersList:[],
    // 获取评论
    commentData:[]
  },


  // 获取对应视频
  getVideoDetail(id){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id=' + id,
      success: (res)=>{
        if (res.data.code === 0) {
          that.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
      },
    });
  },
  // 获取其他推荐视频
  getOthersList(){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/otherList',
      success:(res) => {
        if (res.data.code === 0) {
          that.setData({
            othersList:res.data.data.otherList
          })
        }
      }
    })
  },
  // 获取评论
  getCommentList(videoId){
    const that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/commentList?id='+videoId,
      success(res){
        if(res.data.code === 0) {
          that.setData({
            commentData: res.data.data.commentData
          });
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 点击首页视频时，跳转到详情页面的时候，会携带对应视频的id，参数options包含传递的参数
    // 获取对应视频id
    this.getVideoDetail(options.id);
    // 获取其他推荐视频
    this.getOthersList();
    // 获取评论
    this.getCommentList(options.id);

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