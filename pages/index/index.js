Page({
  data: {
    currentTab: 'metabolism',
    tabs: [
      { id: 'metabolism', name: '代谢机制', icon: '⚗️' },
      { id: 'diet', name: '饮食结构', icon: '🥗' },
      { id: 'training', name: '训练策略', icon: '🏋️' },
      { id: 'combined', name: '同步vs分开', icon: '⚡' },
      { id: 'summary', name: '实操指南', icon: '📋' }
    ],
    // 减脂代谢路径
    fatFlow: [
      { icon: '🍽️', title: '能量缺口', desc: '摄入 < 消耗，触发脂肪分解', bg: '#FFEBEE' },
      { icon: '📉', title: '胰岛素降低', desc: '抑制脂肪合成信号', bg: '#FFF3E0' },
      { icon: '🔓', title: '脂解激活', desc: 'HSL酶激活，释放脂肪酸', bg: '#FFF8E1' },
      { icon: '⚡', title: 'β氧化', desc: '脂肪酸→ATP供能', bg: '#F3E5F5' }
    ],
    // 增肌代谢路径
    muscleFlow: [
      { icon: '🏋️', title: '机械张力', desc: '力量训练造成肌肉微损伤', bg: '#E8F5E9' },
      { icon: '🔑', title: 'mTOR激活', desc: '合成代谢信号通路启动', bg: '#E3F2FD' },
      { icon: '🧬', title: '蛋白合成', desc: 'MPS > MPB，肌肉蛋白净合成', bg: '#E8F5E9' },
      { icon: '💪', title: '肌纤维增粗', desc: '卫星细胞参与肌肉修复生长', bg: '#F3E5F5' }
    ],
    // 能量底物数据
    substrateData: [
      { title: '休息状态', value: 60, label: '脂肪 60%', sublabel: 'RQ≈0.75' },
      { title: '低强度有氧', value: 75, label: '脂肪 75%', sublabel: 'RQ≈0.70' },
      { title: '中强度有氧', value: 55, label: '脂肪 55%', sublabel: 'RQ≈0.80' },
      { title: '高强度有氧', value: 25, label: '脂肪 25%', sublabel: 'RQ≈0.95' },
      { title: '力量训练', value: 20, label: '脂肪 20%', sublabel: 'RQ≈0.98' }
    ],
    // 代谢参数对比表
    compareTable: [
      { indicator: '能量平衡', fat: '-300~-500 kcal/天', muscle: '+200~+500 kcal/天', note: '核心差异' },
      { indicator: '胰岛素水平', fat: '低（促进脂解）', muscle: '中高（促进合成）', note: '信号对抗' },
      { indicator: 'mTOR活性', fat: '受抑制', muscle: '高活性', note: 'AMPK↑→mTOR↓' },
      { indicator: '蛋白质净合成', fat: '接近零或负', muscle: '持续正值', note: '肌肉量决定' },
      { indicator: '皮质醇', fat: '偏高（分解代谢）', muscle: '训练后短暂升高', note: '慢性高皮质醇损肌' },
      { indicator: '脂肪氧化速率', fat: '高（主要供能）', muscle: '低（碳水为主）', note: '底物利用相反' }
    ],
    // KPI卡片
    kpiCards: [
      { value: 'AMPK', label: '能量感受器 能量缺乏时激活', theme: 'fat' },
      { value: 'mTOR', label: '合成代谢核心 能量充足时激活', theme: 'muscle' },
      { value: '胰岛素', label: '双刃激素 促肌合成/抑制脂解', theme: 'protein' },
      { value: '皮质醇', label: '分解代谢激素 热量亏缺时升高', theme: 'carb' }
    ],
    // 蛋白质摄入数据
    proteinData: [
      { label: '0.8 g/kg', value: 20, color: '#4ECDC4' },
      { label: '1.2 g/kg', value: 55, color: '#4ECDC4' },
      { label: '1.6 g/kg ✓', value: 88, color: '#4ECDC4' },
      { label: '2.0 g/kg ✓', value: 99, color: '#4ECDC4' }
    ],
    // 训练方式对比
    trainingCompare: [
      { name: '力量训练', burn: 56, epoc: 48, fat: 25, burnVal: '450', epocVal: '120', fatVal: '25%' },
      { name: 'HIIT', burn: 75, epoc: 80, fat: 35, burnVal: '600', epocVal: '200', fatVal: '35%' },
      { name: '中强度有氧', burn: 60, epoc: 20, fat: 55, burnVal: '480', epocVal: '50', fatVal: '55%' }
    ],
    // EPOC数据
    epocData: [
      { value: '200~', label: 'HIIT额外消耗', sublabel: 'EPOC 6-24h', theme: 'fat' },
      { value: '100~', label: '力量训练消耗', sublabel: 'EPOC 24-48h', theme: 'muscle' },
      { value: '50~', label: '中强度有氧', sublabel: 'EPOC 1-3h', theme: 'protein' },
      { value: '25~', label: '低强度有氧', sublabel: 'EPOC ~30min', theme: 'carb' }
    ],
    // 身体成分变化
    bodyComp: [
      { name: '纯有氧组', fat: 70, fatVal: '-3.5kg', muscle: 15, muscleVal: '-0.5kg' },
      { name: '纯力量组', fat: 30, fatVal: '-1.5kg', muscle: 85, muscleVal: '+2.8kg' },
      { name: '力量+有氧⭐', fat: 84, fatVal: '-4.2kg', muscle: 65, muscleVal: '+2.2kg' },
      { name: '不运动❌', fat: 80, fatVal: '-4.0kg', muscle: 70, muscleVal: '-2.5kg' }
    ],
    // 决策卡片
    decisions: [
      { title: '体脂偏高', subtitle: '男 ≥18% / 女 ≥28%', tag: '首要任务：减脂', tagClass: 'red', content: '热量亏缺 -300~500kcal\n保持力量训练保肌\n蛋白质 ≥1.8g/kg\n有氧辅助2-3次/周', borderColor: '#FF6B6B' },
      { title: '体脂适中（新手）', subtitle: '男 15-20% / 女 22-28%', tag: '推荐：身体重组', tagClass: 'purple', content: '热量±0 或轻微亏缺\n力量训练为核心\n蛋白质 ≥1.8g/kg\n可同步减脂增肌', borderColor: '#6C63FF' },
      { title: '体脂理想（进阶）', subtitle: '男 10-15% / 女 18-24%', tag: '推荐：分期增肌', tagClass: 'green', content: 'Lean Bulk：+200~300kcal\n蛋白质 1.6~2.0g/kg\n碳水充足支持训练\n周期性Mini Cut', borderColor: '#4ECDC4' },
      { title: '体脂偏低', subtitle: '男 <10% / 女 <16%', tag: '不宜继续减脂', tagClass: 'orange', content: '进入增肌期或维持\n增加热量摄入\n关注激素水平\n监测健康指标', borderColor: '#FFA07A' }
    ],
    // 减脂周计划
    cutPlan: [
      { day: '周一', training: '力量（推）', diet: '训练后补碳水+蛋白' },
      { day: '周二', training: 'LISS有氧40-50min', diet: '低碳日' },
      { day: '周三', training: '力量（拉）', diet: '训练后补碳水+蛋白' },
      { day: '周四', training: '休息/轻有氧', diet: '低热量高蛋白' },
      { day: '周五', training: '力量（腿）', diet: '训练前后最多碳水' },
      { day: '周六', training: 'HIIT 20-30min', diet: '低碳日' },
      { day: '周日', training: '完全休息', diet: '维持热量' }
    ],
    // 增肌周计划
    bulkPlan: [
      { day: '周一', training: '力量（推）', diet: '全天热量充足' },
      { day: '周二', training: '力量（拉）', diet: '全天热量充足' },
      { day: '周三', training: '主动恢复', diet: '适度控制' },
      { day: '周四', training: '力量（腿）', diet: '训练前后最多碳水' },
      { day: '周五', training: '力量（推拉结合）', diet: '全天热量充足' },
      { day: '周六', training: '有氧（选做）', diet: '维持热量' },
      { day: '周日', training: '完全休息', diet: '适度减少' }
    ],
    // 营养素速查
    nutrients: [
      { value: '1.6~2.4', label: '蛋白质', sublabel: 'g/kg/天', theme: 'protein' },
      { value: '3~7', label: '碳水', sublabel: 'g/kg/天', theme: 'carb' },
      { value: '20~35%', label: '脂肪', sublabel: '占热量≥15%', theme: 'fat' },
      { value: '7~9h', label: '睡眠', sublabel: 'GH分泌高峰', theme: 'muscle' }
    ],
    // 结论
    conclusions: [
      { icon: '1️⃣', text: '能量平衡主导，宏量素辅助——总热量决定方向，比例决定成分', type: 'info' },
      { icon: '2️⃣', text: '蛋白质是两个阶段的共同保障——≥1.6g/kg是核心前提', type: 'success' },
      { icon: '3️⃣', text: '生理矛盾真实存在——AMPK-mTOR互斥，但特定条件下可一定程度同步', type: 'warning' },
      { icon: '4️⃣', text: '力量训练是核心支柱——减脂保肌、增肌促合成，有氧是辅助', type: 'info' },
      { icon: '5️⃣', text: '进阶者推荐分期——Lean Bulk + Cut效率高于同步', type: 'success' },
      { icon: '6️⃣', text: '睡眠和压力管理被低估——慢性高皮质醇是停滞的常见隐因', type: 'danger' }
    ]
  },

  switchTab(e) {
    const tabId = e.currentTarget.dataset.id
    this.setData({ currentTab: tabId })
  }
})
