import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ASOSO-s-blog-5bb8e6060a7e483b842d1dd25625a019',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'ASOSO’s blog',
  domain: 'asoso.secondlife.lol',
  author: 'cherry',

  // open graph metadata (optional)
  description: 'ASOSO’s blog - introducing K-pop artists',


  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'holyrich',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
  'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Fa058356b-02f8-4f0b-97e1-fba818708945%2FScreenshot_2024-05-10_at_10.16.56_PM-removebg-preview_(1).png?id=9e369d30-e030-465f-a1af-9367ededa2de&table=bot&width=200&userId=afe8b21d-3dee-42ec-b552-afcfc77ca55f&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '카테고리',
      pageId: 'ad336dcba2664456aa737c026881ec2d',
    },
    {
      title: '카테고리',
      pageId: 'ad336dcba2664456aa737c026881ec2d',
      menuPage: true,
    },
  ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: true,
});
