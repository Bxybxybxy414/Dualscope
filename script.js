const dimensions = [
  { key: "workload", label: "课程负荷", weight: 18 },
  { key: "value", label: "学位含金量", weight: 22 },
  { key: "difficulty", label: "申请难度", weight: 14 },
  { key: "cost", label: "成本友好", weight: 14 },
  { key: "career", label: "职业相关", weight: 22 },
  { key: "fit", label: "个人兴趣", weight: 10 },
];

const programs = [
  {
    id: "duke-kunshan-undergrad",
    title: "跨学科本科双学位",
    schools: "昆山杜克大学 × Duke University",
    discipline: "interdisciplinary",
    workload: "medium",
    budget: "high",
    difficulty: "high",
    credential: "DKU 学士 + Duke 学士",
    sourceName: "Duke Kunshan",
    sourceUrl: "https://ugstudies.dukekunshan.edu.cn/",
    tags: ["交叉学科", "通识核心", "双学位"],
    scores: { workload: 78, value: 92, difficulty: 60, cost: 48, career: 84, fit: 90 },
  },
  {
    id: "nyu-shanghai-undergrad",
    title: "全球网络本科双证路径",
    schools: "NYU Shanghai × New York University",
    discipline: "interdisciplinary",
    workload: "high",
    budget: "high",
    difficulty: "high",
    credential: "NYU 学位 + 中国认可学历/学位",
    sourceName: "NYU Shanghai",
    sourceUrl: "https://shanghai.nyu.edu/academics",
    tags: ["全球校区", "英文授课", "双证"],
    scores: { workload: 68, value: 90, difficulty: 58, cost: 45, career: 88, fit: 86 },
  },
  {
    id: "bnbu-hkbu-undergrad",
    title: "博雅本科双证项目",
    schools: "北师香港浸会大学 × Hong Kong Baptist University",
    discipline: "interdisciplinary",
    workload: "medium",
    budget: "medium",
    difficulty: "medium",
    credential: "BNBU 毕业证/学位 + HKBU 学位",
    sourceName: "BNBU",
    sourceUrl: "https://uic.edu.cn/en/about_us/overview/introducing.htm",
    tags: ["内地港校", "博雅教育", "双证"],
    scores: { workload: 82, value: 82, difficulty: 74, cost: 70, career: 78, fit: 84 },
  },
  {
    id: "tju-nus-chemical",
    title: "化学工程联合硕士",
    schools: "天津大学 × National University of Singapore",
    discipline: "engineering",
    workload: "high",
    budget: "high",
    difficulty: "high",
    credential: "TJU 硕士 + NUS 硕士",
    sourceName: "TJU-NUS Fuzhou",
    sourceUrl: "https://tfii.nus.edu.sg/",
    tags: ["工学", "联合学院", "双硕士"],
    scores: { workload: 58, value: 91, difficulty: 58, cost: 50, career: 86, fit: 76 },
  },
  {
    id: "mit-lgo",
    title: "MBA × 工程硕士",
    schools: "MIT Sloan × MIT School of Engineering",
    discipline: "management",
    workload: "high",
    budget: "high",
    difficulty: "medium",
    credential: "MBA + MS in Engineering",
    sourceName: "MIT LGO",
    sourceUrl: "https://lgo.mit.edu/",
    tags: ["管理学", "工程", "运营"],
    scores: { workload: 55, value: 95, difficulty: 50, cost: 42, career: 96, fit: 82 },
  },
  {
    id: "nyu-jd-mpa",
    title: "法学博士 × 公共管理硕士",
    schools: "NYU Law × NYU Wagner",
    discipline: "law",
    workload: "medium",
    budget: "high",
    difficulty: "medium",
    credential: "JD + MPA",
    sourceName: "NYU Law",
    sourceUrl: "https://www.law.nyu.edu/jdadmissions/dualdegreeprograms/jdmpaorjdmup",
    tags: ["法学", "公共管理", "城市政策"],
    scores: { workload: 60, value: 89, difficulty: 56, cost: 46, career: 84, fit: 78 },
  },
  {
    id: "duke-jd-mpp",
    title: "法学博士 × 公共政策硕士",
    schools: "Duke Law × Sanford School of Public Policy",
    discipline: "law",
    workload: "high",
    budget: "high",
    difficulty: "high",
    credential: "JD + MPP",
    sourceName: "Duke Law",
    sourceUrl: "https://law.duke.edu/apply/degreeprograms/jd-mpp/",
    tags: ["法学", "公共政策", "公共部门"],
    scores: { workload: 56, value: 90, difficulty: 52, cost: 44, career: 86, fit: 80 },
  },
  {
    id: "ucla-jd-mpp",
    title: "法学博士 × 公共政策硕士",
    schools: "UCLA School of Law × Luskin School",
    discipline: "law",
    workload: "high",
    budget: "high",
    difficulty: "high",
    credential: "JD + MPP",
    sourceName: "UCLA Law",
    sourceUrl: "https://law.ucla.edu/academics/degrees/jd-program/joint-degree",
    tags: ["法学", "政策分析", "加州资源"],
    scores: { workload: 58, value: 88, difficulty: 54, cost: 48, career: 84, fit: 78 },
  },
  {
    id: "maryland-ba-mpp",
    title: "本科 × 公共政策硕士",
    schools: "University of Maryland",
    discipline: "management",
    workload: "medium",
    budget: "low",
    difficulty: "medium",
    credential: "Bachelor's + Master of Public Policy",
    sourceName: "UMD Policy",
    sourceUrl: "https://bsos.umd.edu/undergraduate/ba-bs-bsos-mpp-school-public-policy",
    tags: ["本硕衔接", "公共政策", "成本友好"],
    scores: { workload: 78, value: 78, difficulty: 70, cost: 86, career: 80, fit: 78 },
  },
  {
    id: "miami-bshs-mph",
    title: "健康科学 × 公共卫生硕士",
    schools: "University of Miami",
    discipline: "medicine",
    workload: "medium",
    budget: "medium",
    difficulty: "medium",
    credential: "BSHS + MPH",
    sourceName: "Miami Public Health",
    sourceUrl: "https://graduatestudies.publichealth.med.miami.edu/admissions/dual-degree-programs/bshs-mph/index.html",
    tags: ["医学", "公共卫生", "加速项目"],
    scores: { workload: 72, value: 82, difficulty: 68, cost: 68, career: 84, fit: 80 },
  },
  {
    id: "unmc-biology-mph",
    title: "生物学 × 公共卫生硕士",
    schools: "University of Nebraska Medical Center",
    discipline: "medicine",
    workload: "medium",
    budget: "low",
    difficulty: "medium",
    credential: "Biology BS + MPH",
    sourceName: "UNMC",
    sourceUrl: "https://www.unmc.edu/publichealth/admissions/programs/dual-degree.html",
    tags: ["理学", "公共卫生", "本硕"],
    scores: { workload: 76, value: 78, difficulty: 72, cost: 84, career: 80, fit: 78 },
  },
  {
    id: "setonhall-chemistry-bs-ms",
    title: "化学本科 × 化学硕士",
    schools: "Seton Hall University",
    discipline: "science",
    workload: "medium",
    budget: "medium",
    difficulty: "medium",
    credential: "BS + MS in Chemistry",
    sourceName: "Seton Hall",
    sourceUrl: "https://www.shu.edu/academics/b-s-chemistry-and-m-s-chemistry.html",
    tags: ["理学", "本硕连读", "科研路径"],
    scores: { workload: 74, value: 76, difficulty: 72, cost: 72, career: 76, fit: 76 },
  },
  {
    id: "setonhall-management-engineering",
    title: "管理学 × 工程管理硕士",
    schools: "Seton Hall University × Stevens Institute of Technology",
    discipline: "management",
    workload: "medium",
    budget: "medium",
    difficulty: "medium",
    credential: "BS Management + ME Engineering Management",
    sourceName: "Seton Hall",
    sourceUrl: "https://www.shu.edu/academics/b-s-management-m-e-engineering-management.html",
    tags: ["管理学", "工程管理", "跨校合作"],
    scores: { workload: 72, value: 80, difficulty: 70, cost: 70, career: 86, fit: 78 },
  },
  {
    id: "clark-atlanta-cs-bs-ms",
    title: "计算机科学本硕双学位",
    schools: "Clark Atlanta University",
    discipline: "engineering",
    workload: "medium",
    budget: "low",
    difficulty: "medium",
    credential: "BS + MS in Computer Science",
    sourceName: "Clark Atlanta",
    sourceUrl: "https://www.cau.edu/school-of-arts-and-sciences/computer-science/",
    tags: ["工学", "计算机", "本硕"],
    scores: { workload: 76, value: 76, difficulty: 74, cost: 84, career: 86, fit: 78 },
  },
  {
    id: "ohio-state-enr-mpa",
    title: "环境自然资源 × 公共管理",
    schools: "The Ohio State University",
    discipline: "agriculture",
    workload: "medium",
    budget: "low",
    difficulty: "medium",
    credential: "MS/MENR + MPA",
    sourceName: "Ohio State SENR",
    sourceUrl: "https://senr.osu.edu/dual_combined",
    tags: ["农学", "环境政策", "公共管理"],
    scores: { workload: 74, value: 78, difficulty: 70, cost: 82, career: 78, fit: 80 },
  },
  {
    id: "drexel-accelerated-dual",
    title: "商科本科 × 硕士加速双学位",
    schools: "Drexel University LeBow College of Business",
    discipline: "economics",
    workload: "medium",
    budget: "medium",
    difficulty: "medium",
    credential: "BSBA + Master's",
    sourceName: "Drexel LeBow",
    sourceUrl: "https://www.lebow.drexel.edu/academics/undergraduate/degrees-and-programs/accelerated-dual-degrees",
    tags: ["经济学", "商科", "加速双学位"],
    scores: { workload: 76, value: 78, difficulty: 74, cost: 72, career: 84, fit: 76 },
  },
  {
    id: "nus-double-degree",
    title: "NUS 双学位/并读学位体系",
    schools: "National University of Singapore",
    discipline: "interdisciplinary",
    workload: "high",
    budget: "high",
    difficulty: "high",
    credential: "Double Degree / Concurrent Degree",
    sourceName: "NUS",
    sourceUrl: "https://www.nus.edu.sg/oam/undergraduate-programmes",
    tags: ["交叉学科", "亚洲顶尖", "多路径"],
    scores: { workload: 58, value: 91, difficulty: 54, cost: 54, career: 90, fit: 82 },
  },
];

