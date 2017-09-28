﻿/**
 * 中文拼音处理javascript库
 */


var pinyinlist = [
	"a","吖呵啊嗄腌锕阿",
	"ai","呆哀哎唉嗌嗳埃嫒挨捱暧爱瑷癌皑矮砹碍艾蔼锿隘霭",
	"an","俺厂埯安岸广庵按揞暗案桉氨犴胺谙铵鞍鹌黯",
	"ang","昂盎肮",
	"ao","傲凹嗷嚣坳奥媪岙廒懊拗敖澳熬獒翱聱螯袄遨鏊鏖骜鳌",
	"ba","8八叭吧坝岜巴扒把拔捌灞爸疤笆粑罢耙芭茇菝跋钯霸靶魃鲅",
	"bai","伯佰呗拜捭掰摆柏白百稗败",
	"ban","伴办半坂扮扳拌搬斑板版班瓣瘢癍绊舨般钣阪颁",
	"bang","傍帮梆棒榜浜磅绑膀蒡蚌谤邦镑",
	"bao","保刨剥包堡孢宝报抱暴曝瀑炮煲爆胞苞葆薄褒褓豹趵雹饱鲍鸨龅",
	"bei","倍北卑呗埤备孛悖悲惫杯焙狈碑碚背臂萆蓓被褙贝辈邶鐾钡陂鞴鹎",
	"ben","坌夯奔本畚笨苯贲锛",
	"beng","嘣崩泵甏甭绷蚌蹦迸",
	"bi","俾匕吡哔埤壁妣婢嬖币庇庳弊弼彼必愎拂敝比毕毖毙泌滗濞狴璧畀痹碧秕秘笔筚箅篦臂舭芘荜荸萆蓖蔽薜裨襞贲跸辟逼避鄙铋闭陛髀鼻",
	"bian","便匾卞变弁忭扁汴煸砭碥窆笾缏编苄蝙褊贬辨辩辫边遍鞭鳊",
	"biao","勺婊彪杓标瘭膘表裱镖镳飑飙飚骠髟鳔",
	"bie","别憋瘪蹩鳖",
	"bin","傧宾彬摈斌槟殡滨濒玢缤膑豳镔髌鬓",
	"bing","丙兵冰屏并摒柄槟炳病禀秉邴饼",
	"bo","亳伯剥勃博卜啵孛帛拨掰搏播擘柏檗泊波渤玻百礴箔簸脖膊般舶菠薄趵跛踣钵钹铂饽驳魄鹁",
	"bu","不卜卟哺埔埠堡布怖捕晡步瓿簿补逋部醭钚钸",
	"ca","嚓拆擦礤",
	"cai","彩才材猜睬菜蔡裁财踩采",
	"can","参孱惨惭掺残灿璨粲蚕餐骖黪",
	"cang","仓伧沧舱苍藏",
	"cao","嘈操曹槽漕糙艚草螬",
	"ce","侧册厕恻测策",
	"cen","参岑涔",
	"ceng","噌层曾蹭",
	"cha","刹叉喳嚓姹察岔差插搽杈查楂槎檫汊猹碴茬茶衩诧锸镲馇",
	"chai","侪差拆柴瘥虿豺钗",
	"chan","产冁单婵孱廛忏掺搀潺澶禅缠羼蒇蝉蟾觇谄谗躔铲镡阐颤馋骣",
	"chang","伥倘倡偿厂唱场娼嫦尝常徜怅惝敞昌昶氅猖畅肠苌菖裳长阊鬯鲳",
	"chao","剿吵嘲巢怊抄晁朝潮炒焯绰耖超钞",
	"che","坼尺彻扯掣撤澈砗车",
	"chen","伧嗔宸尘忱抻晨榇橙沈沉琛碜秤称臣衬谌谶趁辰郴陈龀",
	"cheng","丞乘呈噌城埕塍惩成承撑枨柽橙澄盛瞠秤称程蛏裎诚逞酲铖铛骋",
	"chi","侈傺匙叱吃哧啻嗤坻墀媸尺弛彳持敕斥池炽痴瘛眵笞篪翅耻茌蚩螭褫豉赤踟迟饬驰魑鸱齿",
	"chong","充冲宠崇忡憧涌种舂艟茺虫重铳",
	"chou","丑仇俦帱惆愁抽畴瘳瞅稠筹绸臭踌酬雠",
	"chu","亍储出刍初厨处怵憷搐杵楚楮樗橱滁畜矗础绌蜍褚触蹰躇锄除雏黜",
	"chuai","啜嘬揣搋膪踹",
	"chuan","串传喘巛川椽氚穿舛舡船遄钏",
	"chuang","创幢床怆疮窗闯",
	"chui","吹垂捶棰椎槌炊锤陲",
	"chun","唇春椿淳纯莼蝽蠢醇鹑",
	"chuo","啜戳绰踔辍龊",
	"ci","伺兹刺呲差慈次此瓷疵磁祠糍茈茨词赐辞雌鹚",
	"cong","丛从匆囱枞淙琮璁聪苁葱骢",
	"cou","凑楱腠辏",
	"cu","促卒徂殂猝簇粗蔟蹙蹴酢醋",
	"cuan","撺攒汆爨窜篡蹿镩",
	"cui","催啐崔悴摧榱毳淬璀瘁粹翠脆萃衰隹",
	"cun","存寸忖村皴蹲",
	"cuo","厝嵯挫措搓撮痤瘥矬磋脞蹉锉错鹾",
	"da","哒嗒塔大妲怛打搭沓疸瘩笪答耷褡达靼鞑",
	"dai","代傣呆呔埭大岱带待怠戴歹殆玳甙绐袋贷迨逮骀黛",
	"dan","丹但儋单啖弹惮担掸旦殚氮淡澹疸瘅眈石箪耽聃胆萏蛋诞赕郸",
	"dang","党凼宕当挡档砀荡菪裆谠铛",
	"dao","倒刀到叨导岛帱忉悼捣氘焘盗祷稻纛蹈道",
	"de","地底得德的锝",
	"dei","得",
	"deng","凳噔嶝戥澄灯登瞪磴等簦蹬邓镫",
	"di","低嘀地坻堤娣嫡帝底弟抵提敌柢棣氐涤滴狄的睇砥碲笛第籴绨缔羝翟荻蒂觌诋谛迪递邸镝骶",
	"dia","嗲",
	"dian","丶佃典坫垫奠巅店惦掂殿淀滇点玷电甸癜癫碘簟踮钿阽靛颠",
	"diao","凋刁叼吊掉碉调貂钓铞铫雕鲷鸟",
	"die","佚叠喋垤堞揲爹牒瓞碟耋蝶谍跌踮蹀迭鲽",
	"ding","丁仃叮啶定玎町疔盯碇耵腚订酊钉铤锭顶鼎",
	"diu","丢铥",
	"dong","东侗冬冻动咚垌岽峒恫懂栋氡洞硐胨胴董鸫",
	"dou","兜抖斗痘窦篼蔸蚪读豆逗都陡",
	"du","嘟堵妒度杜椟毒渎渡牍犊独督睹笃肚芏蠹读赌都镀顿髑黩",
	"duan","断椴段煅短端簖缎锻",
	"dui","兑堆对怼憝敦碓镦队",
	"dun","吨囤墩敦沌炖盹盾砘礅趸蹲遁钝镦顿",
	"duo","剁咄哆哚垛堕多夺度惰掇朵柁沲缍舵裰跺踱躲铎驮",
	"e","俄厄呃哦噩垩娥婀屙峨恶愕扼腭苊莪萼蛾讹谔轭遏鄂锇锷阏阿颚额饿鳄鹅鹗",
	"ei","诶",
	"en","嗯恩摁蒽",
	"er","2二佴儿尔洱珥而耳贰迩铒饵鲕鸸",
	"fa","乏伐发垡法珐砝筏罚阀",
	"fan","凡反帆幡梵樊泛烦燔犯畈番矾繁翻范蕃藩蘩贩蹯返钒饭",
	"fang","仿坊妨彷房放方枋纺肪舫芳访邡钫防鲂",
	"fei","匪吠啡妃废悱扉斐榧沸淝狒痱篚绯翡肥肺腓芾菲蜚诽费镄霏非飞鲱",
	"fen","份偾分吩坟奋忿愤棼氛汾瀵焚玢粉粪纷芬酚鲼鼢",
	"feng","丰俸冯凤唪奉封峰枫沣烽疯砜缝葑蜂讽逢酆锋风",
	"fo","佛",
	"fou","否缶",
	"fu","付伏佛俘俯傅凫副匐呋咐复夫妇孚孵富幅幞府弗怫扶抚拂拊敷斧服桴氟浮涪滏父甫砩祓福稃符绂绋缚罘肤脯腐腑腹艴芙芾苻茯莩菔蚨蜉蝠蝮袱覆讣负赋赙赴趺跗辅辐郛釜阜附馥驸鲋鳆麸黻黼",
	"ga","伽咖嘎噶夹尕尜尬旮胳轧钆",
	"gai","丐垓戤改概溉盖芥该赅钙陔",
	"gan","乾坩尴干感擀敢旰杆柑橄泔淦澉甘疳矸秆竿绀肝苷赣赶酐",
	"gang","冈刚岗戆扛杠港筻纲缸罡肛钢",
	"gao","告搞杲槁槔皋睾稿篙糕缟羔膏藁诰郜锆镐高",
	"ge","个仡割各合咯哥哿嗝圪塥屹戈搁搿格歌疙盖硌纥胳膈舸葛虼蛤袼铬镉阁隔革颌骼鬲鸽",
	"gei","给",
	"gen","亘哏根艮茛跟",
	"geng","哽埂庚更梗绠羹耕耿赓颈鲠",
	"gong","供公共功宫工巩弓恭拱攻汞珙红肱蚣觥贡躬龚",
	"gou","佝勾句垢够媾岣彀构枸沟狗笱篝缑苟觏诟购遘钩鞲",
	"gu","估古呱咕嘏固姑孤崮故梏毂汩沽牯牿痼瞽箍罟股臌菇菰蛄蛊觚诂谷贾轱辜酤钴锢雇顾骨鲴鸪鹄鹘鼓",
	"gua","刮剐卦呱寡括挂栝瓜胍褂诖鸹",
	"guai","乖怪拐掴",
	"guan","倌关冠官惯掼棺涫灌盥矜管纶罐莞观贯馆鳏鹳",
	"guang","光咣广桄犷胱逛",
	"gui","傀刽刿匦圭妫宄庋归晷柜桂桧炅炔瑰癸皈硅簋规诡贵跪轨闺鬼鲑鳜龟",
	"gun","棍滚磙绲衮辊鲧",
	"guo","呙国埚崞帼掴果椁涡猓聒虢蜾蝈裹过郭锅馘",
	"ha","哈虾蛤铪",
	"hai","亥咳嗨嘿孩害氦海胲还醢骇骸",
	"han","函含喊寒悍憨憾捍撖撼旱晗汉汗涵瀚焊焓罕翰菡蚶邗邯酣阚韩顸颔鼾",
	"hang","吭夯巷杭沆珩绗航行颃",
	"hao","号嗥嚆嚎壕好昊毫浩濠灏皓耗蒿薅蚝豪貉郝镐颢",
	"he","何劾合吓呵和喝嗬壑曷核河涸盍盒禾纥翮荷菏蚵褐诃貉贺赫阂阖颌鹤",
	"hei","嗨嘿黑",
	"hen","很恨狠痕",
	"heng","亨哼恒桁横珩蘅行衡",
	"hng","哼",
	"hong","哄宏弘泓洪烘红荭蕻薨虹訇讧轰闳鸿黉",
	"hou","侯候厚后吼喉堠後猴瘊篌糇逅骺鲎",
	"hu","乎互冱呼和唬唿囫壶岵弧忽怙惚戏户戽扈护斛核槲沪浒湖滹烀煳狐猢琥瑚瓠祜笏糊胡葫虎蝴觳轷醐鹄鹕鹘鹱",
	"hua","划化华哗桦滑猾画砉花话豁铧骅",
	"huai","划坏徊怀槐淮踝",
	"huan","唤圜奂宦寰幻患换擐桓欢洹浣涣漶焕獾环痪缓缳萑豢还逭郇锾鬟鲩",
	"huang","凰幌徨恍惶慌晃湟潢煌璜癀皇磺篁簧肓荒蝗蟥谎遑隍鳇黄",
	"hui","会卉咴哕喙回堕彗徊徽恚恢悔惠慧挥晖晦桧毁汇洄浍溃灰烩珲秽绘缋茴荟蕙虺蛔蟪讳诙诲贿辉隳麾",
	"hun","婚昏浑混溷珲荤诨阍馄魂",
	"huo","伙劐和嚯夥惑或攉活火祸耠获藿蠖豁货钬锪镬霍",
	"ji","丌乩亟伎佶偈其冀几击剂剞即及叽吉咭哜唧圾基墼奇妓姬嫉季寂寄屐岌嵇嵴己忌急悸戟戢技挤掎既暨期机极棘楫殛汲洎济激犄玑畸畿疾瘠矶祭积稷稽笄笈箕籍系级纪给继绩缉羁肌脊芨芰荠蒺蓟蕺藉虮觊计讥记诘赍跻跽辑迹际集霁革饥骥髻鲚鲫鸡麂齐齑",
	"jia","价伽佳佼侥假剿加嘉嘏夹嫁家岬徼恝戛挟挢搅敫架枷浃湫狡珈甲痂瘕皎矫稼笳绞缴胛脚茄荚葭蛱袈袷角贾跏迦郏钾铗铰镓颊饺驾",
	"jian","件俭健僭兼减剑剪囝坚奸尖建戋戬拣捡搛枧柬检楗槛歼毽浅涧渐湔溅煎牮犍监睑硷碱笕笺简箭缄缣翦肩腱舰艰茧荐菅蒹裥见謇谏谫贱趼践踺蹇鉴锏键间鞯饯鲣鹣",
	"jiang","僵匠奖姜将强桨江洚浆犟疆礓糨绛缰耩茳蒋虹讲豇酱降",
	"jiao","交佼侥僬剿叫噍嚼姣娇峤徼挢搅教敫校椒浇湫焦狡皎矫礁窖绞缴胶脚艽茭蕉蛟觉角跤轿较郊酵醮铰饺骄鲛鹪",
	"jie","介价借偈劫喈嗟姐婕孑家届戒截拮捷接揭杰桀桔楷洁界疖疥皆睫碣秸竭结羯节芥藉蚧街解讦诘诫阶颉骱鲒",
	"jin","仅今劲卺噤堇妗尽巾廑斤晋槿津浸烬瑾矜禁筋紧缙荩衿襟觐谨赆近进金锦靳馑",
	"jing","井京儆兢净刭劲境婧弪径惊憬敬旌景晶泾獍痉睛竞竟粳精经肼胫腈茎荆菁警迳镜阱靓靖静颈鲸",
	"jiong","扃炅炯窘迥",
	"jiu","9久九僦厩咎啾就揪救旧柩桕灸玖疚究纠臼舅赳酒阄韭鬏鸠鹫",
	"ju","且举俱倨具剧句咀局居屦巨惧拒拘据掬枸柜桔椐榉榘橘沮炬犋狙琚疽瞿矩窭聚苣苴莒菊裾讵趄距踞踽车遽醵钜锔锯雎鞠鞫飓驹龃",
	"juan","俊倦卷圈娟捐桊涓狷眷绢蠲鄄锩镌隽鹃",
	"jue","倔决劂厥嗟噘噱嚼孓崛抉掘撅攫桷橛爝爵獗珏矍绝脚蕨觉角觖诀谲蹶镢",
	"jun","俊军君均峻捃浚皲竣筠菌郡钧隽骏麇龟",
	"ka","佧卡咔咖咯喀胩",
	"kai","凯剀垲开忾恺慨揩楷蒈铠锎锴",
	"kan","侃刊勘坎堪嵌戡槛看瞰砍莰阚龛",
	"kang","亢伉康慷扛抗炕糠钪闶",
	"kao","尻拷栲烤犒考铐靠",
	"ke","克刻可呵咳嗑坷壳客岢恪柯棵氪渴溘珂疴瞌磕科稞窠缂苛蚵蝌课轲钶锞颏颗骒髁",
	"ken","啃垦恳肯裉龈",
	"keng","吭坑铿",
	"kong","倥孔崆恐控空箜",
	"kou","口叩寇扣抠眍筘芤蔻",
	"ku","刳哭喾堀库枯窟绔苦裤酷骷",
	"kua","侉垮夸挎胯跨",
	"kuai","会侩哙块快浍狯筷脍蒯郐",
	"kuan","宽款髋",
	"kuang","况匡哐圹夼旷框狂眶矿筐纩诓诳贶邝",
	"kui","亏傀匮喟喹夔奎岿悝愦愧揆暌溃盔睽窥篑聩葵蒉蝰跬逵隗馈馗魁",
	"kun","困坤悃捆昆琨醌锟阃髡鲲",
	"kuo","廓扩括栝蛞适阔",
	"la","剌啦喇垃拉旯瘌砬腊落蓝蜡辣邋",
	"lai","崃徕来涞濑癞睐籁莱赉赖铼",
	"lan","兰婪岚懒拦揽斓栏榄滥漤澜烂篮缆罱蓝褴览谰镧阑",
	"lang","啷廊朗榔浪狼琅稂莨蒗螂郎锒阆",
	"lao","佬劳唠姥崂捞栳涝潦烙牢痨络老耢落酪醪铑铹",
	"le","乐了仂勒叻泐肋鳓",
	"lei","儡勒嘞垒嫘擂檑泪磊类累缧羸耒肋蕾诔酹镭雷",
	"leng","冷塄愣棱楞",
	"li","丽例俐俚俪傈利力励历厉厘吏呖哩唳喱坜娌嫠悝戾李枥栎栗梨沥溧漓澧犁狸猁理璃疠疬痢砺砾礼离立笠篥篱粒粝缡罹苈荔莅莉蓠藓藜蛎蜊蠡詈跞轹逦郦醴里锂隶雳骊鬲鲡鲤鳢鹂黎黧",
	"lia","俩",
	"lian","奁帘廉怜恋敛楝殓涟潋濂炼琏练联脸臁莲蔹蠊裢裣连链镰鲢",
	"liang","两亮俩凉墚晾梁椋粮粱良莨谅踉辆量靓魉",
	"liao","了僚嘹寥寮尥廖撂撩料潦燎獠疗缭聊蓼辽钌镣鹩",
	"lie","冽列劣咧埒捩洌烈猎裂趔躐鬣",
	"lin","临凛吝啉嶙廪懔林檩淋琳瞵磷秘粼膦蔺赁躏辚遴邻霖鳞麟",
	"ling","0令伶凌另呤囹岭拎柃棂棱泠灵玲瓴绫羚翎聆苓菱蛉酃铃陵零领鲮龄",
	"liu","6六刘旒柳榴流浏溜熘琉留瘤硫碌绺遛鎏锍镏陆馏骝鹨",
	"lo","咯",
	"long","咙垄垅弄拢栊泷珑癃砻窿笼聋胧茏陇隆龙",
	"lou","偻喽娄嵝搂楼漏瘘篓耧蒌蝼镂陋露髅",
	"lu","六卢卤噜垆庐录戮掳撸栌橹氇泸渌漉潞炉璐碌禄簏绿胪舻芦蓼虏赂路轳辂辘逯镥陆露颅鲁鲈鸬鹭鹿麓",
	"lu:","侣偻吕屡履律捋旅榈氯滤率稆绿缕膂虑褛铝闾驴",
	"luan","乱卵娈孪峦挛栾滦脔銮鸾",
	"lue:","掠略锊",
	"lun","仑伦囵抡沦纶论轮",
	"luo","倮咯捋摞椤泺洛漯烙猡珞瘰硌箩络罗脶荦萝落螺蠃裸逻锣镙雒骆骡",
	"m","呒",
	"ma","么吗唛嘛妈嬷抹摩杩犸玛码蚂蟆马骂麻",
	"mai","买劢卖埋脉荬迈霾麦",
	"man","埋墁幔慢曼满漫熳瞒缦蔓蛮螨谩镘鞔颟馒鳗",
	"mang","忙氓漭盲硭芒茫莽蟒邙",
	"mao","冒卯峁帽懋旄昴毛泖牦猫瑁瞀矛耄茂茅茆蝥蟊袤貌贸铆锚髦",
	"me","么麽",
	"mei","妹媒媚寐嵋昧枚梅楣每没浼湄煤猸玫眉糜美莓袂谜酶镁镅霉魅鹛",
	"men","们懑扪焖钔门闷",
	"meng","勐孟懵朦梦檬氓猛甍盟瞢礞艋艨萌蒙虻蜢蠓锰",
	"mi","咪嘧宓密幂弥弭敉汨泌猕眯祢秘米糜糸縻脒芈蘼蜜觅谜谧迷醚靡麋",
	"mian","免冕勉娩棉沔渑湎眄眠绵缅腼面黾",
	"miao","喵妙庙描杪淼渺眇瞄秒缈缪苗藐邈鹋",
	"mie","乜咩灭篾蔑蠛",
	"min","岷悯愍抿敏民泯玟珉皿缗苠闵闽鳘黾",
	"ming","冥名命明暝溟盟瞑茗螟酩铭鸣",
	"miu","缪谬",
	"mo","万冒嘿墨嫫寞抹摩摸摹无末模殁没沫漠瘼磨秣耱脉膜茉莫蓦蘑谟貉貊貘镆陌馍魔麽默",
	"mou","侔哞某牟眸缪蛑谋鍪",
	"mu","亩仫募坶墓姆姥幕慕拇暮木模母毪沐牟牡牧目睦穆苜钼",
	"na","南呐呢哪娜拿捺纳肭衲那钠镎",
	"nai","乃佴哪奈奶柰氖耐艿萘鼐",
	"nan","南喃囝囡楠男腩蝻赧难",
	"nang","囊囔攮曩馕",
	"nao","努呶垴孬恼挠淖猱瑙硇脑蛲铙闹",
	"ne","呐呢哪讷",
	"nei","内哪那馁",
	"nen","嫩恁",
	"neng","能",
	"ni","伲你倪匿呢坭妮尼尿怩慝拟旎昵泥溺猊睨祢腻逆铌霓鲵",
	"nian","埝年廿念拈捻撵碾粘蔫辇酿鲇鲶黏",
	"niang","娘酿",
	"niao","嬲尿溺脲茑袅鸟",
	"nie","乜啮嗫孽捏涅聂臬蘖蹑镊镍陧颞",
	"nin","恁您",
	"ning","佞凝咛宁拧柠泞狞甯聍苎",
	"niu","妞忸扭拗牛狃纽钮",
	"nong","侬农哝弄浓脓",
	"nou","耨",
	"nu","努奴孥弩怒胬驽",
	"nu:","女恧衄钕",
	"nuan","暖",
	"nue:","疟虐",
	"nuo","傩喏娜懦挪搦糯诺锘",
	"o","哦喔噢",
	"ou","偶区呕怄欧殴沤瓯耦藕讴鸥",
	"pa","啪帕怕扒杷派爬琶筢耙葩趴钯",
	"pai","俳哌徘拍排派湃牌蒎迫",
	"pan","判叛扳拚攀泮潘爿畔番盘盼磐胖般蟠袢襻蹒",
	"pang","乓庞彷旁滂磅耪胖膀螃逄",
	"pao","刨匏咆庖抛泡炮狍疱脬袍跑",
	"pei","佩呸培帔旆沛胚裴赔辔配醅锫陪霈",
	"pen","喷湓盆",
	"peng","嘭堋彭怦抨捧朋棚澎烹砰硼碰篷膨蓬蟛鹏",
	"pi","丕仳僻劈匹吡否啤噼圮坏坯埤媲屁庀批披擗枇毗淠琵甓疋疲痞癖皮睥砒纰罴脾芘蚍蜱裨譬貔辟邳郫铍陂陴霹鼙",
	"pian","便偏扁片犏篇缏翩胼谝蹁骈骗",
	"piao","剽嘌嫖朴殍漂瓢瞟票缥莩螵飘骠",
	"pie","丿撇氕瞥苤",
	"pin","品姘嫔拚拼榀牝聘苹贫频颦",
	"ping","乒俜冯凭坪娉屏平枰瓶苹萍评鲆",
	"po","叵坡婆攴朴泊泺泼珀皤破笸粕繁迫鄱钋钷陂颇魄",
	"pou","剖掊裒",
	"pu","仆匍噗圃埔堡扑普暴曝朴氆浦溥濮瀑璞脯莆菩葡蒲谱蹼铺镤镨",
	"qi","7七乞亓亟企俟其凄启嘁器圻奇契妻屺岂岐崎弃憩戚旗期杞柒栖桤棋槭欹欺歧气汔汽沏泣淇漆琦琪畦砌碛祁祈祺稽綦綮绮缉耆脐芑芪荠萁萋葺蕲蛴蜞讫起蹊迄颀骐骑鳍麒齐",
	"qia","伽卡恰掐洽葜袷髂",
	"qian","乾仟佥倩前千堑岍嵌悭愆慊扦掮搴椠欠歉浅潜牵犍签箝纤缱肷芊芡茜荨虔褰谦谴迁遣钎钤钱钳铅阡骞鬈黔",
	"qiang","呛墙嫱将强戕戗抢枪樯炝羌羟腔蔷蜣襁跄锖锵镪",
	"qiao","乔侨俏劁壳峤峭巧悄愀憔撬敲桥樵橇瞧硗窍缲翘荞蕉诮谯跷锹雀鞒鞘",
	"qie","且伽切妾怯惬慊挈砌窃箧茄趄郄锲",
	"qin","亲侵勤吣嗪噙寝廑揿擒檎沁溱琴矜禽秦芩芹螓衾覃钦锓",
	"qing","亲倾卿圊庆情擎晴檠氢氰清磬箐綮罄苘蜻謦请轻青顷鲭黥",
	"qiong","琼穷穹筇茕蛩跫邛銎",
	"qiu","丘仇俅囚巯楸求泅湫犰球秋糗虬蚯蝤裘赇逑遒邱酋鳅鼽龟",
	"qu","劬区去取娶屈岖戌曲朐氍渠璩癯瞿磲祛苣蕖蘧蛆蛐蠼衢觑诎趋趣躯阒驱鸲麴黢龋",
	"quan","全券劝圈悛拳权泉犬畎痊筌绻荃蜷诠辁醛铨颧鬈",
	"que","却悫榷炔瘸确缺阕阙雀鹊",
	"qun","群裙逡麇",
	"ran","冉染然燃苒蚺髯",
	"rang","嚷壤攘瓤禳穰让",
	"rao","娆扰桡绕荛饶",
	"re","喏惹热若",
	"ren","人仁仞任刃壬妊忍稔纫荏葚衽认轫韧饪",
	"reng","仍扔",
	"ri","日",
	"rong","冗容嵘戎榕溶熔狨绒肜茸荣蓉蝾融",
	"rou","揉柔糅肉蹂鞣",
	"ru","乳儒入嚅如孺汝洳溽濡缛茹蓐薷蠕褥襦辱铷颥",
	"ruan","朊软阮",
	"rui","枘瑞睿芮蕊蕤蚋锐",
	"run","润闰",
	"ruo","偌弱箬若",
	"sa","仨卅挲撒洒脎萨飒",
	"sai","噻塞思腮赛鳃",
	"san","3三伞叁散毵糁霰馓",
	"sang","丧嗓搡桑磉颡",
	"sao","埽嫂扫搔梢瘙缫缲臊骚鳋",
	"se","啬塞涩瑟穑色铯",
	"sen","森",
	"seng","僧",
	"sha","傻刹厦唼啥嗄挲杀杉歃沙煞痧砂纱莎裟铩霎鲨",
	"shai","晒筛色酾",
	"shan","删剡单善埏姗嬗山扇掸掺擅杉栅汕潸煽珊疝禅缮膳膻舢芟苫蟮衫讪赡跚鄯钐闪陕骟髟鳝",
	"shang","上伤商垧墒尚晌殇汤熵绱裳觞赏",
	"shao","劭勺召哨少捎杓梢潲烧稍筲绍艄芍苕蛸邵鞘韶",
	"she","佘厍奢射慑折摄歙涉滠猞畲社舌舍蛇设赊赦麝",
	"shei","谁",
	"shen","什伸参呻哂娠婶审慎椹沈深渖渗甚申矧砷神糁绅肾胂莘葚蜃诜谂身",
	"sheng","乘剩升圣声嵊晟渑牲生甥盛省眚笙绳胜",
	"shi","世事什仕似使侍势匙十史嗜嘘噬埘士失始实室尸屎峙市师式弑恃拭拾施时是柿殖氏湿炻狮矢石示筮舐莳蓍虱蚀螫视誓识试诗谥豕贳轼适逝酾释铈食饰驶鲥鲺",
	"shou","兽受售守寿手授收熟狩瘦绶艏首",
	"shu","丨书俞倏叔塾墅姝孰属庶恕戍抒摅数暑曙术束枢树梳殊殳毹沭淑漱澍熟疋疏秫竖纾署腧舒菽蔬薯蜀赎输述黍鼠",
	"shua","刷唰耍",
	"shuai","帅摔率甩蟀衰",
	"shuan","拴栓涮闩",
	"shuang","双孀泷爽霜",
	"shui","水睡税说谁",
	"shun","吮瞬舜顺",
	"shuo","妁搠数朔槊烁硕蒴说铄",
	"si","4丝伺似俟兕厕厮厶司咝嗣嘶四姒寺巳思撕斯死汜泗澌祀私笥缌耜肆蛳锶食饲驷鸶",
	"song","凇宋崧嵩忪怂悚松淞竦耸菘讼诵送颂",
	"sou","叟嗖嗽嗾搜擞溲瞍艘薮螋锼飕馊",
	"su","俗僳嗉塑夙宿愫涑溯稣簌粟素缩肃苏蔌觫诉谡速酥",
	"suan","狻算蒜酸",
	"sui","尿岁濉燧眭睢碎祟穗绥荽虽谇遂邃隋随隧髓",
	"sun","孙损榫狲笋荪隼飧",
	"suo","唆唢嗍嗦娑所挲桫梭琐睃索缩羧莎蓑锁",
	"ta","他嗒塌塔她它拓挞榻沓溻漯獭趿踏蹋遢铊闼鳎",
	"tai","台呔太态抬汰泰炱肽胎苔薹跆邰酞钛骀鲐",
	"tan","叹坍坛坦弹忐探摊昙檀毯滩潭澹炭痰瘫碳袒覃谈谭贪郯钽锬镡",
	"tang","倘傥唐堂塘帑搪棠樘汤淌溏烫瑭糖羰耥膛螗螳趟躺醣铴镗饧",
	"tao","叨啕套掏桃洮涛淘滔焘绦萄讨逃陶韬饕鼗",
	"te","忑忒慝特铽",
	"tei","忒",
	"teng","滕疼腾藤誊",
	"ti","体倜剃剔啼嚏屉悌惕提替梯涕绨缇荑裼踢蹄逖醍锑题鹈",
	"tian","佃填天忝恬掭殄添甜田畋腆舔钿阗",
	"tiao","佻挑条眺祧窕笤粜苕蜩调跳迢髫鲦龆",
	"tie","帖萜贴铁餮",
	"ting","亭停厅听婷庭廷挺梃汀烃町艇莛葶蜓铤霆",
	"tong","仝佟侗同嗵垌峒彤恫恸捅桐桶潼痛瞳砼童筒统茼通酮铜",
	"tou","偷头投透钭骰",
	"tu","兔凸吐图土堍屠徒涂秃突荼菟途酴钍",
	"tuan","团彖抟湍疃",
	"tui","忒推煺腿蜕褪退颓",
	"tun","吞囤屯暾氽臀褪豚饨",
	"tuo","乇佗唾坨妥庹托拓拖柁柝椭橐沱砣箨脱舵跎酡铊陀驮驼魄鸵鼍",
	"wa","佤凹哇娃娲挖洼瓦腽蛙袜",
	"wai","外崴歪",
	"wan","万丸剜娩婉完宛弯惋挽晚湾烷玩琬畹皖碗纨绾脘腕芄莞菀蔓蜿豌顽",
	"wang","亡妄尢往忘惘旺望枉汪王网罔芒辋魍",
	"wei","为伟伪位偎卫危味唯喂囗围圩委威娓尉尾崴嵬巍帏帷微惟慰未桅沩洧涠渭潍炜煨猥猬玮畏痿纬维胃艉苇萎葳蔚薇诿谓軎违逶遗闱隈隗韦韪魏鲔",
	"wen","刎吻文汶温璺瘟稳紊纹蚊问闻阌雯",
	"weng","嗡瓮翁蓊蕹",
	"wo","倭卧哦喔幄我挝握斡沃涡渥硪窝肟莴蜗龌",
	"wu","5乌五亡仵伍侮兀务勿午吴吾呜唔圬坞妩婺寤屋巫庑忤怃恶悟戊捂於无晤杌梧武毋污浯焐物牾痦舞芜芴蜈诬误迕邬鋈钨阢雾骛鹉鹜鼯",
	"xi","习僖兮吸唏喜嘻夕奚媳嬉屣希席徙息悉惜戏昔晰曦析栖樨檄欷歙汐洗浠淅溪烯熄熙熹牺犀玺皙矽硒禊禧稀穸粞系细羲翕腊膝舄舾茜菥葸蓰蜥螅蟋袭西觋蹊郗醯铣锡阋隙隰饩鼷",
	"xia","下侠匣厦吓呷唬夏峡暇柙狎狭瑕瘕瞎硖罅虾辖遐霞黠",
	"xian","仙先冼县咸娴嫌宪岘弦掀显暹氙洗涎燹猃献现痫祆筅籼纤线羡腺舷苋莶藓蚬衔见贤跣跹酰铣锨闲限险陷霰馅鲜鹇",
	"xiang","乡享像厢向响巷庠想橡湘相祥箱缃翔芗葙蟓襄详象镶降项飨饷香骧鲞",
	"xiao","削哓哮啸嚣孝宵小崤效晓枭枵校消淆潇硝笑筱箫绡肖萧蛸逍销霄骁魈",
	"xie","些亵偕写勰协卸叶契屑廨懈挟携撷斜械楔榍榭歇泄泻渫瀣燮獬绁缬胁薤蝎蟹血解谐谢躞邂邪鞋颉",
	"xin","信囟寻心忻新昕欣歆芯薪衅辛鑫锌镡馨",
	"xing","兴刑型姓幸形性悻惺擤星杏猩省硎腥荇荥行邢醒陉饧",
	"xiong","兄凶匈汹熊胸芎雄",
	"xiu","休修咻嗅宿岫庥朽溴秀绣羞臭袖貅锈馐髹鸺",
	"xu","勖叙吁嘘圩墟婿序徐恤戌旭栩洫浒溆煦畜盱砉糈絮绪续胥蓄蓿虚许诩酗醑需须顼",
	"xuan","儇券喧宣悬揎旋暄楦泫渲漩炫煊玄璇痃癣眩碹绚萱谖轩选铉镟",
	"xue","削噱学泶穴薛血谑踅雪靴鳕",
	"xun","勋埙寻峋巡巽徇循恂旬曛殉汛洵浔浚熏獯窨荀荤蕈薰训讯询迅逊郇醺驯鲟",
	"ya","丫亚伢匹压呀哑垭娅岈崖押揠桠氩涯牙琊疋痖睚瞧砑芽蚜衙讶轧迓雅鸦鸭",
	"yan","严俨偃兖剡厌厣咽唁堰奄妍嫣宴岩崦延彦恹掩晏檐殷沿淹湮滟演炎烟焉焰焱燕琰盐眼研砚筵罨胭腌艳芫菸蜒衍言谚谳赝郾鄢酽铅闫阉阎阏阽雁颜餍验魇鼹鼽",
	"yang","仰佯养央徉怏恙扬杨样殃氧泱洋漾炀烊疡痒秧羊蛘阳鞅鸯",
	"yao","侥吆咬夭妖姚尧崾幺徭摇曜杳爻珧瑶疟窈窑繇约耀肴腰舀药要谣轺遥邀钥铫陶鳐鹞",
	"ye","业也冶叶咽哗噎夜拽掖揶晔曳椰液烨爷耶腋谒邪邺野铘靥页",
	"yi","1一义乙亦亿仡以仪伊佚佾依倚刈劓医呓咦咿嗌噫圯埸壹夷奕姨宜尾屹峄嶷已异弈弋彝役忆怡怿悒意懿抑挹揖旖易椅欹殪毅沂溢漪熠猗疑疫痍瘗癔益眙矣移绎缢羿翊翌翳翼肄胰臆舣艺艾苡荑薏蚁蛇蛾蜴衣裔议译诒诣谊贻轶迤逸遗邑酏钇铱镒镱颐饴驿黟",
	"yin","印吟吲喑因圻垠堙夤姻寅尹引殷氤洇淫湮烟狺瘾窨胤茚茵荫蚓鄞铟银阴隐霪音饮龈",
	"ying","嘤婴媵嬴应影撄映楹樱滢潆瀛瑛璎瘿盈硬缨罂膺英茔荥荧莹莺萤营萦蓥蝇赢迎郢颍颖鹦鹰",
	"yo","哟唷育",
	"yong","佣俑勇咏喁墉壅庸恿慵拥永泳涌用甬痈臃蛹踊邕镛雍饔鳙",
	"you","优佑侑卣又友右呦囿宥尢尤幼幽忧悠攸有柚油游牖犹猷由疣繇莜莠莸蚰蚴蝣蝤诱邮酉釉铀铕鱿黝鼬",
	"yu","与予于伛余俞俣吁喻圄圉域妤妪娱宇寓尉屿峪嵛庾御愈愉愚揄於昱榆欤欲毓浴淤渔渝煜熨燠狱狳玉瑜瘀瘐盂禹禺窬窳竽粥纡羽聿育腴臾舁舆芋菀萸蓣蔚虞蜮蝓裕觎誉语谀谕谷豫迂逾遇郁钰阈隅雨雩预饫馀驭鬻鱼鹆鹬龉",
	"yuan","元冤原员园圆圜垣垸塬媛怨愿掾援橼沅渊源爰猿瑗眢箢缘芫苑螈袁辕远院鸢鸳鼋",
	"yue","乐刖岳悦曰月栎樾瀹粤约说越跃钥钺阅龠",
	"yun","云允匀员均孕恽愠昀晕殒氲熨狁筠纭耘芸蕴运郓郧酝陨韫韵",
	"za","匝咂咋咱扎拶杂砸",
	"zai","仔再哉在宰崽栽灾甾载",
	"zan","咱拶攒昝暂瓒簪糌赞趱錾",
	"zang","奘脏臧葬藏赃锗驵",
	"zao","凿唣噪早枣澡灶燥皂糟缲藻蚤躁造遭",
	"ze","仄侧则咋啧帻择昃泽笮箦舴责赜迮",
	"zei","贼",
	"zen","怎谮",
	"zeng","增憎曾甑综缯罾赠锃",
	"zha","乍吒咋咤哳喋喳扎揸札柞查栅楂榨渣炸痄眨砟蚱蜡诈轧铡闸齄",
	"zhai","侧债宅寨择摘斋瘵砦祭窄翟",
	"zhan","占展崭战搌斩旃栈毡沾湛盏瞻站粘绽蘸詹谵辗颤",
	"zhang","丈仉仗嫜嶂帐幛张彰掌杖樟涨漳獐璋瘴章胀蟑账鄣长障",
	"zhao","兆召啁嘲找招昭朝棹沼照爪着笊罩肇诏赵钊",
	"zhe","哲折摺柘浙着磔者蔗蛰蜇褶谪赭辄辙这遮锗鹧",
	"zhei","这",
	"zhen","侦圳振斟朕枕桢椹榛浈溱珍甄畛疹真砧祯稹箴缜胗臻蓁诊贞赈轸针镇阵震鸩",
	"zheng","丁争峥帧征徵怔拯挣政整正狰症睁筝蒸证诤郑钲铮鲭",
	"zhi","之侄值制卮只吱咫址埴峙帙帜彘徵志忮执指挚掷摭支旨智枝枳栀栉桎植止殖氏汁治滞炙痔痣直知祉祗秩稚窒絷纸织置职肢胝脂膣至致芝芷蛭蜘觯识豸质贽趾跖踬踯轵轾郅酯陟雉骘鸷黹",
	"zhong","中仲众冢忠忪盅种终肿舯螽衷踵重钟锺",
	"zhou","周咒啁妯宙州帚昼洲皱碡籀粥繇纣绉肘胄舟荮诌轴酎骤",
	"zhu","主伫住侏助嘱属拄术朱杼柱株槠橥注洙渚潴炷烛煮猪珠疰瘃瞩祝竹竺筑箸翥舳苎茱著蛀蛛褚诛诸贮躅逐邾铢铸驻麈",
	"zhua","抓挝爪",
	"zhuai","嘬拽曳转",
	"zhuan","专传啭撰沌砖篆赚转颛馔",
	"zhuang","僮壮奘妆幢庄戆撞桩状装",
	"zhui","坠惴椎缀缒赘追锥隹骓",
	"zhun","准屯窀肫谆",
	"zhuo","倬卓啄拙捉擢斫桌浊浞涿濯灼焯琢着禚缴茁著诼酌镯",
	"zi","仔兹吱呲咨姊姿子字孜孳嵫恣梓淄渍滋滓眦秭笫籽粢紫缁耔自茈觜訾谘赀资趑辎锱髭鲻龇",
	"zong","偬宗总枞棕粽纵综腙踪鬃",
	"zou","奏揍诹走邹鄹陬驺鲰",
	"zu","俎卒族祖租组菹诅足镞阻",
	"zuan","攥纂缵赚躜钻",
	"zui","咀嘴堆最罪蕞觜醉",
	"zun","尊撙樽遵鳟",
	"zuo","佐作做凿唑嘬坐左座怍撮昨柞琢祚笮胙酢阼"
	];
	
	var Character = {};
	
	Character.checkPinyin = function(pinyin) {
		var chars = "abcdefghijklmnopqrstuvwxyz0123456789:";
		for(var i=0; i<pinyin.length; i++) if( chars.indexOf(pinyin.charAt(i))<0) return false;
		return true;
	};
	Character.getPinyinOfChar = function(ch) {
		var count = pinyinlist.length / 2;
		for(var i=0; i<count; i++)
		{
			if( pinyinlist[i*2+1].indexOf(ch)>= 0) return pinyinlist[i*2];
		}
		return ch;
	};
	Character.getPinyinsOfCC = function(ch) {
		var count = pinyinlist.length / 2;
		var result = [];
		for(var i=0; i<count; i++)
		{
			if( pinyinlist[i*2+1].indexOf(ch)>= 0) result.push(pinyinlist[i*2]);
		}
		return result;
	};
	Character.getPinyin = function(chinese,sp){
		if( arguments.length == 1) return this.getPinyin(chinese, "");
		
		var s = "";
		for(var i=0; i<chinese.length; i++) s += ((i==0) ? "" : sp) +this.getPinyinOfChar(chinese.charAt(i));
		return s;
	};
	Character.getPinyin2 = function(chinese){
		var s = "";
		for(var i=0; i<chinese.length; i++){
			s += ((i==0) ? "" : "'");
			var pys = this.getPinyinsOfCC(chinese.charAt(i));
			if(pys.length == 0) s += chinese.charAt(i).toLowerCase();
			else {
				s += pys[0];
				for(var j=1; j<pys.length; j++) s += "|" +pys[j];
			}
		}
		
		return { text: chinese, pinyin: s };
	};
	Character.getPinyin3 = function(chinese){
		var s = "";
		for(var i=0; i<1; i++){
			s += ((i==0) ? "" : "'");
			var pys = this.getPinyinsOfCC(chinese.charAt(i));
			if(pys.length == 0) s += chinese.charAt(i).toLowerCase();
			else {
				s += pys[0];
				for(var j=1; j<pys.length; j++) s += "|" +pys[j];
			}
		}
		
		return { text: chinese, pinyin: s };
	};
	Character.getPinyinText = function(chinese, charSplit, sameSplit){
		var split1 = "";
		var split2 = null;
		if(arguments.length>1 ) split1 = charSplit;
		if(arguments.length>2) split2 = sameSplit;
		
		var s = "";
		var isPrevCC = false;
		
		for(var i=0; i<chinese.length; i++){
			var pys = this.getPinyinsOfCC(chinese.charAt(i));
			if(pys.length == 0) {
				s += chinese.charAt(i);
				isPrevCC = false;
			} else {
				s += (isPrevCC ? split1 : "") + pys[0];
				if( split2 ) {
					for(var j=1; j<pys.length; j++) s += split2 +pys[j];
				}
				isPrevCC = true;
			}
		}
		
		return s;
	};
	Character.createCTextArray = function(ctexts){
		return srcSearchWord;
	};
	Character.testPinyinAbbr = function(chinese, pinyin){
		if(pinyin.length == 0) return true;
		if(chinese.length == 0) return false;
		
		var pys = this.getPinyinsOfCC(chinese.charAt(0));
		for(var i=0; i<pys.length; i++)
		{	
			var len = Math.min(pys[i].length, pinyin.length);
			for(var j=len; j>=1; j--)
			{
				if( (pys[i].substring(0,j) == pinyin.substring(0,j) ) && this.testPinyinAbbr(chinese.substring(1), pinyin.substring(j))) return true;
			}
		}
		return false;
	};
	Character.testPinyinAbbr2 = function(chinese, pinyin){
		for(var i=0; i<chinese.length; i++) if( this.testPinyinAbbr(chinese.substring(i),pinyin) ) return true;
		return false;
	};
	
	Character.testPinyinAbbrByPinyin = function(fullPinyin, pinyin){
		var pyarr = fullPinyin.split("'");
		for(var i=0; i<pyarr.length; i++)
		{
			if(this._testPinyinAbbrByPinyin(pinyin, pyarr, i)) return true;
		}
		return false;
	};
	Character.testPinyinAbbrByPinyin2 = function(fullPinyin, pinyin){
		var pyarr = fullPinyin.split("'");
		for(var i=0; i<1; i++)
		{
			if(this._testPinyinAbbrByPinyin(pinyin, pyarr, i)) return true;
		}
		return false;
	};
	Character._testPinyinAbbrByPinyin = function(pinyin, pyarr, idx){
		if(pinyin.length == 0) return true;
		if(pyarr.length == 0) return false;
		if(idx>=pyarr.length) return false;
		
		var pys = pyarr[idx].split("|");
		for(var i=0; i<pys.length; i++)
		{
			var len = Math.min(pys[i].length, pinyin.length);
			for(var j=len; j>=1; j--)
			{
				if( (pys[i].substring(0,j) == pinyin.substring(0,j) ) && this._testPinyinAbbrByPinyin(pinyin.substring(j), pyarr, (idx+1))) return true;
			}
		}
		return false;
	};
