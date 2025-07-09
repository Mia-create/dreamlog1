// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    dreamList: [
      // 示例数据，后续可替换为后端接口数据
      {
        id: '1',
        user_nick: '匿名',
        text: '梦中的黑狗，眼神温柔，阳光洒满。',
        image_url: 'https://picsum.photos/seed/101/180/120',
        timestamp: '2024-03-20 10:30',
        is_public: true
      },
      {
        id: '2',
        user_nick: '匿名',
        text: '城市天际线，高楼林立，车水马龙。',
        image_url: 'https://picsum.photos/seed/102/180/130',
        timestamp: '2024-03-19 22:15',
        is_public: true
      },
      {
        id: '3',
        user_nick: '匿名',
        text: '手捧蒲公英，微风轻拂，自由飞翔。',
        image_url: 'https://picsum.photos/seed/103/180/110',
        timestamp: '2024-03-18 08:00',
        is_public: true
      }
    ],
    loadingText: '正在加载更多...'
  },
  methods: {
    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs',
      })
    },
    onChooseAvatar(e: any) {
      const { avatarUrl } = e.detail
      const { nickName } = this.data.userInfo
      this.setData({
        "userInfo.avatarUrl": avatarUrl,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      })
    },
    onInputChange(e: any) {
      const nickName = e.detail.value
      const { avatarUrl } = this.data.userInfo
      this.setData({
        "userInfo.nickName": nickName,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      })
    },
    getUserProfile() {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
    onAddDream() {
      wx.navigateTo({
        url: '/pages/record/index'
      });
    }
  },
})
