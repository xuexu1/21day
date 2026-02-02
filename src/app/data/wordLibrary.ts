/**
 * 单词回顾库
 * 包含常用的英语单词和句子，供记忆卡片应用使用
 */

interface WordLibraryItem {
  word: string;
  translation: string;
  type: 'word' | 'sentence';
}

export const wordLibrary: WordLibraryItem[] = [
  // 编程相关词汇
  {
    word: 'comprehensive',
    translation: '全面的，综合的',
    type: 'word',
  },
  {
    word: 'suite',
    translation: '套件，测试套件',
    type: 'word',
  },
  {
    word: 'modular',
    translation: 'adj. 模块化的',
    type: 'word',
  },
  {
    word: 'commands',
    translation: 'n. 命令，指令',
    type: 'word',
  },
  {
    word: 'definition',
    translation: 'n. 定义，释义',
    type: 'word',
  },
  {
    word: 'implementation',
    translation: 'n. 实现，执行',
    type: 'word',
  },
  {
    word: 'repository',
    translation: 'n. 仓库，存储库',
    type: 'word',
  },
  {
    word: 'configuration',
    translation: 'n. 配置，设置',
    type: 'word',
  },
  {
    word: 'authentication',
    translation: 'n. 身份验证，认证',
    type: 'word',
  },
  {
    word: 'deployment',
    translation: 'n. 部署，配置',
    type: 'word',
  },

  // 常用形容词
  {
    word: 'intensive',
    translation: 'adj. 加强的，集中的，深入细致的',
    type: 'word',
  },
  {
    word: 'efficient',
    translation: 'adj. 高效的，有效率的',
    type: 'word',
  },
  {
    word: 'consistent',
    translation: 'adj. 一致的，始终如一的',
    type: 'word',
  },
  {
    word: 'persistent',
    translation: 'adj. 持久的，持续的',
    type: 'word',
  },
  {
    word: 'reliable',
    translation: 'adj. 可靠的，可信赖的',
    type: 'word',
  },
  {
    word: 'flexible',
    translation: 'adj. 灵活的，可变通的',
    type: 'word',
  },
  {
    word: 'accessible',
    translation: 'adj. 可访问的，易接近的',
    type: 'word',
  },
  {
    word: 'scalable',
    translation: 'adj. 可扩展的，可伸缩的',
    type: 'word',
  },

  // 动词相关
  {
    word: 'encouraged',
    translation: 'v. 鼓励，激励',
    type: 'word',
  },
  {
    word: 'initialize',
    translation: 'v. 初始化，设置初值',
    type: 'word',
  },
  {
    word: 'optimize',
    translation: 'v. 优化，使最优化',
    type: 'word',
  },
  {
    word: 'integrate',
    translation: 'v. 整合，集成',
    type: 'word',
  },
  {
    word: 'synchronize',
    translation: 'v. 同步，使同步',
    type: 'word',
  },
  {
    word: 'validate',
    translation: 'v. 验证，确认',
    type: 'word',
  },
  {
    word: 'manipulate',
    translation: 'v. 操作，处理',
    type: 'word',
  },

  // 名词相关
  {
    word: 'encouragement',
    translation: 'n. 鼓舞，鼓励',
    type: 'word',
  },
  {
    word: 'architecture',
    translation: 'n. 架构，体系结构',
    type: 'word',
  },
  {
    word: 'interface',
    translation: 'n. 接口，界面',
    type: 'word',
  },
  {
    word: 'algorithm',
    translation: 'n. 算法',
    type: 'word',
  },
  {
    word: 'protocol',
    translation: 'n. 协议，规程',
    type: 'word',
  },
  {
    word: 'infrastructure',
    translation: 'n. 基础设施',
    type: 'word',
  },
  {
    word: 'middleware',
    translation: 'n. 中间件',
    type: 'word',
  },
  {
    word: 'constraint',
    translation: 'n. 约束，限制',
    type: 'word',
  },
  {
    word: 'threshold',
    translation: 'n. 阈值，门槛',
    type: 'word',
  },
  {
    word: 'vulnerability',
    translation: 'n. 漏洞，脆弱性',
    type: 'word',
  },

  // 常用句子
  {
    word: 'Your 200k context window can shrink to 70k with too many tools enabled',
    translation: '如果启用过多的工具，您的20万字的上下文窗口可能会缩减至7万字',
    type: 'sentence',
  },
  {
    word: 'The application will automatically save your progress',
    translation: '应用程序将自动保存您的进度',
    type: 'sentence',
  },
  {
    word: 'Please make sure to review your code before submitting',
    translation: '请确保在提交之前检查您的代码',
    type: 'sentence',
  },
  {
    word: 'This feature is currently under development',
    translation: '此功能目前正在开发中',
    type: 'sentence',
  },
  {
    word: 'We recommend using the latest version for better performance',
    translation: '我们建议使用最新版本以获得更好的性能',
    type: 'sentence',
  },
  {
    word: 'The system has been successfully updated',
    translation: '系统已成功更新',
    type: 'sentence',
  },
  {
    word: 'Error handling is an essential part of software development',
    translation: '错误处理是软件开发的重要组成部分',
    type: 'sentence',
  },
  {
    word: 'Data persistence ensures information is saved across sessions',
    translation: '数据持久化确保信息在会话之间得到保存',
    type: 'sentence',
  },
];
