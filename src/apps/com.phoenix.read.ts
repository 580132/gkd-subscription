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
          key: 1,
          name: '②无集数文本时上滑',
          fastQuery: true,
          matchRoot: true,
          actionCd: 6000,
          activityIds:
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          matches: '[name="android.view.View"][visibleToUser=true]',
          excludeMatches: '[text~="第.+集"]',
          action: 'swipe',
          swipeArg: {
            start: { x: 'screenWidth/2', y: 'screenHeight*0.7' },
            end: { x: 'screenWidth/2', y: 'screenHeight*0.3' },
            duration: 200,
          },
        },
      ],
    },
  ],
});