const catalogRows = [
  ["purdue-cs-bsms", "计算机科学本硕连读", "Purdue University", "engineering", "medium", "low", "medium", "BS + MS in Computer Science", "Purdue CS", "https://www.cs.purdue.edu/undergraduate/curriculum/bs-ms-program.html", ["工学", "计算机", "本硕"], [76, 82, 70, 86, 88, 78]],
  ["ucsb-cs-bsms", "计算机科学五年本硕", "UC Santa Barbara", "engineering", "medium", "medium", "high", "BS/MS in Computer Science", "UCSB CS", "https://cs.ucsb.edu/education/undergraduate/bsms", ["工学", "计算机", "5年制"], [72, 84, 62, 70, 88, 78]],
  ["northwestern-cs-bsms", "计算机科学 BS/MS", "Northwestern University", "engineering", "medium", "high", "high", "BS + MS in Computer Science", "Northwestern CS", "https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/bs-ms-program/", ["工学", "计算机", "科研"], [72, 86, 60, 56, 88, 80]],
  ["kent-cs-bsms", "计算机科学本硕联合学位", "Kent State University", "engineering", "medium", "low", "medium", "BS + MS in Computer Science", "Kent State", "https://www.kent.edu/cs/combined-bachelorsmasters-programs", ["工学", "计算机", "成本友好"], [78, 76, 72, 86, 82, 76]],
  ["emory-mba-mph", "工商管理 × 公共卫生", "Emory University", "management", "high", "high", "high", "MBA + MPH", "Emory Rollins", "https://sph.emory.edu/academics/degree-programs/dual-degrees/index.html", ["管理学", "公共卫生", "医疗产业"], [58, 88, 58, 48, 90, 82]],
  ["emory-mim-mph", "管理学硕士 × 公共卫生", "Emory University", "management", "medium", "high", "medium", "MSM + MPH", "Emory Rollins", "https://sph.emory.edu/academics/degree-programs/dual-degrees/index.html", ["管理学", "公共卫生", "早期职业"], [72, 82, 68, 54, 84, 80]],
  ["emory-md-mph", "医学博士 × 公共卫生", "Emory University", "medicine", "high", "high", "high", "MD + MPH", "Emory Rollins", "https://sph.emory.edu/academics/degree-programs/dual-degrees/index.html", ["医学", "公共卫生", "临床"], [52, 90, 50, 44, 88, 80]],
  ["emory-msn-mph", "护理硕士 × 公共卫生", "Emory University", "medicine", "high", "medium", "medium", "MSN + MPH", "Emory Rollins", "https://sph.emory.edu/academics/degree-programs/dual-degrees/index.html", ["医学", "护理", "人群健康"], [64, 82, 66, 62, 84, 80]],
  ["emory-jd-mph", "法学博士 × 公共卫生", "Emory University", "law", "high", "high", "high", "JD + MPH", "Emory Rollins", "https://sph.emory.edu/academics/degree-programs/dual-degrees/index.html", ["法学", "健康政策", "合规"], [56, 86, 54, 48, 84, 78]],
  ["emory-mdiv-mph", "神学硕士 × 公共卫生", "Emory University", "philosophy", "medium", "medium", "medium", "MDiv + MPH", "Emory Rollins", "https://sph.emory.edu/academics/degree-programs/dual-degrees/index.html", ["哲学", "伦理", "社区健康"], [74, 76, 70, 60, 74, 82]],
  ["emory-bioethics-mph", "生命伦理 × 公共卫生", "Emory University", "philosophy", "medium", "medium", "medium", "MA Bioethics + MPH", "Emory Rollins", "https://sph.emory.edu/academics/degree-programs/dual-degrees/index.html", ["哲学", "伦理", "健康政策"], [76, 80, 68, 60, 78, 84]],
  ["wustl-mph-mba", "公共卫生 × 工商管理", "Washington University in St. Louis", "management", "high", "high", "high", "MPH + MBA", "WashU Public Health", "https://publichealth.wustl.edu/academics/dual-degrees/", ["管理学", "公共卫生", "医疗管理"], [58, 86, 58, 50, 88, 80]],
  ["wustl-mph-jd", "公共卫生 × 法学博士", "Washington University in St. Louis", "law", "high", "high", "high", "MPH + JD", "WashU Public Health", "https://publichealth.wustl.edu/academics/dual-degrees/", ["法学", "公共卫生", "政策"], [56, 86, 56, 50, 84, 80]],
  ["wustl-mph-msw", "公共卫生 × 社会工作", "Washington University in St. Louis", "law", "medium", "medium", "medium", "MPH + MSW", "WashU Public Health", "https://publichealth.wustl.edu/academics/dual-degrees/", ["法学", "社会服务", "人群健康"], [76, 80, 70, 62, 80, 84]],
  ["stanford-md-mba", "医学博士 × 工商管理", "Stanford University", "medicine", "high", "high", "high", "MD + MBA", "Stanford Medicine", "https://med.stanford.edu/md/mdhandbook/section-4-academics/4-11-dual-degrees.html", ["医学", "管理学", "医疗创新"], [50, 94, 46, 40, 94, 82]],
  ["stanford-md-mph", "医学博士 × 公共卫生", "Stanford University", "medicine", "high", "high", "high", "MD + MPH", "Stanford Medicine", "https://med.stanford.edu/md/mdhandbook/section-4-academics/4-11-dual-degrees.html", ["医学", "公共卫生", "研究"], [52, 92, 48, 42, 88, 82]],
  ["stanford-md-phd", "医学博士 × 博士", "Stanford University", "medicine", "high", "high", "high", "MD + PhD", "Stanford Medicine", "https://med.stanford.edu/md/mdhandbook/section-4-academics/4-11-dual-degrees.html", ["医学", "科研", "长周期"], [40, 96, 42, 44, 90, 78]],
  ["uva-mba-mph", "工商管理 × 公共卫生", "University of Virginia", "management", "high", "high", "high", "MBA + MPH", "UVA Public Health Sciences", "https://med.virginia.edu/phs/education/mph-program/dual-degree-programs/", ["管理学", "公共卫生", "医疗管理"], [60, 84, 60, 52, 86, 78]],
  ["uva-mph-mpp", "公共卫生 × 公共政策", "University of Virginia", "law", "medium", "medium", "medium", "MPH + MPP", "UVA Public Health Sciences", "https://med.virginia.edu/phs/education/mph-program/dual-degree-programs/", ["法学", "政策分析", "健康治理"], [76, 80, 68, 60, 80, 82]],
  ["bu-mba-mph", "工商管理 × 公共卫生", "Boston University", "management", "high", "high", "medium", "MBA + MPH", "Boston University", "https://www.bu.edu/questrom/degree-programs/full-time-mba/health-sector-mba/mba-mph/", ["管理学", "公共卫生", "健康产业"], [62, 84, 64, 52, 86, 78]],
  ["benedictine-mba-mph", "工商管理 × 公共卫生", "Benedictine University", "management", "medium", "medium", "medium", "MBA + MPH", "Benedictine", "https://online.ben.edu/programs/mba-mph-dual-degree", ["管理学", "公共卫生", "在线"], [78, 76, 74, 72, 80, 76]],
  ["unmc-md-mph", "医学博士 × 公共卫生", "University of Nebraska Medical Center", "medicine", "high", "medium", "high", "MD + MPH", "UNMC", "https://www.unmc.edu/publichealth/admissions/programs/dual-degree.html", ["医学", "公共卫生", "临床"], [56, 82, 58, 68, 84, 78]],
  ["unmc-mba-mph", "工商管理 × 公共卫生", "University of Nebraska Medical Center", "management", "medium", "low", "medium", "MBA + MPH", "UNMC", "https://www.unmc.edu/publichealth/admissions/programs/dual-degree.html", ["管理学", "公共卫生", "成本友好"], [76, 78, 70, 82, 82, 76]],
  ["case-mba-mph", "工商管理 × 公共卫生", "Case Western Reserve University", "management", "high", "high", "medium", "MBA + MPH", "Case Western Reserve", "https://case.edu/medicine/publichealth/education/master-public-health/dual-degree-programs", ["管理学", "公共卫生", "城市健康"], [64, 82, 66, 56, 84, 78]],
  ["arizona-mph-mba", "公共卫生 × 工商管理", "University of Arizona", "management", "medium", "medium", "medium", "MPH + MBA", "University of Arizona", "https://publichealth.arizona.edu/academics/dual-degrees", ["管理学", "公共卫生", "西南地区"], [72, 80, 68, 66, 82, 78]],
  ["drexel-accounting-ms", "会计本科 × 会计硕士", "Drexel University LeBow College of Business", "economics", "medium", "medium", "medium", "BSBA + MS Accounting", "Drexel LeBow", "https://www.lebow.drexel.edu/academics/undergraduate/degrees-and-programs/accelerated-dual-degrees", ["经济学", "会计", "加速双学位"], [78, 76, 72, 72, 82, 74]],
  ["drexel-business-analytics-ms", "商科本科 × 商业分析硕士", "Drexel University LeBow College of Business", "economics", "medium", "medium", "medium", "BSBA + MS Business Analytics", "Drexel LeBow", "https://www.lebow.drexel.edu/academics/undergraduate/degrees-and-programs/accelerated-dual-degrees", ["经济学", "商业分析", "数据就业"], [76, 78, 72, 72, 86, 78]],
  ["drexel-finance-ms", "商科本科 × 金融硕士", "Drexel University LeBow College of Business", "economics", "medium", "medium", "medium", "BSBA + MS Finance", "Drexel LeBow", "https://www.lebow.drexel.edu/academics/undergraduate/degrees-and-programs/accelerated-dual-degrees", ["经济学", "金融", "加速"], [76, 78, 72, 72, 84, 76]],
  ["drexel-marketing-ms", "商科本科 × 市场营销硕士", "Drexel University LeBow College of Business", "economics", "medium", "medium", "medium", "BSBA + MS Marketing", "Drexel LeBow", "https://www.lebow.drexel.edu/academics/undergraduate/degrees-and-programs/accelerated-dual-degrees", ["经济学", "营销分析", "品牌增长"], [80, 74, 74, 72, 80, 78]],
  ["yale-mba-mfa", "工商管理 × 艺术硕士", "Yale University", "arts", "high", "high", "high", "MBA + MFA", "Yale SOM", "https://som.yale.edu/programs/mba/joint-degrees", ["艺术学", "管理学", "创意产业"], [58, 88, 58, 46, 82, 88]],
  ["yale-mba-environment", "工商管理 × 环境管理", "Yale University", "management", "high", "high", "high", "MBA + Master of Environmental Management", "Yale SOM", "https://som.yale.edu/programs/mba/joint-degrees", ["管理学", "环境", "可持续商业"], [60, 88, 58, 46, 86, 82]],
  ["yale-mba-divinity", "工商管理 × 神学", "Yale University", "philosophy", "high", "high", "high", "MBA + MDiv / MAR", "Yale SOM", "https://som.yale.edu/programs/mba/joint-degrees", ["哲学", "伦理", "非营利管理"], [62, 84, 60, 46, 76, 84]],
  ["hks-mpp-mba", "公共政策 × 工商管理", "Harvard Kennedy School", "management", "high", "high", "high", "MPP/MPA + MBA", "Harvard Kennedy School", "https://www.hks.harvard.edu/educational-programs/masters-programs/concurrent-degrees", ["管理学", "公共政策", "领导力"], [56, 92, 50, 42, 90, 84]],
  ["hks-mpp-jd", "公共政策 × 法学", "Harvard Kennedy School", "law", "high", "high", "high", "MPP/MPA + JD", "Harvard Kennedy School", "https://www.hks.harvard.edu/educational-programs/masters-programs/concurrent-degrees", ["法学", "公共政策", "治理"], [56, 92, 50, 42, 88, 84]],
  ["hks-mpp-md", "公共政策 × 医学", "Harvard Kennedy School", "medicine", "high", "high", "high", "MPP/MPA + MD", "Harvard Kennedy School", "https://www.hks.harvard.edu/educational-programs/masters-programs/concurrent-degrees", ["医学", "公共政策", "健康治理"], [52, 92, 48, 42, 88, 82]],
  ["columbia-sipa-dual", "国际公共事务双学位体系", "Columbia SIPA", "law", "high", "high", "high", "Dual Degree", "Columbia SIPA", "https://www.sipa.columbia.edu/academics/degree-programs/dual-degrees", ["法学", "国际事务", "政策"], [62, 88, 58, 48, 86, 82]],
  ["columbia-sipa-journalism", "公共事务 × 新闻", "Columbia SIPA × Journalism School", "literature", "high", "high", "high", "MIA/MPA + MS Journalism", "Columbia SIPA", "https://www.sipa.columbia.edu/academics/degree-programs/dual-degrees", ["文学", "新闻", "国际传播"], [60, 86, 58, 48, 82, 86]],
  ["berkeley-mba-mph", "工商管理 × 公共卫生", "UC Berkeley", "management", "high", "high", "high", "MBA + MPH", "Berkeley Haas", "https://mba.haas.berkeley.edu/academics/concurrent-degree-programs/mba-mph", ["管理学", "公共卫生", "湾区资源"], [58, 90, 54, 46, 90, 82]],
  ["georgetown-msfs-mba", "外交服务 × 工商管理", "Georgetown University", "management", "high", "high", "high", "MSFS + MBA", "Georgetown SFS", "https://sfs.georgetown.edu/academics/graduate-programs/msfs/joint-degrees/", ["管理学", "国际关系", "全球商业"], [60, 86, 60, 50, 86, 82]],
  ["georgetown-msfs-jd", "外交服务 × 法学", "Georgetown University", "law", "high", "high", "high", "MSFS + JD", "Georgetown SFS", "https://sfs.georgetown.edu/academics/graduate-programs/msfs/joint-degrees/", ["法学", "国际关系", "外交"], [58, 86, 58, 50, 84, 82]],
  ["umich-mba-msi", "工商管理 × 信息科学", "University of Michigan", "management", "high", "high", "high", "MBA + MSI", "Michigan Ross", "https://michiganross.umich.edu/graduate/full-time-mba/dual-degrees", ["管理学", "信息科学", "产品战略"], [62, 88, 58, 50, 90, 84]],
  ["umich-mba-msw", "工商管理 × 社会工作", "University of Michigan", "management", "high", "high", "medium", "MBA + MSW", "Michigan Ross", "https://michiganross.umich.edu/graduate/full-time-mba/dual-degrees", ["管理学", "社会创新", "公益组织"], [66, 82, 64, 50, 80, 84]],
  ["penn-mba-ma-education", "工商管理 × 教育学", "University of Pennsylvania", "education", "high", "high", "high", "MBA + MA Education", "Wharton", "https://mba.wharton.upenn.edu/dual-degree-programs/", ["教育学", "管理学", "教育科技"], [60, 90, 54, 44, 86, 84]],
  ["penn-mba-msw", "工商管理 × 社会政策", "University of Pennsylvania", "management", "high", "high", "high", "MBA + MSW", "Wharton", "https://mba.wharton.upenn.edu/dual-degree-programs/", ["管理学", "社会政策", "影响力投资"], [62, 86, 56, 44, 82, 84]],
  ["uw-mpa-mph", "公共管理 × 公共卫生", "University of Washington", "law", "medium", "medium", "medium", "MPA + MPH", "UW Evans", "https://evans.uw.edu/academic-programs/masters-degrees/concurrent-degrees/", ["法学", "公共管理", "健康政策"], [76, 80, 68, 64, 82, 82]],
  ["uw-mpa-jd", "公共管理 × 法学", "University of Washington", "law", "high", "medium", "high", "MPA + JD", "UW Evans", "https://evans.uw.edu/academic-programs/masters-degrees/concurrent-degrees/", ["法学", "公共管理", "治理"], [62, 82, 58, 62, 82, 80]],
  ["cornell-mba-mha", "工商管理 × 医疗管理", "Cornell University", "management", "high", "high", "high", "MBA + MHA", "Cornell Johnson", "https://www.johnson.cornell.edu/programs/full-time-mba/two-year-mba/dual-degree-programs/", ["管理学", "医疗管理", "健康产业"], [60, 88, 58, 48, 90, 80]],
];

