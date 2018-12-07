export default {
  logo: 'Let us wave together',
  inlay: {
    footer: {
      home: 'Home',
      forum: 'Forum',
      mine: 'Mine'
    },
    header: {
      home: 'Home',
      forum: 'Forum',
      mine: 'Mine'
    }
  },
  route: {
    dashboard: 'Dashboard',
    introduction: 'Introduction',
    Betting: 'Betting', // 投注记录
    LotteryRecord: 'LotteryRecord', // 彩票记录
    LotteryResult: 'LotteryResult', // 彩票开奖结果
    ManagementBackground: 'ManagementBackground', // 财务管理
    MemberAccountChange: 'MemberAccountChange', // 会员账变
    AddDeduction: 'AddDeduction', // 会员加款扣款
    CodeAmount: 'CodeAmount', // 会员加减打码量
    CustomerRecharge: 'CustomerRecharge',
    MemberManagement: 'MemberManagement', // 会员管理
    AllMembers: 'AllMembers', // 全部会员管理
    Hierarchical: 'Hierarchical', // 层级管理
    ReportManagement: 'ReportManagement', // 报表管理
    BettingManagement: 'BettingManagement', // 全局报表管理
    UserDaily: 'UserDaily', // 用户日报
    GameDaily: 'GameDaily', // 游戏日报
    DailyProfitAndLoss: 'DailyProfitAndLoss', // 盈亏日报
    SystemManagement: 'SystemManagement', // 系统管理
    SystemSettings: 'SystemSettings', // 系统设置
    paymentMethod: 'paymentMethod', // 收款方式
    SystemUserManagement: 'SystemUserManagement', // 系统用户管理
    AdditiveManagement: 'AdditiveManagement', // 角色管理
    authorityManagement: 'authorityManagement', // 权限管理
    ManagementIpLibrary: 'ManagementIpLibrary', // 系统IP库
    DictionaryManagement: 'DictionaryManagement', // 字典管理
    VersionRelease: 'VersionRelease', // 版本发布
    ResourceManagement: 'ResourceManagement', // 资讯管理
    latestNews: 'latestNews', // 最新消息管理
    SystemNotification: 'SystemNotification', // 系统公告管理
    UserMessage: 'UserMessage', // 用户消息管理
    AdvertisingMapManagement: 'AdvertisingMapManagement', // 广告图管理
    GameConfiguration: 'GameConfiguration', // 游戏配置
    Game: 'Game', // 游戏
    GamePlay: 'GamePlay', // 游戏玩法
    GameSmallClassGameplay: 'GameSmallClassGameplay', // 游戏小类玩法
    GameSuspensionSettings: 'GameSuspensionSettings', // 游戏停牌设置
    FlagRule: 'FlagRule', // 旗号规则设置
    GamePeriod: 'GamePeriod', // 游戏期数设置
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    componentIndex: 'Introduction',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    screenfull: 'Screenfull',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    code: 'code',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  CustomerRecharge: {
    CustomerRecharge: 'CustomerRecharge',
    github: 'Github Repository'
  },
  permission: {
    roles: 'Your roles',
    switchRoles: 'Switch roles'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentación',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  }
}
