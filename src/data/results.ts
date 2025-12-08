import type { Aspect } from '../types';

export interface Judgment {
  title: string;
  description: string;
  motto: string;
  tarotCard: string;
}

export const ASPECT_JUDGMENTS: Record<Aspect, Judgment> = {
  'Lantern': {
    title: '辉光之子 (Child of the Glory)',
    description: '你的灵魂中燃烧着一种无情的理智。对你而言，世界不是用来感受的，而是用来解析的。你无法容忍阴影中的秘密，正如烛火无法容忍黑暗。你的目光锐利，有时甚至灼人。你追求的真理可能并不仁慈，但它绝对真实。在漫宿的高处，你俯瞰众生，不仅看见了他们的血肉，更看见了他们苍白的骨骼。',
    motto: '“仁慈仅存在于阴影之中；而辉光之下，无所遁形。”',
    tarotCard: 'XX - JUDGEMENT'
  },
  'Forge': {
    title: '塑形者 (The Shaper)',
    description: '你明白世界并非恒久不变，它只是等待被重塑的原材料。你拥有改变现状的野心与力量，哪怕这往往伴随着破坏。你不仅是火焰，也是铁锤；你不仅是燃料，也是引擎。安逸对你来说是一种慢性毒药，唯有在剧烈的变革与创造中，你才能感受到自己真正活着。',
    motto: '“火是变迁，我们亦然。世界将被锻造。”',
    tarotCard: 'IV - THE EMPEROR'
  },
  'Edge': {
    title: '征服者 (The Conqueror)',
    description: '你深知生存的本质即是斗争。无论是在言语的交锋中，还是在意志的角力里，你从不退缩。你敏锐地察觉到他人的弱点，并非出于恶意，而是出于本能。痛苦对你而言不是阻碍，而是磨刀石。你行走在刀锋之上，享受着那种时刻可能坠落、却依然掌控局面的战栗。',
    motto: '“每一场对话都是一次交锋，每一次呼吸都是一场掠夺。”',
    tarotCard: 'VII - THE CHARIOT'
  },
  'Winter': {
    title: '悼亡者 (The Mourner)',
    description: '你属于寂静，属于结束，属于那些被遗忘的角落。你并不畏惧死亡或终结，因为你明白那是万物必然的归宿。你的内心如同一片落雪的荒原，寒冷、纯净且安宁。你善于保守秘密，也善于在喧嚣中保持沉默。当其他人恐惧黑夜时，你却在苍白的月光下找到了安宁。',
    motto: '“白雪不语，却掩埋一切。”',
    tarotCard: 'XIII - DEATH'
  },
  'Heart': {
    title: '存续者 (The Preserver)',
    description: '你拥有令人惊叹的生命力与韧性。无论面对何种风暴，你总能屹立不倒。你不仅保护自己，也庇护他人。你的力量并非来自破坏，而来自坚持——像雷鸣般永不停歇的心跳，像春天里顽强生长的野草。你拒绝接受终结，你用欢愉、舞蹈和坚定的信念对抗着漫宿的寒风。',
    motto: '“雷鸣不息，我亦不止。生命本身就是对虚无的反抗。”',
    tarotCard: '0 - THE FOOL'
  },
  'Grail': {
    title: '渴慕者 (The Yearning)',
    description: '你是一个巨大的容器，永远渴望着被填满。无论是感官的欢愉、情感的羁绊，还是鲜活的生命体验，你都贪婪地汲取着。你敏锐地感知着他人的欲望，并能轻易地操纵它们。对你来说，平庸是最大的罪恶。你追求极致的体验，哪怕那意味着要在蜜糖中品尝毒药。',
    motto: '“饥饿是存在的证明。我们要么吞噬，要么被吞噬。”',
    tarotCard: 'III - THE EMPRESS'
  },
  'Moth': {
    title: '漫游者 (The Wanderer)',
    description: '你的灵魂属于林地，混乱而自由。你拒绝被定义，拒绝被形状束缚。你总是凭直觉行事，像飞蛾扑火般追逐着那些不可名状的光芒。你明白蜕变的痛苦与狂喜，为了成为新的自己，你随时准备抛弃旧的皮囊。在你的眼中，世界是一场疯狂的假面舞会，而你是唯一不肯摘下面具的舞者。',
    motto: '“剪去头发，剪去指甲，剪去名字。在混乱中，我们获得自由。”',
    tarotCard: 'XVIII - THE MOON'
  },
  'Knock': {
    title: '洞察者 (The Opener)',
    description: '你着迷于界限，以及如何打破它们。对你而言，每一扇门都是一种挑衅，每一个伤口都是一个机会。你看见了世界结构中的裂缝，并渴望窥探裂缝背后的东西。你既不属于屋内，也不属于屋外，你永远站在门槛之上。你是那个在午夜敲门的人，是那个将钥匙转动的人。',
    motto: '“所有的墙都有缝隙，所有的门都是伤口。”',
    tarotCard: 'II - THE HIGH PRIESTESS'
  },
  'Secret Histories': {
    title: '记录者 (The Chronicler)',
    description: '你行走在多重历史的交汇点。你明白过去并非只有一种，真相往往由谎言编织而成。你博学、冷静，像一位图书管理员整理着世界的碎片。你并不急于干涉，而是倾向于观察与记录。你知道知识是有重量的，而你甘愿背负这种重量，为了让那些被遗忘的故事得以延续。',
    motto: '“历史是一张由谎言编织的挂毯，而我们手握针线。”',
    tarotCard: 'XXI - THE WORLD'
  }
};