programs.push(
  ...catalogRows.map(
    ([id, title, schools, discipline, workload, budget, difficulty, credential, sourceName, sourceUrl, tags, scoreList]) => ({
      id,
      title,
      schools,
      discipline,
      workload,
      budget,
      difficulty,
      credential,
      sourceName,
      sourceUrl,
      tags,
      scores: {
        workload: scoreList[0],
        value: scoreList[1],
        difficulty: scoreList[2],
        cost: scoreList[3],
        career: scoreList[4],
        fit: scoreList[5],
      },
    }),
  ),
);

const state = {
  filters: { discipline: "all", workload: "all", budget: "all", difficulty: "all" },
  weights: Object.fromEntries(dimensions.map((item) => [item.key, item.weight])),
  sort: "match",
  compare: ["duke-kunshan-undergrad", "mit-lgo", "nyu-jd-mpa"],
};

const careerMajors = [
  { id: "cs", label: "计算机科学" },
  { id: "finance", label: "金融学" },
  { id: "biology", label: "生物科学" },
  { id: "design", label: "设计学" },
  { id: "policy", label: "公共政策" },
];

const careerFields = [
  { id: "medicine", label: "医学/生物", x: 720, y: 100 },
  { id: "finance", label: "金融", x: 790, y: 255 },
  { id: "law", label: "法学/政策", x: 720, y: 420 },
  { id: "design", label: "设计/传媒", x: 460, y: 455 },
  { id: "education", label: "教育", x: 190, y: 420 },
  { id: "environment", label: "环境/城市", x: 110, y: 255 },
  { id: "humanities", label: "人文伦理", x: 190, y: 100 },
];

