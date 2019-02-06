import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import SearchBar from './search-bar'
import SearchResults from './search-results'

import { PlayerWrapper } from './style'

import { StackExchange } from '../../config'
import FetchList from '../../utils/fetch-list'
import SiteList from '../../utils/site-list'

function PlayerSearch({ onSubmitPlayer, autoFocus, type, cookie }) {
  const wrapperRef = useRef(null)
  const [list, updateList] = useState([
    {
      badge_counts: {
        bronze: 39,
        silver: 15,
        gold: 2,
      },
      account_id: 8846158,
      is_employee: false,
      last_modified_date: 1549267892,
      last_access_date: 1549458356,
      reputation_change_year: 450,
      reputation_change_quarter: 450,
      reputation_change_month: 60,
      reputation_change_week: 30,
      reputation_change_day: 10,
      reputation: 12533,
      creation_date: 1468909549,
      user_type: 'registered',
      user_id: 6606831,
      website_url: 'https://pritishvaidya.com',
      link: 'https://stackoverflow.com/users/6606831/pritish-vaidya',
      profile_image: 'https://i.stack.imgur.com/x4G1i.jpg?s=128&g=1',
      display_name: 'Pritish Vaidya',
    },
    {
      badge_counts: {
        bronze: 27,
        silver: 11,
        gold: 1,
      },
      account_id: 7370319,
      is_employee: false,
      last_modified_date: 1547715920,
      last_access_date: 1549438973,
      reputation_change_year: 5,
      reputation_change_quarter: 5,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 1469,
      creation_date: 1448597407,
      user_type: 'registered',
      user_id: 5610686,
      accept_rate: 56,
      location: 'Indore, Madhya Pradesh, India',
      website_url: '',
      link: 'https://stackoverflow.com/users/5610686/pritish-joshi',
      profile_image:
        'https://www.gravatar.com/avatar/c92cb87b1889b66ae35386d9ee27fd6c?s=128&d=identicon&r=PG&f=1',
      display_name: 'Pritish Joshi',
    },
    {
      badge_counts: {
        bronze: 29,
        silver: 10,
        gold: 2,
      },
      account_id: 1138119,
      is_employee: false,
      last_modified_date: 1546323377,
      last_access_date: 1549447369,
      reputation_change_year: 10,
      reputation_change_quarter: 10,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 868,
      creation_date: 1443171432,
      user_type: 'registered',
      user_id: 5375503,
      accept_rate: 91,
      website_url: '',
      link: 'https://stackoverflow.com/users/5375503/pritish',
      profile_image: 'https://i.stack.imgur.com/RAnyC.jpg?s=128&g=1',
      display_name: 'Pritish',
    },
    {
      badge_counts: {
        bronze: 19,
        silver: 6,
        gold: 1,
      },
      account_id: 8576272,
      is_employee: false,
      last_modified_date: 1546323039,
      last_access_date: 1549455574,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 446,
      creation_date: 1465093399,
      user_type: 'registered',
      user_id: 6425584,
      accept_rate: 43,
      location: 'Chinchwad, Maharashtra, India',
      link: 'https://stackoverflow.com/users/6425584/pritish',
      profile_image:
        'https://www.gravatar.com/avatar/e7107ee43920c0a542d85f9a2fe45192?s=128&d=identicon&r=PG&f=1',
      display_name: 'Pritish',
    },
    {
      badge_counts: {
        bronze: 27,
        silver: 11,
        gold: 4,
      },
      account_id: 163491,
      is_employee: false,
      last_modified_date: 1546324090,
      last_access_date: 1457297618,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 379,
      creation_date: 1278516091,
      user_type: 'registered',
      user_id: 385680,
      accept_rate: 76,
      link: 'https://stackoverflow.com/users/385680/pritish',
      profile_image:
        'https://www.gravatar.com/avatar/989ccf35556254dc9a06cc89a1f35cb3?s=128&d=identicon&r=PG',
      display_name: 'Pritish',
    },
    {
      badge_counts: {
        bronze: 22,
        silver: 7,
        gold: 1,
      },
      account_id: 2435562,
      is_employee: false,
      last_modified_date: 1546323733,
      last_access_date: 1549422923,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 329,
      creation_date: 1362183819,
      user_type: 'registered',
      user_id: 2125563,
      accept_rate: 90,
      link: 'https://stackoverflow.com/users/2125563/pritish-shah',
      profile_image:
        'https://www.gravatar.com/avatar/208dbbc87fc9e14048d9f97b7b4b8d3f?s=128&d=identicon&r=PG&f=1',
      display_name: 'Pritish Shah',
    },
    {
      badge_counts: {
        bronze: 16,
        silver: 5,
        gold: 0,
      },
      account_id: 2463553,
      is_employee: false,
      last_modified_date: 1546323730,
      last_access_date: 1549450556,
      reputation_change_year: 10,
      reputation_change_quarter: 10,
      reputation_change_month: 10,
      reputation_change_week: 10,
      reputation_change_day: 0,
      reputation: 328,
      creation_date: 1362720085,
      user_type: 'registered',
      user_id: 2147142,
      accept_rate: 57,
      location: 'Faridabad, Haryana, India',
      website_url: 'http://pritishc.com',
      link: 'https://stackoverflow.com/users/2147142/pritishc',
      profile_image: 'https://i.stack.imgur.com/KiKCn.jpg?s=128&g=1',
      display_name: 'PritishC',
    },
    {
      badge_counts: {
        bronze: 11,
        silver: 3,
        gold: 1,
      },
      account_id: 1850895,
      is_employee: false,
      last_modified_date: 1546323802,
      last_access_date: 1545911502,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 114,
      creation_date: 1347882038,
      user_type: 'registered',
      user_id: 1677484,
      accept_rate: 17,
      link: 'https://stackoverflow.com/users/1677484/pritish-kakodkar',
      profile_image:
        'https://www.gravatar.com/avatar/8c062c0c7b82fb356bc6d50921991da3?s=128&d=identicon&r=PG',
      display_name: 'Pritish Kakodkar',
    },
    {
      badge_counts: {
        bronze: 2,
        silver: 1,
        gold: 0,
      },
      account_id: 6396536,
      is_employee: false,
      last_modified_date: 1483461628,
      last_access_date: 1433149247,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 76,
      creation_date: 1433149247,
      user_type: 'unregistered',
      user_id: 4960697,
      link: 'https://stackoverflow.com/users/4960697/pritish-nandi',
      profile_image:
        'https://www.gravatar.com/avatar/bc03b4395c1c5a8a081ffbec77d094ca?s=128&d=identicon&r=PG',
      display_name: 'Pritish Nandi',
    },
    {
      badge_counts: {
        bronze: 1,
        silver: 0,
        gold: 0,
      },
      account_id: 7311746,
      is_employee: false,
      last_modified_date: 1517078276,
      last_access_date: 1454174103,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 71,
      creation_date: 1447742336,
      user_type: 'registered',
      user_id: 5570664,
      link: 'https://stackoverflow.com/users/5570664/pritish',
      profile_image:
        'https://www.gravatar.com/avatar/beae8e9e487a565d68af39a008f8c813?s=128&d=identicon&r=PG&f=1',
      display_name: 'Pritish',
    },
    {
      badge_counts: {
        bronze: 3,
        silver: 0,
        gold: 0,
      },
      account_id: 6715918,
      is_employee: false,
      last_modified_date: 1546323421,
      last_access_date: 1541761332,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 53,
      creation_date: 1438344257,
      user_type: 'registered',
      user_id: 5177753,
      location: 'Bangalore, Karnataka, India',
      link: 'https://stackoverflow.com/users/5177753/pritish',
      profile_image:
        'https://www.gravatar.com/avatar/1667d71959bf15365ccd3704740f3922?s=128&d=identicon&r=PG&f=1',
      display_name: 'Pritish',
    },
    {
      badge_counts: {
        bronze: 6,
        silver: 0,
        gold: 0,
      },
      account_id: 6862958,
      is_employee: false,
      last_modified_date: 1546323297,
      last_access_date: 1549449231,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 51,
      creation_date: 1448521060,
      user_type: 'registered',
      user_id: 5607243,
      location: 'Panchkula, India',
      website_url: '',
      link: 'https://stackoverflow.com/users/5607243/pritish-thakkar',
      profile_image:
        'https://lh5.googleusercontent.com/-GtVh6maPFws/AAAAAAAAAAI/AAAAAAAAAJs/2TvYEfuf4hs/photo.jpg?sz=128',
      display_name: 'pritish thakkar',
    },
    {
      badge_counts: {
        bronze: 4,
        silver: 1,
        gold: 0,
      },
      account_id: 8412942,
      is_employee: false,
      last_modified_date: 1546323074,
      last_access_date: 1541500368,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 48,
      creation_date: 1462870665,
      user_type: 'registered',
      user_id: 6314252,
      link: 'https://stackoverflow.com/users/6314252/pritish-pandey',
      profile_image:
        'https://www.gravatar.com/avatar/fe7298b30a5778567b0322aaa2e89bd8?s=128&d=identicon&r=PG&f=1',
      display_name: 'Pritish Pandey',
    },
    {
      badge_counts: {
        bronze: 8,
        silver: 1,
        gold: 0,
      },
      account_id: 1797972,
      is_employee: false,
      last_modified_date: 1491010706,
      last_access_date: 1548996586,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 44,
      creation_date: 1346354058,
      user_type: 'registered',
      user_id: 1636960,
      accept_rate: 80,
      website_url: '',
      link: 'https://stackoverflow.com/users/1636960/pritish-jain',
      profile_image:
        'https://www.gravatar.com/avatar/19d8fafee749d0b027dd7cda01b59476?s=128&d=identicon&r=PG',
      display_name: 'Pritish Jain',
    },
    {
      badge_counts: {
        bronze: 3,
        silver: 0,
        gold: 0,
      },
      account_id: 12358622,
      is_employee: false,
      last_modified_date: 1546322354,
      last_access_date: 1522841775,
      reputation_change_year: 5,
      reputation_change_quarter: 5,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 41,
      creation_date: 1511772204,
      user_type: 'registered',
      user_id: 9013625,
      link: 'https://stackoverflow.com/users/9013625/pritish-mohapatra',
      profile_image:
        'https://graph.facebook.com/10212352534740901/picture?type=large',
      display_name: 'Pritish Mohapatra',
    },
    {
      badge_counts: {
        bronze: 9,
        silver: 0,
        gold: 0,
      },
      account_id: 4715918,
      is_employee: false,
      last_modified_date: 1546323544,
      last_access_date: 1549176221,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 36,
      creation_date: 1404800352,
      user_type: 'registered',
      user_id: 3815050,
      accept_rate: 25,
      location: 'Bengaluru, Karnataka, India',
      website_url: '',
      link: 'https://stackoverflow.com/users/3815050/pritish',
      profile_image: 'https://i.stack.imgur.com/Xp2qk.jpg?s=128&g=1',
      display_name: 'Pritish',
    },
    {
      badge_counts: {
        bronze: 5,
        silver: 0,
        gold: 0,
      },
      account_id: 10480214,
      is_employee: false,
      last_modified_date: 1514293320,
      last_access_date: 1549458213,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 26,
      creation_date: 1489731674,
      user_type: 'registered',
      user_id: 7725439,
      location: 'IIT Kharagpur, Kharagpur, West Bengal, India',
      link: 'https://stackoverflow.com/users/7725439/pritish-kumar',
      profile_image:
        'https://www.gravatar.com/avatar/02f99028ec9f350dfc70de03809c6474?s=128&d=identicon&r=PG&f=1',
      display_name: 'Pritish kumar',
    },
    {
      badge_counts: {
        bronze: 5,
        silver: 0,
        gold: 0,
      },
      account_id: 8879628,
      is_employee: false,
      last_modified_date: 1483458629,
      last_access_date: 1545252685,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 16,
      creation_date: 1469319642,
      user_type: 'registered',
      user_id: 6630337,
      link: 'https://stackoverflow.com/users/6630337/pritish-garg',
      profile_image:
        'https://lh3.googleusercontent.com/-2KtwqJb8wro/AAAAAAAAAAI/AAAAAAAAAGI/rdCsFj9j4SY/photo.jpg?sz=128',
      display_name: 'Pritish Garg',
    },
    {
      badge_counts: {
        bronze: 1,
        silver: 0,
        gold: 0,
      },
      account_id: 620945,
      is_employee: false,
      last_modified_date: 1332303239,
      last_access_date: 1279561964,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 11,
      creation_date: 1276116784,
      user_type: 'unregistered',
      user_id: 362870,
      link: 'https://stackoverflow.com/users/362870/pritish',
      profile_image:
        'https://www.gravatar.com/avatar/0cd3dd5b652a725801b9d24c3c94376f?s=128&d=identicon&r=PG',
      display_name: 'Pritish',
    },
    {
      badge_counts: {
        bronze: 3,
        silver: 0,
        gold: 0,
      },
      account_id: 1123335,
      is_employee: false,
      last_modified_date: 1483466025,
      last_access_date: 1453872226,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 11,
      creation_date: 1324534119,
      user_type: 'registered',
      user_id: 1111143,
      link: 'https://stackoverflow.com/users/1111143/pritish-mhapankar',
      profile_image:
        'https://www.gravatar.com/avatar/269f3adafd584265b7d39ed44a0a477a?s=128&d=identicon&r=PG',
      display_name: 'Pritish Mhapankar',
    },
    {
      badge_counts: {
        bronze: 1,
        silver: 0,
        gold: 0,
      },
      account_id: 1670237,
      is_employee: false,
      last_access_date: 1346151420,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 11,
      creation_date: 1342674684,
      user_type: 'unregistered',
      user_id: 1536816,
      link: 'https://stackoverflow.com/users/1536816/pritish',
      profile_image:
        'https://www.gravatar.com/avatar/23f464923daedc855e844e958b23634c?s=128&d=identicon&r=PG',
      display_name: 'pritish',
    },
    {
      badge_counts: {
        bronze: 2,
        silver: 0,
        gold: 0,
      },
      account_id: 3438349,
      is_employee: false,
      last_modified_date: 1456484369,
      last_access_date: 1531880723,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 11,
      creation_date: 1381801162,
      user_type: 'registered',
      user_id: 2880886,
      location: 'Pune, Maharashtra, India',
      website_url: '',
      link: 'https://stackoverflow.com/users/2880886/pritish',
      profile_image: 'https://i.stack.imgur.com/pJdx2.jpg?s=128&g=1',
      display_name: 'Pritish',
    },
    {
      badge_counts: {
        bronze: 2,
        silver: 0,
        gold: 0,
      },
      account_id: 10769321,
      is_employee: false,
      last_modified_date: 1546322633,
      last_access_date: 1503586722,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 11,
      creation_date: 1493184119,
      user_type: 'registered',
      user_id: 7923230,
      link: 'https://stackoverflow.com/users/7923230/pritish-patil',
      profile_image:
        'https://lh5.googleusercontent.com/-lkjxJZSSdtE/AAAAAAAAAAI/AAAAAAAAAMI/zkuqPH629Dc/photo.jpg?sz=128',
      display_name: 'Pritish Patil',
    },
    {
      badge_counts: {
        bronze: 1,
        silver: 0,
        gold: 0,
      },
      account_id: 12051374,
      is_employee: false,
      last_modified_date: 1546322400,
      last_access_date: 1521445437,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 11,
      creation_date: 1508669378,
      user_type: 'unregistered',
      user_id: 8814208,
      link: 'https://stackoverflow.com/users/8814208/pritish-sahu',
      profile_image:
        'https://www.gravatar.com/avatar/5831b28725d9e6372069ece77e903257?s=128&d=identicon&r=PG',
      display_name: 'pritish sahu',
    },
    {
      badge_counts: {
        bronze: 3,
        silver: 0,
        gold: 0,
      },
      account_id: 10036383,
      is_employee: false,
      last_modified_date: 1547218502,
      last_access_date: 1549459073,
      reputation_change_year: 10,
      reputation_change_quarter: 10,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 11,
      creation_date: 1546878272,
      user_type: 'registered',
      user_id: 10880160,
      location: 'Mumbai',
      link: 'https://stackoverflow.com/users/10880160/pritish-salian',
      profile_image:
        'https://www.gravatar.com/avatar/43e00b6876685e32ca8e7125f18b953d?s=128&d=identicon&r=PG&f=1',
      display_name: 'pritish salian',
    },
    {
      badge_counts: {
        bronze: 3,
        silver: 0,
        gold: 0,
      },
      account_id: 1761580,
      is_employee: false,
      last_modified_date: 1483465270,
      last_access_date: 1459104684,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 8,
      creation_date: 1345279128,
      user_type: 'registered',
      user_id: 1608559,
      link: 'https://stackoverflow.com/users/1608559/pritish',
      profile_image:
        'https://www.gravatar.com/avatar/40c8be64c81eace1cc094279b2b9150d?s=128&d=identicon&r=PG',
      display_name: 'Pritish',
    },
    {
      badge_counts: {
        bronze: 2,
        silver: 0,
        gold: 0,
      },
      account_id: 5501485,
      is_employee: false,
      last_access_date: 1549251870,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 6,
      creation_date: 1446026420,
      user_type: 'registered',
      user_id: 5497619,
      link: 'https://stackoverflow.com/users/5497619/pritish-pandit',
      profile_image:
        'https://www.gravatar.com/avatar/4c5661d62ea3d10499d923b626934c18?s=128&d=identicon&r=PG&f=1',
      display_name: 'Pritish Pandit',
    },
    {
      badge_counts: {
        bronze: 2,
        silver: 0,
        gold: 0,
      },
      account_id: 15083198,
      is_employee: false,
      last_access_date: 1548927776,
      reputation_change_year: 5,
      reputation_change_quarter: 5,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 6,
      creation_date: 1546963274,
      user_type: 'registered',
      user_id: 10885247,
      link: 'https://stackoverflow.com/users/10885247/pritish-bhavnani',
      profile_image:
        'https://www.gravatar.com/avatar/dfad6d5c6157e259ebf7f3d91619599d?s=128&d=identicon&r=PG&f=1',
      display_name: 'Pritish Bhavnani',
    },
    {
      badge_counts: {
        bronze: 2,
        silver: 0,
        gold: 0,
      },
      account_id: 7569868,
      is_employee: false,
      last_modified_date: 1546323252,
      last_access_date: 1490715364,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 4,
      creation_date: 1451921613,
      user_type: 'registered',
      user_id: 5744159,
      website_url: '',
      link: 'https://stackoverflow.com/users/5744159/pritish-sahoo',
      profile_image: 'https://i.stack.imgur.com/JGNy0.jpg?s=128&g=1',
      display_name: 'Pritish Sahoo',
    },
    {
      badge_counts: {
        bronze: 1,
        silver: 0,
        gold: 0,
      },
      account_id: 11086928,
      is_employee: false,
      last_access_date: 1548401052,
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 3,
      creation_date: 1497072831,
      user_type: 'registered',
      user_id: 8140270,
      location: 'Bangalore',
      link: 'https://stackoverflow.com/users/8140270/pritish-choubey',
      profile_image:
        'https://graph.facebook.com/1693059957389195/picture?type=large',
      display_name: 'Pritish Choubey',
    },
  ])
  const [loading, setLoading] = useState(false)
  const [focused, setFocus] = useState(autoFocus)
  const [searchString, setSearchString] = useState('')
  const currentSite = SiteList.filter(
    ({ api_site_parameter }) => api_site_parameter === cookie
  )

  const fetchList = async name => {
    setLoading(true)
    const list = await FetchList(StackExchange.User, {
      order: 'desc',
      sort: 'reputation',
      inname: name,
      site: cookie,
      key: StackExchange.Key,
    })
    if (list) {
      updateList(list)
    }
    setSearchString(name)
    setLoading(false)
  }

  const delayedCallback = _.debounce(event => {
    fetchList(event.target.value)
  }, 1000)

  const onChange = event => {
    event.persist()
    delayedCallback(event)
  }

  const onSubmit = name => fetchList(name)
  const onFocus = () => setFocus(true)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, false)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false)
    }
  }, [])

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onBlur()
    }
  }

  const onBlur = () => setFocus(false)

  return (
    <PlayerWrapper ref={wrapperRef}>
      <SearchBar
        onChange={onChange}
        onFocus={onFocus}
        onSubmit={onSubmit}
        autoFocus={autoFocus}
        placeholder={`Enter ${_.startCase(_.toLower(type))} name...`}
        open={loading && list.length && focused}
      />
      <SearchResults
        type={type}
        searchString={searchString}
        loading={loading}
        data={list}
        focused={focused}
        site={currentSite.length && currentSite[0]}
        submit={onSubmitPlayer}
      />
    </PlayerWrapper>
  )
}

PlayerSearch.propTypes = {
  onSubmitPlayer: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  cookie: PropTypes.string.isRequired,
}

export default PlayerSearch