export const SPECIAL_COMBINATIONS: Record<string, Judgment> = {
  // Lantern Combinations
  'Lantern+Winter': {
    title: '暮光圣徒 (The Twilight Saint)',
    description: '辉光已逝，唯余美丽。你明白辉煌终将落幕，并在那凄美的余晖中找到了自己的位置。你既是光芒，也是光芒死去的寒冷。你的力量源自于接受衰败，在结束中寻找新的开始。',
    motto: '“美即是终结。”',
    tarotCard: 'XVI - THE TOWER'
  },
  'Lantern+Forge': {
    title: '光辉暴君 (The Radiant Tyrant)',
    description: '烈火与光芒。你是纯粹的能量，是毫不留情的创造力。你的存在本身就是对停滞的宣战，你燃烧自己，也点燃周围的一切。你的道路是辉煌的，但也可能是短暂的。',
    motto: '“燃烧即是存在。”',
    tarotCard: 'XIX - THE SUN'
  },
  'Lantern+Secret Histories': {
    title: '先知 (The Prophet)',
    description: '你不仅看见了真理，还看见了真理在时间长河中的倒影。你知晓过去如何导致现在，现在又将如何通向未来。你的理智穿越了历史的迷雾，看见了唯一的路径。',
    motto: '“我看见了必然。”',
    tarotCard: 'II - THE HIGH PRIESTESS'
  },

  // Forge Combinations
  'Forge+Edge': {
    title: '偶像破坏者 (The Iconoclast)',
    description: '你不仅想要重塑世界，更想要粉碎旧的秩序。你是狮子铁匠的宠儿，你的锤炼伴随着冲突与抗争。你拒绝一切权威，除非那权威是你亲手锻造的。',
    motto: '“我不再侍奉。”',
    tarotCard: 'XI - JUSTICE'
  },
  'Forge+Winter': {
    title: '灰烬行者 (The Ash-Walker)',
    description: '你明白火焰终将熄灭，而你拥抱这种必然。你在毁灭中寻找宁静，在燃烧后的灰烬中发现美。你的锻造不是为了创造永恒，而是为了加速终结。',
    motto: '“一切终归尘土。”',
    tarotCard: 'XX - JUDGEMENT'
  },

  // Edge Combinations
  'Edge+Winter': {
    title: '守夜人 (The Sentinel)',
    description: '你划定界限。你将世界分为“内”与“外”，“我”与“非我”。你的仁慈是冰冷的，你的保护是致命的。你守望着门槛，任何越界者都将面临你的审判。你不仅是战士，更是守门人。',
    motto: '“界限必须被划定，哪怕是用血。”',
    tarotCard: 'IV - THE EMPEROR'
  },
  'Edge+Heart': {
    title: '决斗者 (The Duelist)',
    description: '你享受战斗，不是为了杀戮，而是为了那种鲜活的生命感。每一次交锋都让你的心脏跳动得更加剧烈。你在冲突中舞蹈，在危险中欢笑。',
    motto: '“生命即是斗争。”',
    tarotCard: 'VII - THE CHARIOT'
  },

  // Winter Combinations
  'Winter+Knock': {
    title: '引渡者 (The Psychopomp)',
    description: '你站在生与死的门槛上。你并不恐惧死亡，因为你知道那只是一扇门。你引导迷途的灵魂，打开通往寂静的通道。你是最后的守门人。',
    motto: '“门已开，请安息。”',
    tarotCard: 'XIII - DEATH'
  },
  'Winter+Edge': {
    title: '处刑人 (The Executioner)',
    description: '你是终结的执行者。你没有恶意，只有职责。当事物必须结束时，你挥下刀锋。你的冷酷是一种慈悲，因为你缩短了痛苦。',
    motto: '“这是必要的终结。”',
    tarotCard: 'XI - JUSTICE'
  },

  // Heart Combinations
  'Heart+Grail': {
    title: '爱人 (The Lover)',
    description: '生命与欲望在你体内交织。你热爱这个世界，热爱其中的一切快感与痛楚。你的爱是无尽的，你的渴望也是无尽的。你是永恒的脉动，是鲜红的诱惑。',
    motto: '“我们结合，我们永生。”',
    tarotCard: 'VI - THE LOVERS'
  },
  'Heart+Moth': {
    title: '舞者 (The Dancer)',
    description: '你听到了鼓声，于是你起舞。你不在乎方向，只在乎律动。你在混乱中保持着生命的活力，在蜕变中寻找永恒的节奏。',
    motto: '“不要停下，直到心脏停止。”',
    tarotCard: '0 - THE FOOL'
  },

  // Grail Combinations
  'Grail+Moth': {
    title: '蜕变者 (The Changeling)',
    description: '混乱的饥渴。你不仅想要吞噬世界，还想在吞噬中不断变化。你是一场永不散场的狂欢，是午夜森林中带血的盛宴。你追求的不仅仅是满足，而是通过满足来蜕变。',
    motto: '“我们饮下，我们改变。”',
    tarotCard: 'III - THE EMPRESS'
  },
  'Grail+Edge': {
    title: '掠夺者 (The Ravager)',
    description: '你想要的东西，你会亲手去拿。你的欲望伴随着暴力，你的征服伴随着快感。你是战场上的饕餮，吞噬着败者的力量。',
    motto: '“强者通吃。”',
    tarotCard: 'XV - THE DEVIL'
  },

  // Moth Combinations
  'Moth+Knock': {
    title: '穿林者 (The Wood-Walker)',
    description: '你知道林地中的捷径。你穿过树木，穿过伤口，穿过梦境。没有墙能挡住你，因为你随时可以变成别的东西。',
    motto: '“我在缝隙中行走。”',
    tarotCard: 'XVIII - THE MOON'
  },
  'Moth+Lantern': {
    title: '寻光者 (The Light-Seeker)',
    description: '你像飞蛾扑火一样追逐真理。你知道那光芒会灼伤你，但你无法抗拒。你在疯狂与理智的边缘徘徊，寻找那最终的启示。',
    motto: '“为了光，我愿燃烧。”',
    tarotCard: 'IX - THE HERMIT'
  },

  // Knock Combinations
  'Knock+Secret Histories': {
    title: '考古学家 (The Archaeologist)',
    description: '你挖掘过去，打开尘封的墓穴。你知道每一个秘密都是一把钥匙，每一段历史都是一扇门。你揭示那些被埋藏的真相。',
    motto: '“过去从未死去，它只是被锁住了。”',
    tarotCard: 'XXI - THE WORLD'
  },
  'Knock+Void': { // Placeholder for pure Knock or specific interactions
     title: '伤口 (The Wound)',
     description: '你本身就是一道裂痕。',
     motto: '“我开。”',
     tarotCard: 'XVI - THE TOWER'
  },

  // Secret Histories Combinations
  'Secret Histories+Lantern': {
    title: '图书管理员 (The Librarian)',
    description: '你守护着知识，整理着光芒的碎片。你明白秩序的重要性，即使是在混乱的历史中。你用理智的光芒照亮过去的阴影。',
    motto: '“知识即是光。”',
    tarotCard: 'V - THE HIEROPHANT'
  }
};