const careerPaths = {
  cs: {
    medicine: {
      title: "计算机科学 × 医学/生物",
      summary: "多模态医疗影像融合、AI 辅助诊断、医学知识图谱和临床数据平台，是计算机主修叠加医学/生物方向后的高频路径。",
      directions: ["多模态医疗影像融合", "AI 辅助诊断系统", "临床数据平台工程", "药物发现与生物信息学"],
    },
    finance: {
      title: "计算机科学 × 金融",
      summary: "这条路径适合把算法、系统工程和金融市场理解合在一起，常见落点是量化交易系统、风控引擎和金融数据基础设施。",
      directions: ["量化交易系统", "实时风控与反欺诈", "金融大模型应用", "高频数据工程"],
    },
    law: {
      title: "计算机科学 × 法学/政策",
      summary: "适合关注平台治理、隐私合规、AI 监管和数据安全的学生，技术理解会成为很强的差异化优势。",
      directions: ["AI 合规审计", "隐私计算与数据治理", "平台内容安全", "法律科技产品"],
    },
    design: {
      title: "计算机科学 × 设计/传媒",
      summary: "从工程实现走向体验表达，适合生成式交互、创意工具、游戏技术和数据可视化方向。",
      directions: ["生成式设计工具", "交互式数据可视化", "游戏引擎与实时渲染", "AIGC 内容工作流"],
    },
    education: {
      title: "计算机科学 × 教育",
      summary: "把算法与学习科学结合，落点通常是自适应学习、教育数据挖掘和 AI Tutor 产品。",
      directions: ["AI Tutor", "学习行为分析", "自适应学习系统", "教育产品工程"],
    },
    environment: {
      title: "计算机科学 × 环境/城市",
      summary: "面向气候、能源和城市治理，用数据建模、遥感和智能优化解决复杂系统问题。",
      directions: ["遥感智能解译", "智慧城市调度", "碳排数据平台", "能源优化算法"],
    },
    humanities: {
      title: "计算机科学 × 人文伦理",
      summary: "适合做 AI 伦理、数字人文、知识组织和可信技术研究。",
      directions: ["AI 伦理评估", "数字人文计算", "知识图谱策展", "可信 AI 研究"],
    },
  },
  finance: {
    medicine: {
      title: "金融学 × 医学/生物",
      summary: "可进入医疗投资、保险精算、创新药商业化和健康经济学分析。",
      directions: ["医疗产业投资", "健康险产品定价", "创新药商业分析", "真实世界数据经济评估"],
    },
    finance: {
      title: "金融学 × 金融科技",
      summary: "在金融主修上叠加技术或数据方向，适合资产管理、风控、交易和金融产品策略。",
      directions: ["量化投资研究", "智能投顾", "信用风险模型", "金融数据产品"],
    },
    law: {
      title: "金融学 × 法学/政策",
      summary: "适合做监管科技、跨境合规、金融法务和企业治理。",
      directions: ["监管科技 RegTech", "跨境金融合规", "并购交易支持", "ESG 信息披露"],
    },
    design: {
      title: "金融学 × 设计/传媒",
      summary: "把复杂金融产品讲清楚，适合财富管理体验、财经内容产品和投资者教育。",
      directions: ["财富产品体验", "财经内容策略", "投资者教育平台", "金融品牌增长"],
    },
    education: {
      title: "金融学 × 教育",
      summary: "落点在金融素养教育、职业培训、商业案例产品和学习平台运营。",
      directions: ["金融教育产品", "商业案例研发", "职业培训增长", "课程商业化"],
    },
    environment: {
      title: "金融学 × 环境/城市",
      summary: "绿色金融和可持续投资正在快速扩张，适合关注气候风险与资产定价的学生。",
      directions: ["绿色金融", "气候风险定价", "碳市场研究", "基础设施投融资"],
    },
    humanities: {
      title: "金融学 × 人文伦理",
      summary: "适合金融伦理、公益金融、影响力投资和社会企业方向。",
      directions: ["影响力投资", "金融伦理研究", "公益基金管理", "社会企业融资"],
    },
  },
  biology: {
    medicine: {
      title: "生物科学 × 医学/生物",
      summary: "偏科研与临床转化，适合生物信息、药物发现、转化医学和精准医疗。",
      directions: ["生物信息学", "精准医疗", "药物发现", "临床转化研究"],
    },
    finance: {
      title: "生物科学 × 金融",
      summary: "适合进入医药投研、生命科学基金、商业尽调和创新药估值。",
      directions: ["医药行业研究", "生物技术投资", "创新药估值", "医疗商业尽调"],
    },
    law: {
      title: "生物科学 × 法学/政策",
      summary: "适合生物安全、药政事务、医疗器械注册和知识产权方向。",
      directions: ["药政事务", "生物安全治理", "医疗器械注册", "专利与技术转移"],
    },
    design: {
      title: "生物科学 × 设计/传媒",
      summary: "把科学内容转化为公共传播、科普产品和医疗健康体验。",
      directions: ["医学可视化", "科普内容产品", "健康体验设计", "科研图形传播"],
    },
    education: {
      title: "生物科学 × 教育",
      summary: "可走 STEM 教育、实验课程研发、科学馆项目和在线科学教育。",
      directions: ["STEM 课程设计", "实验教学产品", "科学传播教育", "在线教育内容"],
    },
    environment: {
      title: "生物科学 × 环境/城市",
      summary: "面向生态修复、环境监测、农业生物技术和可持续系统。",
      directions: ["生态数据监测", "农业生物技术", "环境微生物", "生物多样性评估"],
    },
    humanities: {
      title: "生物科学 × 人文伦理",
      summary: "适合生命伦理、科研合规、公众科学沟通和技术社会影响研究。",
      directions: ["生命伦理", "科研诚信合规", "公众科学沟通", "技术社会影响"],
    },
  },
  design: {
    medicine: {
      title: "设计学 × 医学/生物",
      summary: "适合医疗产品体验、康复设备、医学可视化和患者旅程设计。",
      directions: ["医疗交互设计", "康复产品体验", "医学可视化", "患者旅程服务设计"],
    },
    finance: {
      title: "设计学 × 金融",
      summary: "落点在金融产品体验、复杂信息可视化和财富管理服务设计。",
      directions: ["金融 UX", "投资数据可视化", "财富管理体验", "风险提示设计"],
    },
    law: {
      title: "设计学 × 法学/政策",
      summary: "可进入公共服务设计、法律科技体验、合规提示和政策沟通。",
      directions: ["公共服务设计", "法律科技 UX", "政策可视化", "合规交互提示"],
    },
    design: {
      title: "设计学 × 创意科技",
      summary: "适合生成式创意工具、品牌系统、游戏交互和沉浸式媒介。",
      directions: ["生成式创意系统", "品牌设计系统", "沉浸式叙事", "游戏用户体验"],
    },
    education: {
      title: "设计学 × 教育",
      summary: "用设计方法改造学习体验，适合教育产品、课程体验和学习空间。",
      directions: ["学习体验设计", "教育产品 UX", "课程原型设计", "学习空间设计"],
    },
    environment: {
      title: "设计学 × 环境/城市",
      summary: "偏服务设计、城市更新、可持续产品和社区参与。",
      directions: ["城市服务设计", "可持续产品", "社区参与工具", "环境导视系统"],
    },
    humanities: {
      title: "设计学 × 人文伦理",
      summary: "适合设计研究、文化创新、博物馆体验和负责任 AI 交互。",
      directions: ["设计研究", "文化体验创新", "博物馆交互", "负责任 AI 设计"],
    },
  },
  policy: {
    medicine: {
      title: "公共政策 × 医学/生物",
      summary: "重点在健康治理、医保支付、药政监管和公共卫生应急。",
      directions: ["健康政策分析", "医保支付改革", "公共卫生应急", "药政监管"],
    },
    finance: {
      title: "公共政策 × 金融",
      summary: "适合金融监管、绿色金融、财政政策和社会影响投资。",
      directions: ["金融监管", "绿色金融政策", "财政绩效评估", "影响力投资"],
    },
    law: {
      title: "公共政策 × 法学/政策",
      summary: "治理、立法、合规和国际组织是这条路径的核心场景。",
      directions: ["政策评估", "立法研究", "国际组织项目", "合规治理"],
    },
    design: {
      title: "公共政策 × 设计/传媒",
      summary: "把政策转化为公众可理解、可使用的服务与传播。",
      directions: ["政策传播", "公共服务设计", "数据新闻", "公众参与平台"],
    },
    education: {
      title: "公共政策 × 教育",
      summary: "适合教育政策、学校治理、教育公平和学习数据政策。",
      directions: ["教育政策分析", "教育公平项目", "学校治理", "学习数据治理"],
    },
    environment: {
      title: "公共政策 × 环境/城市",
      summary: "面向气候治理、城市更新、交通政策和能源转型。",
      directions: ["气候政策", "城市治理", "交通政策", "能源转型"],
    },
    humanities: {
      title: "公共政策 × 人文伦理",
      summary: "适合科技伦理、公众价值评估和社会风险治理。",
      directions: ["科技伦理治理", "公众价值评估", "社会风险研究", "公共叙事"],
    },
  },
};

