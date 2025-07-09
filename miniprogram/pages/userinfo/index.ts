Page({
  data: {
    userInfo: {
      avatarUrl: 'https://picsum.photos/80/80?random=1',
      nickName: '微信昵称'
    },
    filterType: 'all',
    dreamList: [
      {
        id: '1',
        text: '神秘森林的奇遇',
        desc: '在一片神秘的森林里，我遇到了一只会说话的兔子，它带我穿过了一个彩虹色的隧道...',
        image_url: 'https://picsum.photos/seed/201/350/200',
        timestamp: '2024-03-20 10:30',
        is_public: true
      },
      {
        id: '2',
        text: '独自飞翔在云端',
        desc: '我在云端自由翱翔，穿过层层白云，看到了远处的彩虹，感觉无比的自由...',
        image_url: 'https://picsum.photos/seed/202/350/210',
        timestamp: '2024-03-19 22:15',
        is_public: false
      },
      {
        id: '3',
        text: '深海探险',
        desc: '潜入深海，与五彩斑斓的鱼群共舞，发现了沉没的宝藏...',
        image_url: 'https://picsum.photos/seed/203/350/190',
        timestamp: '2024-03-18 08:00',
        is_public: true
      }
    ]
  },
  onFilterTag(e: WechatMiniprogram.BaseEvent) {
    const type = e.currentTarget.dataset.type;
    this.setData({ filterType: type });
  },
  get filteredDreams() {
    const { dreamList, filterType } = this.data;
    if (filterType === 'all') return dreamList;
    if (filterType === 'public') return dreamList.filter((d: any) => d.is_public);
    if (filterType === 'private') return dreamList.filter((d: any) => !d.is_public);
    return dreamList;
  },
  onEditDream(e: WechatMiniprogram.BaseEvent) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({ title: '编辑功能待实现', icon: 'none' });
  }
}); 