export const REALITY_JUDGMENTS: Record<Aspect, Judgment> = {
  'Lantern': {
    title: '清醒的智者 (The Lucid Sage)',
    description: '在喧嚣的现代生活中，你是一座孤岛般的灯塔。你拒绝被情绪裹挟，拒绝盲从大众。你用逻辑的手术刀解剖每一个问题，追求绝对的理性与真相。对你而言，世界是一道复杂的谜题，而你致力于找到那个唯一的解。你的冷静常被误解为冷漠，但你知道，唯有清醒，才能自由。',
    motto: '“在混沌的洪流中，理智是唯一的方舟。”',
    tarotCard: 'IX - THE HERMIT'
  },
  'Forge': {
    title: '不息的工匠 (The Restless Artisan)',
    description: '你无法忍受停滞。你的生命力体现在“改变”上——改变环境、改变规则、改变自己。你是一个实干家，相信行动胜过一切空谈。无论是事业上的野心，还是生活中的创造，你总是那个推动齿轮转动的人。你燃烧着自己，也点燃了周围的世界。',
    motto: '“世界不会自己变好，除非我们亲手去锻造它。”',
    tarotCard: 'I - THE MAGICIAN'
  },
  'Edge': {
    title: '无畏的先锋 (The Fearless Vanguard)',
    description: '你将生活视为一场竞技场。挑战不会让你退缩，只会让你兴奋。你拥有敏锐的直觉和强大的执行力，善于在冲突中寻找机会。你并不一定好战，但你绝不畏战。在逆境中，你是那个最先站出来，也是最后倒下的人。你的锋芒是你最好的铠甲。',
    motto: '“风暴来临时，我便是风暴。”',
    tarotCard: 'VII - THE CHARIOT'
  },
  'Winter': {
    title: '沉静的隐士 (The Quiet Hermit)',
    description: '在这个过度喧哗的时代，你懂得沉默的力量。你并不厌世，只是更享受独处的宁静。你拥有一种超然的气质，能够接受失去、结束和不完美。你像冬日的雪一样，掩盖了世界的嘈杂，在内心深处构建了一个纯净、安宁的避难所。',
    motto: '“万物终将归于寂静，而我在寂静中听见真理。”',
    tarotCard: 'II - THE HIGH PRIESTESS'
  },
  'Heart': {
    title: '坚韧的守护者 (The Resilient Guardian)',
    description: '你是这个世界的基石。你拥有强大的包容力和生命力，能够消化痛苦，传递温暖。你重视连接，珍视关系，是家人和朋友最坚实的后盾。你的力量不在于进攻，而在于守护——守护那些微小的幸福，守护生活的常态，守护人性的光辉。',
    motto: '“只要心跳还在，希望就在。”',
    tarotCard: 'III - THE EMPRESS'
  },
  'Grail': {
    title: '热烈的体验者 (The Passionate Experiencer)',
    description: '你拒绝平庸。对你来说，活着就是为了体验——体验极致的快乐，体验深刻的痛苦，体验爱与被爱。你是感官的信徒，追求美、艺术和一切能让灵魂颤栗的事物。你像一杯浓烈的酒，让周围的人也随之沉醉。你活在当下，活得热烈而鲜活。',
    motto: '“若不极致地燃烧，便如同从未活过。”',
    tarotCard: 'XV - THE DEVIL'
  },
  'Moth': {
    title: '自由的流浪者 (The Free Wanderer)',
    description: '你是一阵抓不住的风。你拒绝被标签定义，拒绝被规则束缚。你的思维跳跃，充满了天马行空的想象力。你总是渴望远方，渴望变化，渴望成为不同的自己。在别人眼中你可能有些疯狂或不切实际，但你知道，那是你灵魂在飞翔。',
    motto: '“不要问我去向何方，我的归宿在风中。”',
    tarotCard: '0 - THE FOOL'
  },
  'Knock': {
    title: '敏锐的破局者 (The Keen Breaker)',
    description: '你拥有一种独特的洞察力，总能看到别人忽视的“门”。你擅长寻找捷径，打破常规，解决那些看似无解的问题。你游走在规则的边缘，连接着不同的圈子和资源。对你来说，没有绝对的墙，只有还没找到的钥匙。',
    motto: '“没有死局，只有未被发现的出口。”',
    tarotCard: 'X - WHEEL OF FORTUNE'
  },
  'Secret Histories': {
    title: '深邃的记录者 (The Profound Chronicler)',
    description: '你是一个怀旧的人，也是一个博学的人。你珍视记忆，无论是自己的还是集体的。你喜欢探究事物的来龙去脉，从历史中汲取智慧。在这个快节奏的遗忘时代，你是那个默默拾起碎片、拼凑真相的人。你的内心是一座图书馆，藏着无数的故事。',
    motto: '“我们由记忆构成，遗忘即是死亡。”',
    tarotCard: 'V - THE HIEROPHANT'
  }
};