const careerState = { major: "cs", field: "medicine" };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function weightedScore(program) {
  const totalWeight = Object.values(state.weights).reduce((sum, value) => sum + Number(value), 0);
  const weighted = dimensions.reduce((sum, dimension) => {
    return sum + program.scores[dimension.key] * Number(state.weights[dimension.key]);
  }, 0);
  return Math.round(weighted / totalWeight);
}

function visiblePrograms() {
  const filtered = programs.filter((program) => {
    return Object.entries(state.filters).every(([key, value]) => value === "all" || program[key] === value);
  });

  return filtered.sort((a, b) => {
    if (state.sort === "career") return b.scores.career - a.scores.career;
    if (state.sort === "cost") return b.scores.cost - a.scores.cost;
    return weightedScore(b) - weightedScore(a);
  });
}

function renderWeights() {
  $("#weights").innerHTML = dimensions
    .map(
      (dimension) => `
        <label class="weight-item">
          <span class="weight-line">
            <span>${dimension.label}</span>
            <span>${state.weights[dimension.key]}%</span>
          </span>
          <input type="range" min="5" max="35" value="${state.weights[dimension.key]}" data-weight="${dimension.key}" />
        </label>
      `,
    )
    .join("");
}

function renderHeroBars(bestProgram) {
  $("#heroScore").textContent = weightedScore(bestProgram);
  $("#heroBars").innerHTML = dimensions
    .map(
      (dimension) => `
        <div class="metric-row">
          <span>${dimension.label}</span>
          <span class="metric-track"><span class="metric-fill" style="width: ${bestProgram.scores[dimension.key]}%"></span></span>
          <span>${bestProgram.scores[dimension.key]}</span>
        </div>
      `,
    )
    .join("");
}

