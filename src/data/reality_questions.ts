import type { Question } from '../types';

export const REALITY_QUESTIONS: Question[] = [
  {
    id: 'r_weekend',
    title: '周末的午后',
    description: '终于结束了一周的忙碌，周六的下午，你通常会怎么度过？',
    options: [
      {
        id: 'A',
        text: '看几个硬核科普视频，或者读那本买了很久的专业书',
        aspect: 'Lantern',
        value: 2,
        flavorText: '大脑的愉悦来自于理解世界的底层逻辑。',
        nextQuestionId: 'r_conflict'
      },
      {
        id: 'B',
        text: '去那家新开的网红餐厅打卡，或者约朋友去酒吧',
        aspect: 'Grail',
        value: 2,
        flavorText: '唯有美食与爱不可辜负，感官的满足才是活着的证明。',
        nextQuestionId: 'r_conflict'
      },
      {
        id: 'C',
        text: '去健身房撸铁，或者在家捣鼓一些手工/DIY项目',
        aspect: 'Forge',
        value: 2,
        flavorText: '流汗和创造让人感到掌控感，身体和物质不会撒谎。',
        nextQuestionId: 'r_conflict'
      },
      {
        id: 'D',
        text: '拉上窗帘，关掉手机，补觉或者发呆',
        aspect: 'Winter',
        value: 2,
        flavorText: '世界太吵了，你需要一点绝对的寂静来恢复能量。',
        nextQuestionId: 'r_conflict'
      },
      {
        id: 'E',
        text: '没有计划，出门随便走走，也许会换个新发型',
        aspect: 'Moth',
        value: 2,
        flavorText: '计划总是赶不上变化，不如随心所欲，拥抱未知。',
        nextQuestionId: 'r_conflict'
      }
    ]
  },
  {
    id: 'r_conflict',
    title: '职场/学业危机',
    description: '你的上级/导师提出了一个明显不合理的要求，你会怎么做？',
    options: [
      {
        id: 'A',
        text: '引用过往的案例或公司规定，证明这不符合惯例',
        aspect: 'Secret Histories',
        value: 2,
        flavorText: '历史总是惊人的相似，经验是你最好的盾牌。',
        nextQuestionId: 'r_social'
      },
      {
        id: 'B',
        text: '表面答应，然后想办法找漏洞或者捷径糊弄过去',
        aspect: 'Knock',
        value: 2,
        flavorText: '规则是死的，人是活的，总有后门可以走。',
        nextQuestionId: 'r_social'
      },
      {
        id: 'C',
        text: '把它当成一场战役，联合其他人或者正面硬刚',
        aspect: 'Edge',
        value: 2,
        flavorText: '冲突是检验能力的试金石，你不会轻易退缩。',
        nextQuestionId: 'r_social'
      },
      {
        id: 'D',
        text: '为了团队和谐先忍下来，尽力修补烂摊子',
        aspect: 'Heart',
        value: 2,
        flavorText: '维持系统的运转比争论对错更重要，你是那个兜底的人。',
        nextQuestionId: 'r_social'
      },
      {
        id: 'E',
        text: '这太荒谬了，也许是时候考虑跳槽或者换个环境了',
        aspect: 'Moth',
        value: 2,
        flavorText: '树挪死，人挪活，为什么要在一棵树上吊死？',
        nextQuestionId: 'r_social'
      }
    ]
  },
  {
    id: 'r_social',
    title: '社交网络',
    description: '翻看你的朋友圈/社交媒体动态，最多的内容是？',
    options: [
      {
        id: 'A',
        text: '转发深度好文、行业分析或者自己的见解',
        aspect: 'Lantern',
        value: 2,
        flavorText: '你希望你的分享能给他人带来启发，或者展示你的专业度。',
        nextQuestionId: 'r_shopping'
      },
      {
        id: 'B',
        text: '精修的美食、旅行照、或者氛围感自拍',
        aspect: 'Grail',
        value: 2,
        flavorText: '生活需要仪式感，美好的瞬间值得被记录和羡慕。',
        nextQuestionId: 'r_shopping'
      },
      {
        id: 'C',
        text: '转发抽奖、寻找拼单、或者分享一些冷门的小众资源',
        aspect: 'Knock',
        value: 2,
        flavorText: '互联网络是一个巨大的宝库，你擅长在其中挖掘价值。',
        nextQuestionId: 'r_shopping'
      },
      {
        id: 'D',
        text: '“那年今日”、老照片、或者对过去事件的感慨',
        aspect: 'Secret Histories',
        value: 2,
        flavorText: '过去塑造了现在的我们，记忆是唯一真实的财富。',
        nextQuestionId: 'r_shopping'
      },
      {
        id: 'E',
        text: '很少发动态，或者设置了三天可见/定期清理',
        aspect: 'Winter',
        value: 2,
        flavorText: '互联网有记忆，但这让你感到不安。沉默是金。',
        nextQuestionId: 'r_shopping'
      }
    ]
  },
  {
    id: 'r_shopping',
    title: '消费观念',
    description: '如果突然发了一笔意外之财，你最可能把它花在？',
    options: [
      {
        id: 'A',
        text: '升级电脑硬件、购买最新的生产力工具或器材',
        aspect: 'Forge',
        value: 2,
        flavorText: '工欲善其事，必先利其器。这是对未来的投资。',
        nextQuestionId: 'r_stress'
      },
      {
        id: 'B',
        text: '一场奢华的旅行，或者买那个种草很久的包/表',
        aspect: 'Grail',
        value: 2,
        flavorText: '钱只是换了一种方式陪伴你，快乐最重要。',
        nextQuestionId: 'r_stress'
      },
      {
        id: 'C',
        text: '存起来，或者买保险/理财，给家人买礼物',
        aspect: 'Heart',
        value: 2,
        flavorText: '安全感比什么都重要，你要为未雨绸缪。',
        nextQuestionId: 'r_stress'
      },
      {
        id: 'D',
        text: '去买一些绝版的旧书、古董或者纪念品',
        aspect: 'Secret Histories',
        value: 2,
        flavorText: '这些物品承载着时间的故事，它们的价值超越了金钱。',
        nextQuestionId: 'r_stress'
      },
      {
        id: 'E',
        text: '投资高风险高回报的项目，或者去买彩票',
        aspect: 'Knock',
        value: 2,
        flavorText: '运气也是实力的一部分，你愿意赌一把大的。',
        nextQuestionId: 'r_stress'
      }
    ]
  },
  {
    id: 'r_stress',
    title: '压力释放',
    description: '当感到极度焦虑或压力大时，你会？',
    options: [
      {
        id: 'A',
        text: '去打拳、跑步，或者玩竞技类游戏发泄',
        aspect: 'Edge',
        value: 2,
        flavorText: '将压力转化为攻击性，在对抗中释放肾上腺素。',
        nextQuestionId: 'r_group'
      },
      {
        id: 'B',
        text: '暴饮暴食，或者疯狂购物',
        aspect: 'Grail',
        value: 2,
        flavorText: '填满胃或者填满购物车，都能填补内心的空虚。',
        nextQuestionId: 'r_group'
      },
      {
        id: 'C',
        text: '彻底断联，一个人待着，什么都不做',
        aspect: 'Winter',
        value: 2,
        flavorText: '像冬眠的动物一样，降低消耗，等待春天。',
        nextQuestionId: 'r_group'
      },
      {
        id: 'D',
        text: '整理房间，打扫卫生，把东西归类',
        aspect: 'Forge',
        value: 2,
        flavorText: '秩序能带来平静，重塑环境能让你找回掌控感。',
        nextQuestionId: 'r_group'
      },
      {
        id: 'E',
        text: '找朋友倾诉，或者回家和父母待一会儿',
        aspect: 'Heart',
        value: 2,
        flavorText: '人与人的连接是最好的治愈，你不需要独自承担。',
        nextQuestionId: 'r_group'
      },
      {
        id: 'F',
        text: '翻看以前的日记、相册，沉浸在回忆里',
        aspect: 'Secret Histories',
        value: 2,
        flavorText: '回望过去能让你确认自己的坐标，找回内心的锚点。',
        nextQuestionId: 'r_group'
      }
    ]
  },
  {
    id: 'r_group',
    title: '团队角色',
    description: '在小组作业或团队项目中，你通常扮演什么角色？',
    options: [
      {
        id: 'A',
        text: '查资料、写框架、做PPT的那个',
        aspect: 'Lantern',
        value: 2,
        flavorText: '你是大脑。你提供方向和理论支持。',
        nextQuestionId: 'r_change'
      },
      {
        id: 'B',
        text: '负责推进进度、催促大家、最后统稿的那个',
        aspect: 'Forge',
        value: 2,
        flavorText: '你是引擎。没有你，项目永远停留在纸面上。',
        nextQuestionId: 'r_change'
      },
      {
        id: 'C',
        text: '调解矛盾、买奶茶、活跃气氛的那个',
        aspect: 'Heart',
        value: 2,
        flavorText: '你是粘合剂。你确保团队不会在完成任务前散伙。',
        nextQuestionId: 'r_change'
      },
      {
        id: 'D',
        text: '平时不说话，关键时刻能搞定难点或找来资源的那个',
        aspect: 'Knock',
        value: 2,
        flavorText: '你是万能钥匙。你总有办法解决那些“不可能”的问题。',
        nextQuestionId: 'r_change'
      },
      {
        id: 'E',
        text: '挑刺的那个，总能发现方案里的漏洞和风险',
        aspect: 'Edge',
        value: 2,
        flavorText: '你是磨刀石。你的质疑让最终的成果更加坚不可摧。',
        nextQuestionId: 'r_change'
      }
    ]
  },
  {
    id: 'r_change',
    title: '面对变故',
    description: '如果必须搬到一个完全陌生的城市生活，你的第一反应是？',
    options: [
      {
        id: 'A',
        text: '兴奋，终于可以摆脱过去，重新开始',
        aspect: 'Moth',
        value: 2,
        flavorText: '你是天生的流浪者，旧的躯壳只会束缚你。',
        nextQuestionId: 'r_learning'
      },
      {
        id: 'B',
        text: '焦虑，担心失去现有的朋友和习惯',
        aspect: 'Heart',
        value: 2,
        flavorText: '根基对你很重要，拔根而起总是伴随着疼痛。',
        nextQuestionId: 'r_learning'
      },
      {
        id: 'C',
        text: '冷静，开始研究当地的地图、攻略和租房信息',
        aspect: 'Lantern',
        value: 2,
        flavorText: '只要掌握了足够的信息，就没有什么可怕的。',
        nextQuestionId: 'r_learning'
      },
      {
        id: 'D',
        text: '不舍，会带走很多旧物，并在新家复刻原来的布置',
        aspect: 'Secret Histories',
        value: 2,
        flavorText: '你随身携带着你的历史，无论走到哪里，家都在你心里。',
        nextQuestionId: 'r_learning'
      },
      {
        id: 'E',
        text: '务实，思考那边的发展机会和薪资水平',
        aspect: 'Forge',
        value: 2,
        flavorText: '环境只是资源，重要的是它能否让你变得更强。',
        nextQuestionId: 'r_learning'
      }
    ]
  },
  {
    id: 'r_learning',
    title: '学习新技能',
    description: '你想学一项新技能（比如剪辑、编程、乐器），你会怎么开始？',
    options: [
      {
        id: 'A',
        text: '找最权威的教材或课程，从基础理论开始啃',
        aspect: 'Lantern',
        value: 2,
        flavorText: '基础不牢，地动山摇。你要的是系统性的掌握。',
        nextQuestionId: 'r_crisis'
      },
      {
        id: 'B',
        text: '直接上手试，遇到问题再搜，边做边学',
        aspect: 'Knock',
        value: 2,
        flavorText: '实践出真知，错误是最好的老师。',
        nextQuestionId: 'r_crisis'
      },
      {
        id: 'C',
        text: '找个厉害的老师或朋友带，或者报个班',
        aspect: 'Heart',
        value: 2,
        flavorText: '传承和交流能让你少走弯路，你喜欢有人陪伴的学习。',
        nextQuestionId: 'r_crisis'
      },
      {
        id: 'D',
        text: '设定一个高难度的目标，逼自己去完成',
        aspect: 'Edge',
        value: 2,
        flavorText: '挑战激发生命力，你想看看自己的极限在哪里。',
        nextQuestionId: 'r_crisis'
      },
      {
        id: 'E',
        text: '凭感觉玩，不追求专业，只追求有趣和表达',
        aspect: 'Moth',
        value: 2,
        flavorText: '灵感比技巧更重要，你享受的是创造的过程。',
        nextQuestionId: 'r_crisis'
      },
      {
        id: 'F',
        text: '研究这个技能的发展史和大师们的生平',
        aspect: 'Secret Histories',
        value: 2,
        flavorText: '理解了过去，才能更好地掌握现在。',
        nextQuestionId: 'r_crisis'
      }
    ]
  },
  {
    id: 'r_crisis',
    title: '突发状况',
    description: '你在旅行中迷路了，手机没信号，天快黑了，你会？',
    options: [
      {
        id: 'A',
        text: '分析太阳方位和地形，逻辑推理出正确的方向',
        aspect: 'Lantern',
        value: 2,
        flavorText: '理性是你永不熄灭的火把。',
        nextQuestionId: 'r_secret'
      },
      {
        id: 'B',
        text: '寻找当地人求助，或者尝试搭车',
        aspect: 'Knock',
        value: 2,
        flavorText: '路在嘴上，连接他人就能打开生路。',
        nextQuestionId: 'r_secret'
      },
      {
        id: 'C',
        text: '强行开辟一条路，或者破坏围栏走捷径',
        aspect: 'Forge',
        value: 2,
        flavorText: '没有路，就造一条路。障碍就是用来被打破的。',
        nextQuestionId: 'r_secret'
      },
      {
        id: 'D',
        text: '原地等待救援，保存体力，不盲目行动',
        aspect: 'Winter',
        value: 2,
        flavorText: '在危机中，静止往往比盲动更安全。',
        nextQuestionId: 'r_secret'
      },
      {
        id: 'E',
        text: '警惕周围的动静，准备好防身工具',
        aspect: 'Edge',
        value: 2,
        flavorText: '世界是危险的，你时刻准备着应对威胁。',
        nextQuestionId: 'r_secret'
      }
    ]
  },
  {
    id: 'r_secret',
    title: '秘密',
    description: '一个不太熟的朋友突然告诉你一个惊人的秘密，你会？',
    options: [
      {
        id: 'A',
        text: '守口如瓶，绝不告诉第三个人',
        aspect: 'Heart',
        value: 2,
        flavorText: '信任是神圣的，你是一个安全的容器。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'B',
        text: '暗中记下，也许以后能用它来交换利益',
        aspect: 'Edge',
        value: 2,
        flavorText: '信息就是武器，关键时刻能一击必杀。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'C',
        text: '用这个秘密去交换另一个秘密',
        aspect: 'Knock',
        value: 2,
        flavorText: '秘密是流通的货币，只有流动起来才有价值。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'D',
        text: '听听就好，享受这种吃瓜的快感',
        aspect: 'Grail',
        value: 2,
        flavorText: '窥探他人的生活总是令人愉悦的。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'E',
        text: '转头就忘，不想卷入麻烦',
        aspect: 'Winter',
        value: 2,
        flavorText: '知道得越少，活得越久。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'F',
        text: '把它写进日记里，或者作为写作素材',
        aspect: 'Secret Histories',
        value: 2,
        flavorText: '这是发生过的事实，值得被记录下来。',
        nextQuestionId: 'r_aesthetic'
      },
      {
        id: 'G',
        text: '很难保守住，可能会不小心说漏嘴',
        aspect: 'Moth',
        value: 2,
        flavorText: '秘密像飞蛾一样，总是忍不住扑向光亮。',
        nextQuestionId: 'r_aesthetic'
      }
    ]
  },
  {
    id: 'r_aesthetic',
    title: '审美偏好',
    description: '你最喜欢的电影或艺术作品类型通常是？',
    options: [
      {
        id: 'A',
        text: '烧脑悬疑、硬科幻或哲学思辨类',
        aspect: 'Lantern',
        value: 2,
        flavorText: '你喜欢智力上的挑战和对真理的拷问。',
        nextQuestionId: 'r_philosophy'
      },
      {
        id: 'B',
        text: '动作片、战争片或竞技题材',
        aspect: 'Edge',
        value: 2,
        flavorText: '力量、冲突和征服让你热血沸腾。',
        nextQuestionId: 'r_philosophy'
      },
      {
        id: 'C',
        text: '爱情片、唯美文艺片或感官刺激强烈的',
        aspect: 'Grail',
        value: 2,
        flavorText: '你追求美、情感和极致的体验。',
        nextQuestionId: 'r_philosophy'
      },
      {
        id: 'D',
        text: '荒诞、超现实主义或实验艺术',
        aspect: 'Moth',
        value: 2,
        flavorText: '常规让你窒息，你喜欢那些疯狂和不可名状的东西。',
        nextQuestionId: 'r_philosophy'
      },
      {
        id: 'E',
        text: '悲剧、末世题材或极简主义风格',
        aspect: 'Winter',
        value: 2,
        flavorText: '在消逝和残缺中，你看到了真正的美。',
        nextQuestionId: 'r_philosophy'
      },
      {
        id: 'F',
        text: '历史剧、传记片或史诗',
        aspect: 'Secret Histories',
        value: 2,
        flavorText: '真实发生过的故事比虚构更迷人。',
        nextQuestionId: 'r_philosophy'
      }
    ]
  },
  {
    id: 'r_philosophy',
    title: '人生信条',
    description: '最后，你觉得人这一生，最重要的是？',
    options: [
      {
        id: 'A',
        text: '看清世界的真相，活得明白',
        aspect: 'Lantern',
        value: 3,
        flavorText: '哪怕真相是残酷的，也比在虚假的幸福中沉睡要好。',
        nextQuestionId: 'r_dreams'
      },
      {
        id: 'B',
        text: '体验各种滋味，活得精彩',
        aspect: 'Grail',
        value: 3,
        flavorText: '人生苦短，及时行乐。',
        nextQuestionId: 'r_dreams'
      },
      {
        id: 'C',
        text: '创造出属于自己的东西，活得有力',
        aspect: 'Forge',
        value: 3,
        flavorText: '世界是可以被改变的，而你就是那个改变者。',
        nextQuestionId: 'r_dreams'
      },
      {
        id: 'D',
        text: '接受一切的发生，活得平静',
        aspect: 'Winter',
        value: 3,
        flavorText: '万物终将归于寂静，学会放手是最大的智慧。',
        nextQuestionId: 'r_dreams'
      },
      {
        id: 'E',
        text: '不断变化和适应，活得自由',
        aspect: 'Moth',
        value: 3,
        flavorText: '不要定义我，我时刻都在成为新的自己。',
        nextQuestionId: 'r_dreams'
      }
    ]
  },
  {
    id: 'r_dreams',
    title: '梦境的启示',
    description: '你经常做什么样的梦？或者你希望在梦中看到什么？',
    options: [
      {
        id: 'A',
        text: '飞翔、坠落、蜕变，或者变成其他生物',
        aspect: 'Moth',
        value: 2,
        flavorText: '在梦中，你摆脱了肉体的束缚，回归了混乱的本质。',
        nextQuestionId: 'r_failure'
      },
      {
        id: 'B',
        text: '重复的走廊、打不开的门、或者寻找某种伤口',
        aspect: 'Knock',
        value: 2,
        flavorText: '你直觉地知道，梦是通往另一个世界的裂隙。',
        nextQuestionId: 'r_failure'
      },
      {
        id: 'C',
        text: '宏大的图书馆、古老的城市、或者历史事件的重演',
        aspect: 'Secret Histories',
        value: 2,
        flavorText: '你在梦中漫步于漫宿的林地，阅读着被遗忘的历史。',
        nextQuestionId: 'r_failure'
      },
      {
        id: 'D',
        text: '被追杀、激烈的战斗、或者在废墟中求生',
        aspect: 'Edge',
        value: 2,
        flavorText: '即使在梦中，你的斗争本能也从未停歇。',
        nextQuestionId: 'r_failure'
      },
      {
        id: 'E',
        text: '温暖的光芒、被爱包围、或者治愈的场景',
        aspect: 'Heart',
        value: 2,
        flavorText: '你的潜意识在自我修复，维持着生命的律动。',
        nextQuestionId: 'r_failure'
      }
    ]
  },
  {
    id: 'r_failure',
    title: '面对失败',
    description: '当你搞砸了一件非常重要的事情，你的第一反应是？',
    options: [
      {
        id: 'A',
        text: '彻底拆解复盘，找出每一个错误的步骤，确保下次不再犯',
        aspect: 'Forge',
        value: 2,
        flavorText: '失败是燃料，燃烧它，锻造出更完美的自己。',
        nextQuestionId: 'r_relationship'
      },
      {
        id: 'B',
        text: '陷入自责和沉默，需要很长时间来消化这种冰冷的感觉',
        aspect: 'Winter',
        value: 2,
        flavorText: '你接受了结局。在沉默中，你学会了忍受。',
        nextQuestionId: 'r_relationship'
      },
      {
        id: 'C',
        text: '理性分析原因，将其视为获取数据的必要成本',
        aspect: 'Lantern',
        value: 2,
        flavorText: '没有失败，只有反馈。理智让你免于情绪的干扰。',
        nextQuestionId: 'r_relationship'
      },
      {
        id: 'D',
        text: '承认自己的欲望或贪婪导致了失误，并接受这种不完美',
        aspect: 'Grail',
        value: 2,
        flavorText: '跌倒也是一种体验。你品尝着失败的苦涩，正如品尝成功的甘甜。',
        nextQuestionId: 'r_relationship'
      },
      {
        id: 'E',
        text: '试图掩盖、或者用另一个谎言来弥补',
        aspect: 'Knock',
        value: 2,
        flavorText: '真相是可以被重塑的，只要你手段足够高明。',
        nextQuestionId: 'r_relationship'
      }
    ]
  },
  {
    id: 'r_relationship',
    title: '理想的羁绊',
    description: '你认为最理想的亲密关系（伴侣或挚友）应该是怎样的？',
    options: [
      {
        id: 'A',
        text: '互相吞噬，合二为一，极致的占有和激情',
        aspect: 'Grail',
        value: 3,
        flavorText: '你渴望彻底的融合，哪怕这意味着毁灭。'
      },
      {
        id: 'B',
        text: '互相守护，提供源源不断的支持和安全感',
        aspect: 'Heart',
        value: 3,
        flavorText: '在这个残酷的世界里，你们是彼此的避难所。'
      },
      {
        id: 'C',
        text: '并肩作战，是可以把后背交给对方的战友',
        aspect: 'Edge',
        value: 3,
        flavorText: '信任建立在共同的斗争中。你们是彼此最锋利的刀。'
      },
      {
        id: 'D',
        text: '互相启迪，在智识和精神上共同进步',
        aspect: 'Lantern',
        value: 3,
        flavorText: '你们是彼此的光，照亮了通往更高境界的路。'
      },
      {
        id: 'E',
        text: '保持距离，互相尊重对方的独立和秘密',
        aspect: 'Winter',
        value: 3,
        flavorText: '最好的陪伴是静默的。你们懂得欣赏彼此的孤独。'
      },
      {
        id: 'F',
        text: '共同探索未知，一起打破常规和禁忌',
        aspect: 'Moth',
        value: 3,
        flavorText: '你们是共舞的飞蛾，一起扑向那不可知的火焰。'
      }
    ]
  }
];