export const REALITY_COMBINATIONS: Record<string, Judgment> = {
  'Lantern+Winter': {
    title: '冷峻的观察者 (The Cold Observer)',
    description: '理智与静默的结合。你像一台精密的仪器，冷静地观察着这个世界，不带偏见，也不带情感。你洞悉人性，却保持距离。',
    motto: '“旁观者清。”',
    tarotCard: 'IV - THE EMPEROR'
  },
  'Lantern+Forge': {
    title: '理性的变革者 (The Rational Reformer)',
    description: '你拥有清晰的蓝图和强大的执行力。你不仅知道什么是对的，还有能力去实现它。你是推动社会进步的中坚力量。',
    motto: '“知行合一。”',
    tarotCard: 'VIII - STRENGTH'
  },
  'Forge+Edge': {
    title: '野心的征服者 (The Ambitious Conqueror)',
    description: '行动力与竞争心的完美融合。你在事业上势不可挡，为了目标可以排除万难。你是天生的领袖和赢家。',
    motto: '“胜者为王。”',
    tarotCard: 'IV - THE EMPEROR'
  },
  'Heart+Grail': {
    title: '深情的伴侣 (The Devoted Lover)',
    description: '你拥有丰富的情感和无尽的爱意。你懂得如何去爱，也渴望被爱。你是最温柔的情人，也是最忠诚的朋友。',
    motto: '“爱是万物的答案。”',
    tarotCard: 'VI - THE LOVERS'
  },
  'Moth+Knock': {
    title: '灵动的投机者 (The Agile Speculator)',
    description: '你思维敏捷，身手灵活。你总能在混乱中找到机会，在危机中全身而退。你是生活中的魔术师。',
    motto: '“变幻莫测。”',
    tarotCard: 'I - THE MAGICIAN'
  },
  'Secret Histories+Lantern': {
    title: '博学的导师 (The Erudite Mentor)',
    description: '你知识渊博，见解独到。你乐于分享你的智慧，指引他人走出迷茫。你是照亮他人前路的灯塔。',
    motto: '“薪火相传。”',
    tarotCard: 'IX - THE HERMIT'
  },
  'Winter+Edge': {
    title: '冷酷的执行者 (The Ruthless Executor)',
    description: '你话不多，但行事果决。在关键时刻，你能摒弃情感的干扰，做出最艰难的决定。你是最可靠的利刃。',
    motto: '“沉默是金，行动是铁。”',
    tarotCard: 'XI - JUSTICE'
  }
};