function dots(value) {
  const active = Math.max(1, Math.round(value / 20));
  return `<span class="dot-score" aria-label="${value}分">${Array.from({ length: 5 }, (_, index) => `<span class="${index < active ? "on" : ""}"></span>`).join("")}</span>`;
}

function renderCompare() {
  const selected = state.compare.map((id) => programs.find((program) => program.id === id)).filter(Boolean);
  const columns = selected.slice(0, 3);

  if (!columns.length) {
    $("#compareTable").innerHTML = `<div class="compare-row"><span>暂无项目</span><span>从列表加入对比</span></div>`;
    return;
  }

  const header = `<div class="compare-row"><span>维度</span>${columns
    .map((program) => `<span><strong>${weightedScore(program)}</strong><br>${program.title}</span>`)
    .join("")}</div>`;
  const rows = dimensions
    .slice(0, 4)
    .map(
      (dimension) => `
        <div class="compare-row">
          <span>${dimension.label}</span>
          ${columns.map((program) => dots(program.scores[dimension.key])).join("")}
        </div>
      `,
    )
    .join("");

  $("#compareTable").innerHTML = header + rows;
}

function renderPrograms() {
  const visible = visiblePrograms();
  $("#resultCount").textContent = `找到 ${visible.length} 个项目`;
  if (visible[0]) renderHeroBars(visible[0]);

  $("#programList").innerHTML = visible
    .map((program, index) => {
      const selected = state.compare.includes(program.id);
      return `
        <article class="program-card">
          <div class="rank-badge">${index + 1}</div>
          <div class="program-main">
            <h3>${program.title}</h3>
            <p>${program.schools}</p>
            <p class="credential-line">${program.credential}</p>
            <div class="tag-row">${program.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          </div>
          <div>
            <span class="match-number">${weightedScore(program)}</span>
            <span class="small-label">综合匹配</span>
          </div>
          <div class="mini-metrics">
            <div class="metric-row"><span>职业</span><span class="metric-track"><span class="metric-fill" style="width:${program.scores.career}%"></span></span><span>${program.scores.career}</span></div>
            <div class="metric-row"><span>成本</span><span class="metric-track"><span class="metric-fill" style="width:${program.scores.cost}%"></span></span><span>${program.scores.cost}</span></div>
          </div>
          <div class="card-actions">
            <button type="button" class="${selected ? "selected" : ""}" data-toggle-compare="${program.id}">
              ${selected ? "已加入" : "加入对比"}
            </button>
            <button type="button" data-ask="${program.id}">分析项目</button>
            <a href="${program.sourceUrl}" target="_blank" rel="noreferrer">官网</a>
          </div>
        </article>
      `;
    })
    .join("");

  renderCompare();
}

