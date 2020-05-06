import { SnackbarOrigin, SocialMedia, Dict } from './types'

export const SNACKBAR_ANCHOR_ORIGIN: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'center',
}

export const SNACKBAR_MAX_NUM = 1

export const SNACKBAR_AUTO_HIDE_DURATION = 3000

export const DOMAIN = 'https://yanceyleo.com'

export const ALI_OSS_URL = 'https://static.yancey.app'

export const ALI_OSS_SUFFIX_BASE = '?x-oss-process=image'

export enum ALI_OSS_SUFFIX {
  WEBP_SUFFIX = '/format,webp',
  THUMB_SUFFIX = '/resize,w_120',
  LOW_QUALITY_SUFFIX = '/quality,Q_10',
}

export const GA = 'UA-114532340-1'

export const SENTRY =
  'https://2998f0f7a05044969a7859a2596e6977@o265404.ingest.sentry.io/1468725'

export const HOTJAR_ID = 1514017

export const HOTJAR_SV = 6

export const POST_LICENSE_URL =
  'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en'

export const SVG_SPRITE: Dict = {
  telegram: '#telegram',
  github: '#github',
  soundcloud: '#soundcloud',
  paypal: '#paypal',
  rocket1: '#rocket',
  megaphone: '#megaphone',
  more: '#more',
  sandClock: '#sand-clock',
  heart: '#heart',
  rocket2: '#startup',
  instagram: '#instagram',
  fire: '#flame',
  wechat: '#wechat',
  twitter1: '#twitter',
  barcelona: '#barcelona',
  fireworks: '#fireworks',
  eye: '#eye',
  apple: '#apple',
  ubuntu: '#ubuntu',
  new: '#new',
  cv: '#curriculum-vitae',
  tools: '#gear',
  mail: '#mail',
  comments1: '#multimedia',
  code1: '#html-coding',
  openFolder: '#open-folder',
  archive: '#archive-black-box',
  home: '#home',
  share1: '#share-symbol',
  rss: '#rss-symbol',
  apps: '#app-store-apple-symbol',
  blog: '#blogger-letter-logotype',
  comments2: '#blog-comment-speech-bubble-symbol',
  search1: '#musica-searcher',
  photo: '#frame-landscape',
  settings: '#settings',
  camera: '#photo-camera',
  rightArrow: '#right-arrow',
  leftArrow: '#left-arrow',
  link: '#unlink',
  user: '#user',
  share2: '#share',
  like: '#like',
  time: '#time',
  closeFolder: '#folder',
  music: '#music-player',
  leftQuote: '#left-quote',
  rightQuote: '#right-quote',
  search2: '#magnifying-glass',
  history: '#history',
  mortarBoard: '#mortarboard',
  code2: '#code',
  crown: '#placeholder',
  tag: '#price-tag',
  balloons: '#balloons',
  twitter2: '#twitter-1',
  planet: '#twitter-1',
  astronaut: '#astronaut',
  close: '#close',
  sun: '#sun',
  moon: '#moon',
}

export const SOCIAL_MEDIA: SocialMedia = {
  github: {
    url: 'https://github.com/YanceyOfficial/',
    icon: SVG_SPRITE.github,
  },
  twitter: {
    url: 'https://twitter.com/YanceyOfficial/',
    icon: SVG_SPRITE.twitter1,
  },
  instagram: {
    url: 'https://www.instagram.com/yancey_leo/',
    icon: SVG_SPRITE.instagram,
  },
  soundCloud: {
    url: 'https://soundcloud.com/yancey-leo/',
    icon: SVG_SPRITE.soundcloud,
  },
  telegram: {
    url: 'https://t.me/YanceyOfficial',
    icon: SVG_SPRITE.telegram,
  },
  paypal: {
    url: 'https://www.paypal.me/yanceyleo/10usd',
    icon: SVG_SPRITE.paypal,
  },
  wechat: {
    url: '/',
    icon: SVG_SPRITE.wechat,
  },
  email: {
    url: 'mailto:yanceyofficial@gmail.com',
    icon: SVG_SPRITE.mail,
  },
}

export const DISCUSSION_KEY = 'yancey-blog'
