import { Lunar, Solar } from 'lunar-javascript';
import { YI_ACTIVITIES, JI_ACTIVITIES } from '../data/almanac';

interface AlmanacEntry {
  date: string;
  dateCn: string;
  lunarText: string;
  lunarTextCn: string;
  yi: string;
  ji: string;
}

// 简单的字符串哈希函数，用于生成伪随机数
function stringHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// 基于日期种子的伪随机数生成器
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const LATIN_MONTHS = [
  "IANUARIUS", "FEBRUARIUS", "MARTIUS", "APRILIS", "MAIUS", "IUNIUS",
  "IULIUS", "AUGUSTUS", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const LATIN_WEEKDAYS = [
  "DIES SOLIS", "DIES LUNAE", "DIES MARTIS", "DIES MERCURII", 
  "DIES IOVIS", "DIES VENERIS", "DIES SATURNI"
];

const CONSTELLATION_MAP: Record<string, string> = {
  "白羊": "ARIES", "金牛": "TAURUS", "双子": "GEMINI", "巨蟹": "CANCER",
  "狮子": "LEO", "处女": "VIRGO", "天秤": "LIBRA", "天蝎": "SCORPIO",
  "射手": "SAGITTARIUS", "摩羯": "CAPRICORN", "水瓶": "AQUARIUS", "双鱼": "PISCES"
};

function toRoman(num: number): string {
  const lookup: Record<string, number> = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let roman = '';
  for ( let i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

export function getAlmanacForDate(date: Date = new Date()): AlmanacEntry {
  const lunar = Lunar.fromDate(date);
  const solar = Solar.fromDate(date);
  
  // 获取干支纪日，例如 "甲子"
  // 我们使用日柱干支作为随机种子的一部分
  const dayGanZhi = lunar.getDayInGanZhi();
  
  // 构造种子 key
  const dateKey = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${dayGanZhi}`;
  const seed = stringHash(dateKey);

  // 使用种子随机选择宜忌
  const yiIndex = Math.floor(seededRandom(seed) * YI_ACTIVITIES.length);
  const jiIndex = Math.floor(seededRandom(seed + 12345) * JI_ACTIVITIES.length);

  // 构造密教/西式神秘风格日期
  // ANNO MMXXV · MENSIS DECEMBER · DIES XVIII
  const yearRoman = toRoman(date.getFullYear());
  const monthLatin = LATIN_MONTHS[date.getMonth()];
  const dayRoman = toRoman(date.getDate());
  
  const mainDate = `ANNO ${yearRoman} · MENSIS ${monthLatin} · DIES ${dayRoman}`;
  const mainDateCn = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  
  // 副标题：星期 + 星座
  // DIES IOVIS · SOL IN SAGITTARIUS
  const weekDay = LATIN_WEEKDAYS[date.getDay()];
  const constellationCn = solar.getXingZuo();
  const constellationLatin = CONSTELLATION_MAP[constellationCn] || "UNKNOWN";
  
  const subDate = `${weekDay} · SOL IN ${constellationLatin}`;
  const subDateCn = `星期${"日一二三四五六"[date.getDay()]} · 太阳位于${constellationCn}座`;
  
  return {
    date: mainDate,
    dateCn: mainDateCn,
    lunarText: subDate,
    lunarTextCn: subDateCn,
    yi: YI_ACTIVITIES[yiIndex],
    ji: JI_ACTIVITIES[jiIndex]
  };
}
