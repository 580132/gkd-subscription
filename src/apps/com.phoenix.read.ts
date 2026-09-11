import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '功能类-自动[上滑]继续看短剧',
      desc: '①读秒结束后[上滑] ②4.5秒[上滑]1次',
      rules: [
        {
          // ② 直播/视频广告：无集数节点时上滑（文字画在视频上，无障碍读不到）
          key: 1,
          name: '②无集数节点时上滑',
          fastQuery: true,
          actionCd: 6000,
          activityIds:
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          matches: '[vid="f1b"]',
          excludeMatches: '[vid="k6n"][text~="第.+集"]',
          action: 'swipe',
          swipeArg: {
            start: { x: 'screenWidth/2', y: 'screenHeight*0.7' },
            end: { x: 'screenWidth/2', y: 'screenHeight*0.3' },
            duration: 200,
          },
          snapshotUrls: ['https://i.gkd.li/i/32098613'],
        },
      ],
    },
  ],
});