function nodeMarkup(node, className, radius) {
  if (className.includes("direction-node")) {
    return `
      <g class="graph-node ${className}" data-field="${node.id}" transform="translate(${node.x} ${node.y})">
        <rect class="node-core" x="-78" y="-21" width="156" height="42" rx="8"></rect>
        <text>${node.label}</text>
      </g>
    `;
  }

  return `
    <g class="graph-node ${className}" data-field="${node.id}" transform="translate(${node.x} ${node.y})">
      <circle class="node-halo" r="${radius + 18}"></circle>
      <circle class="node-core" r="${radius}"></circle>
      <text>${node.label}</text>
    </g>
  `;
}

function renderCareerSwitches() {
  $("#majorSwitcher").innerHTML = careerMajors
    .map(
      (major) => `
        <button type="button" class="${careerState.major === major.id ? "active" : ""}" data-major="${major.id}">
          ${major.label}
        </button>
      `,
    )
    .join("");
}

function renderCareerGraph() {
  const activePath = careerPaths[careerState.major][careerState.field];
  const major = careerMajors.find((item) => item.id === careerState.major);
  const center = { id: "major", label: major.label, x: 460, y: 260 };
  const activeField = careerFields.find((field) => field.id === careerState.field);
  const directions = activePath.directions.map((label, index) => ({
    id: `direction-${index}`,
    label,
    x: [560, 640, 520, 665][index] || 590,
    y: [210, 290, 340, 380][index] || 310,
  }));

  const links = careerFields
    .map((field) => {
      const active = field.id === careerState.field ? " active" : "";
      return `<path class="graph-link${active}" d="M ${center.x} ${center.y} C ${center.x + 80} ${center.y - 120}, ${field.x - 100} ${field.y + 90}, ${field.x} ${field.y}"></path>`;
    })
    .join("");

  const directionLinks = directions
    .map(
      (direction) =>
        `<path class="graph-link active" d="M ${activeField.x} ${activeField.y} C ${activeField.x - 18} ${direction.y}, ${direction.x - 60} ${activeField.y}, ${direction.x} ${direction.y}"></path>`,
    )
    .join("");

  $("#careerGraph").innerHTML = `
    <defs>
      <filter id="graphGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="6" result="blur"></feGaussianBlur>
        <feMerge>
          <feMergeNode in="blur"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    ${links}
    ${directionLinks}
    ${careerFields.map((field) => nodeMarkup(field, `field ${field.id === careerState.field ? "active" : ""}`, 54)).join("")}
    ${directions.map((direction) => nodeMarkup(direction, "direction-node active", 43)).join("")}
    ${nodeMarkup(center, "major", 74)}
  `;

  $("#pathTitle").textContent = activePath.title;
  $("#pathSummary").textContent = activePath.summary;
  $("#directionList").innerHTML = activePath.directions
    .map((direction) => `<div class="direction-item">${direction}</div>`)
    .join("");
}

