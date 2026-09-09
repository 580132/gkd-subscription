import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'GKD Subscription',
  version: 0,
  author: '580132',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/580132/gkd-subscription/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
