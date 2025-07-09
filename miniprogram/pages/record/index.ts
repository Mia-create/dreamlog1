Page({
  data: {
    desc: '',
    inspireTags: ['森林', '追逐', '飞翔', '海底', '迷宫'],
    negativeTags: ['黑暗', '怪物', '恐怖'],
    selectedInspire: '',
    selectedNegative: '',
    imageUrl: '',
    isPublic: true
  },
  onDescInput(e: WechatMiniprogram.TextareaInput) {
    this.setData({ desc: e.detail.value });
  },
  onInspireTagTap(e: WechatMiniprogram.BaseEvent) {
    const tag = e.currentTarget.dataset.item;
    if (tag) {
      this.setData({ selectedInspire: tag, desc: this.data.desc + (this.data.desc ? ' ' : '') + tag });
    }
  },
  onNegativeTagTap(e: WechatMiniprogram.BaseEvent) {
    const tag = e.currentTarget.dataset.item;
    if (tag) {
      this.setData({ selectedNegative: tag });
    }
  },
  onGenerateImage() {
    // TODO: 调用AI图片生成接口，返回图片URL
    wx.showLoading({ title: '生成中...' });
    setTimeout(() => {
      wx.hideLoading();
      this.setData({ imageUrl: 'https://picsum.photos/seed/' + Math.floor(Math.random()*1000) + '/350/200' });
    }, 1500);
  },
  onPublicChange(e: WechatMiniprogram.SwitchChange) {
    this.setData({ isPublic: e.detail.value });
  },
  onSave() {
    // TODO: 保存梦境记录到后端
    wx.showToast({ title: '已发布', icon: 'success' });
    setTimeout(() => {
      wx.navigateBack();
    }, 1200);
  }
}); 