function renderAll() {
  $("#projectTotal").textContent = programs.length;
  renderWeights();
  renderPrograms();
  renderCareerSwitches();
  renderCareerGraph();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function addMessage(role, text) {
  const messages = $("#messages");
  messages.insertAdjacentHTML("beforeend", `<div class="message ${role}">${text}</div>`);
  messages.scrollTop = messages.scrollHeight;
}

function openAdvisor(seed) {
  const advisor = $("#advisor");
  advisor.classList.add("open");
  advisor.setAttribute("aria-hidden", "false");
  if (!$("#messages").children.length) {
    addMessage("ai", "我会根据当前筛选、权重和对比清单给出取舍建议。你可以问职业方向、申请难度或预算优先级。");
  }
  if (seed) {
    $("#advisorInput").value = seed;
    $("#advisorInput").focus();
  }
}

function closeAdvisor() {
  $("#advisor").classList.remove("open");
  $("#advisor").setAttribute("aria-hidden", "true");
}

function localAdvisorReply(question) {
  const top = visiblePrograms()[0];
  const compared = state.compare.map((id) => programs.find((program) => program.id === id)).filter(Boolean);
  const compareText = compared.length
    ? `当前对比清单里，${compared.map((program) => program.title).join("、")} 的差异最大通常在成本与课程负荷。`
    : "先加入 2-3 个项目到对比清单，会更容易看出取舍。";

  if (/预算|钱|学费|成本/.test(question)) {
    return `如果预算优先，可以把“成本友好”权重拉到 25% 以上，再观察排序变化。当前条件下 ${top.title} 的综合匹配较高，但仍建议把奖学金、交换城市生活费和延期毕业风险一起算入总成本。`;
  }
  if (/职业|就业|方向|产品|数据/.test(question)) {
    return `职业导向建议优先看“职业相关”和“课程负荷”的组合。${top.title} 现在排在前面，说明它在目标路径和能力积累之间比较均衡。${compareText}`;
  }
  if (/申请|难度|录取/.test(question)) {
    return `申请难度不要只看录取率，还要看先修课、语言成绩、作品集或科研要求。你可以先筛选“申请难度：中等及以下”，再把学位含金量权重提高，找更稳的组合。`;
  }
  return `我会先看三个信号：你的目标行业、可承受课程强度、预算上限。按当前设置，${top.title} 是最值得深入看的项目；下一步可以比较它和清单中另外两个项目的课程结构与毕业去向。`;
}

$("#filters").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  state.filters = Object.fromEntries(formData.entries());
  renderPrograms();
  showToast("筛选已应用");
});

$("#weights").addEventListener("input", (event) => {
  const key = event.target.dataset.weight;
  if (!key) return;
  state.weights[key] = Number(event.target.value);
  const valueLabel = event.target.closest(".weight-item").querySelector(".weight-line span:last-child");
  valueLabel.textContent = `${event.target.value}%`;
  renderPrograms();
});

$(".segmented").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-sort]");
  if (!button) return;
  state.sort = button.dataset.sort;
  $$(".segmented button").forEach((item) => item.classList.toggle("active", item === button));
  renderPrograms();
});

$("#majorSwitcher").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-major]");
  if (!button) return;
  careerState.major = button.dataset.major;
  if (!careerPaths[careerState.major][careerState.field]) careerState.field = "medicine";
  renderCareerSwitches();
  renderCareerGraph();
});

$("#careerGraph").addEventListener("click", (event) => {
  const node = event.target.closest(".graph-node.field");
  if (!node) return;
  careerState.field = node.dataset.field;
  renderCareerGraph();
});

$("#programList").addEventListener("click", (event) => {
  const compareButton = event.target.closest("[data-toggle-compare]");
  const askButton = event.target.closest("[data-ask]");

  if (compareButton) {
    const id = compareButton.dataset.toggleCompare;
    if (state.compare.includes(id)) {
      state.compare = state.compare.filter((item) => item !== id);
    } else {
      state.compare = [id, ...state.compare].slice(0, 3);
    }
    renderPrograms();
  }

  if (askButton) {
    const program = programs.find((item) => item.id === askButton.dataset.ask);
    openAdvisor(`帮我分析 ${program.title} 是否适合我`);
  }
});

$$("[data-open-advisor]").forEach((button) => button.addEventListener("click", () => openAdvisor()));
$("[data-close-advisor]").addEventListener("click", closeAdvisor);
$("#advisor").addEventListener("click", (event) => {
  if (event.target.id === "advisor") closeAdvisor();
});

$("#advisorForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = $("#advisorInput");
  const question = input.value.trim();
  if (!question) return;
  input.value = "";
  addMessage("user", question);
  window.setTimeout(() => addMessage("ai", localAdvisorReply(question)), 280);
});

$("#clearCompare").addEventListener("click", () => {
  state.compare = [];
  renderPrograms();
  showToast("对比清单已清空");
});

$("#saveSnapshot").addEventListener("click", () => {
  const snapshot = {
    filters: state.filters,
    weights: state.weights,
    compare: state.compare,
    savedAt: new Date().toISOString(),
  };
  localStorage.setItem("dualscope-snapshot", JSON.stringify(snapshot));
  showToast("已保存到当前浏览器");
});

$("#loadSample").addEventListener("click", () => {
  state.filters = { discipline: "interdisciplinary", workload: "all", budget: "all", difficulty: "all" };
  state.compare = ["duke-kunshan-undergrad", "nyu-shanghai-undergrad", "nus-double-degree"];
  Object.entries(state.filters).forEach(([key, value]) => {
    $(`[name="${key}"]`).value = value;
  });
  renderPrograms();
  document.querySelector("#programs").scrollIntoView({ behavior: "smooth" });
});

$("#explainScore").addEventListener("click", () => {
  openAdvisor("综合匹配分是怎么计算的？");
});

renderAll();
