const tmp = { 
	data:{
		// data_area:{"id":"1","name":"中国","child":[{"id":"2","name":"北京市","child":[{"id":"36","name":"东城区"},{"id":"37","name":"西城区"},{"id":"40","name":"朝阳区"},{"id":"41","name":"石景山区"},{"id":"42","name":"海淀区"},{"id":"43","name":"门头沟区"},{"id":"44","name":"房山区"},{"id":"45","name":"通州区"},{"id":"46","name":"顺义区"},{"id":"47","name":"昌平区"},{"id":"48","name":"大兴区"},{"id":"49","name":"怀柔区"},{"id":"50","name":"平谷区"},{"id":"51","name":"密云县"},{"id":"52","name":"延庆县"},{"id":"3360","name":"丰台区"}]},{"id":"3","name":"上海市","child":[{"id":"53","name":"黄浦区"},{"id":"55","name":"徐汇区"},{"id":"56","name":"长宁区"},{"id":"57","name":"静安区"},{"id":"58","name":"普陀区"},{"id":"60","name":"虹口区"},{"id":"61","name":"杨浦区"},{"id":"62","name":"闵行区"},{"id":"63","name":"宝山区"},{"id":"64","name":"嘉定区"},{"id":"65","name":"浦东新区"},{"id":"66","name":"金山区"},{"id":"67","name":"松江区"},{"id":"68","name":"青浦区"},{"id":"70","name":"奉贤区"},{"id":"71","name":"崇明县"}]},{"id":"4","name":"天津市","child":[{"id":"72","name":"和平区"},{"id":"73","name":"河东区"},{"id":"74","name":"河西区"},{"id":"75","name":"南开区"},{"id":"76","name":"河北区"},{"id":"77","name":"红桥区"},{"id":"81","name":"东丽区"},{"id":"82","name":"西青区"},{"id":"83","name":"津南区"},{"id":"84","name":"北辰区"},{"id":"85","name":"武清区"},{"id":"86","name":"宝坻区"},{"id":"87","name":"宁河区"},{"id":"88","name":"静海区"},{"id":"89","name":"蓟县"},{"id":"3361","name":"滨海新区"}]},{"id":"5","name":"重庆市","child":[{"id":"90","name":"万州区"},{"id":"91","name":"涪陵区"},{"id":"92","name":"渝中区"},{"id":"93","name":"大渡口区"},{"id":"94","name":"江北区"},{"id":"95","name":"沙坪坝区"},{"id":"96","name":"九龙坡区"},{"id":"97","name":"南岸区"},{"id":"98","name":"北碚区"},{"id":"101","name":"渝北区"},{"id":"102","name":"巴南区"},{"id":"103","name":"黔江区"},{"id":"104","name":"长寿区"},{"id":"105","name":"綦江区"},{"id":"106","name":"潼南区"},{"id":"107","name":"铜梁区"},{"id":"108","name":"大足区"},{"id":"109","name":"荣昌区"},{"id":"110","name":"璧山区"},{"id":"111","name":"梁平县"},{"id":"112","name":"城口县"},{"id":"113","name":"丰都县"},{"id":"114","name":"垫江县"},{"id":"115","name":"武隆县"},{"id":"116","name":"忠县"},{"id":"117","name":"开县"},{"id":"118","name":"云阳县"},{"id":"119","name":"奉节县"},{"id":"120","name":"巫山县"},{"id":"121","name":"巫溪县"},{"id":"122","name":"石柱县"},{"id":"123","name":"秀山县"},{"id":"124","name":"酉阳县"},{"id":"125","name":"彭水县"},{"id":"126","name":"江津区"},{"id":"127","name":"合川区"},{"id":"128","name":"永川区"},{"id":"129","name":"南川区"}]},{"id":"6","name":"河北省","child":[{"id":"130","name":"石家庄市"},{"id":"131","name":"唐山市"},{"id":"132","name":"秦皇岛市"},{"id":"133","name":"邯郸市"},{"id":"134","name":"邢台市"},{"id":"135","name":"保定市"},{"id":"136","name":"张家口市"},{"id":"137","name":"承德市"},{"id":"138","name":"沧州市"},{"id":"139","name":"廊坊市"},{"id":"140","name":"衡水市"}]},{"id":"7","name":"山西省","child":[{"id":"141","name":"太原市"},{"id":"142","name":"大同市"},{"id":"143","name":"阳泉市"},{"id":"144","name":"长治市"},{"id":"145","name":"晋城市"},{"id":"146","name":"朔州市"},{"id":"147","name":"晋中市"},{"id":"148","name":"运城市"},{"id":"149","name":"忻州市"},{"id":"150","name":"临汾市"},{"id":"151","name":"吕梁市"}]},{"id":"8","name":"内蒙古","child":[{"id":"152","name":"呼和浩特市"},{"id":"153","name":"包头市"},{"id":"154","name":"乌海市"},{"id":"155","name":"赤峰市"},{"id":"156","name":"通辽市"},{"id":"157","name":"鄂尔多斯市"},{"id":"158","name":"呼伦贝尔市"},{"id":"159","name":"巴彦淖尔市"},{"id":"160","name":"乌兰察布市"},{"id":"161","name":"兴安盟"},{"id":"162","name":"锡林郭勒盟"},{"id":"163","name":"阿拉善盟"}]},{"id":"9","name":"辽宁省","child":[{"id":"164","name":"沈阳市"},{"id":"165","name":"大连市"},{"id":"166","name":"鞍山市"},{"id":"167","name":"抚顺市"},{"id":"168","name":"本溪市"},{"id":"169","name":"丹东市"},{"id":"170","name":"锦州市"},{"id":"171","name":"营口市"},{"id":"172","name":"阜新市"},{"id":"173","name":"辽阳市"},{"id":"174","name":"盘锦市"},{"id":"175","name":"铁岭市"},{"id":"176","name":"朝阳市"},{"id":"177","name":"葫芦岛市"}]},{"id":"10","name":"吉林省","child":[{"id":"178","name":"长春市"},{"id":"179","name":"吉林市"},{"id":"180","name":"四平市"},{"id":"181","name":"辽源市"},{"id":"182","name":"通化市"},{"id":"183","name":"白山市"},{"id":"184","name":"松原市"},{"id":"185","name":"白城市"},{"id":"186","name":"延边"}]},{"id":"11","name":"黑龙江省","child":[{"id":"187","name":"哈尔滨市"},{"id":"188","name":"齐齐哈尔市"},{"id":"189","name":"鸡西市"},{"id":"190","name":"鹤岗市"},{"id":"191","name":"双鸭山市"},{"id":"192","name":"大庆市"},{"id":"193","name":"伊春市"},{"id":"194","name":"佳木斯市"},{"id":"195","name":"七台河市"},{"id":"196","name":"牡丹江市"},{"id":"197","name":"黑河市"},{"id":"198","name":"绥化市"},{"id":"199","name":"大兴安岭地区"}]},{"id":"12","name":"江苏省","child":[{"id":"200","name":"南京市"},{"id":"201","name":"无锡市"},{"id":"202","name":"徐州市"},{"id":"203","name":"常州市"},{"id":"204","name":"苏州市"},{"id":"205","name":"南通市"},{"id":"206","name":"连云港市"},{"id":"207","name":"淮安市"},{"id":"208","name":"盐城市"},{"id":"209","name":"扬州市"},{"id":"210","name":"镇江市"},{"id":"211","name":"泰州市"},{"id":"212","name":"宿迁市"}]},{"id":"13","name":"浙江省","child":[{"id":"213","name":"杭州市"},{"id":"214","name":"宁波市"},{"id":"215","name":"温州市"},{"id":"216","name":"嘉兴市"},{"id":"217","name":"湖州市"},{"id":"218","name":"绍兴市"},{"id":"219","name":"金华市"},{"id":"220","name":"衢州市"},{"id":"221","name":"舟山市"},{"id":"222","name":"台州市"},{"id":"223","name":"丽水市"}]},{"id":"14","name":"安徽省","child":[{"id":"224","name":"合肥市"},{"id":"225","name":"芜湖市"},{"id":"226","name":"蚌埠市"},{"id":"227","name":"淮南市"},{"id":"228","name":"马鞍山市"},{"id":"229","name":"淮北市"},{"id":"230","name":"铜陵市"},{"id":"231","name":"安庆市"},{"id":"232","name":"黄山市"},{"id":"233","name":"滁州市"},{"id":"234","name":"阜阳市"},{"id":"235","name":"宿州市"},{"id":"236","name":"巢湖市"},{"id":"237","name":"六安市"},{"id":"238","name":"亳州市"},{"id":"239","name":"池州市"},{"id":"240","name":"宣城市"}]},{"id":"15","name":"福建省","child":[{"id":"241","name":"福州市"},{"id":"242","name":"厦门市"},{"id":"243","name":"莆田市"},{"id":"244","name":"三明市"},{"id":"245","name":"泉州市"},{"id":"246","name":"漳州市"},{"id":"247","name":"南平市"},{"id":"248","name":"龙岩市"},{"id":"249","name":"宁德市"}]},{"id":"16","name":"江西省","child":[{"id":"250","name":"南昌市"},{"id":"251","name":"景德镇市"},{"id":"252","name":"萍乡市"},{"id":"253","name":"九江市"},{"id":"254","name":"新余市"},{"id":"255","name":"鹰潭市"},{"id":"256","name":"赣州市"},{"id":"257","name":"吉安市"},{"id":"258","name":"宜春市"},{"id":"259","name":"抚州市"},{"id":"260","name":"上饶市"}]},{"id":"17","name":"山东省","child":[{"id":"261","name":"济南市"},{"id":"262","name":"青岛市"},{"id":"263","name":"淄博市"},{"id":"264","name":"枣庄市"},{"id":"265","name":"东营市"},{"id":"266","name":"烟台市"},{"id":"267","name":"潍坊市"},{"id":"268","name":"济宁市"},{"id":"269","name":"泰安市"},{"id":"270","name":"威海市"},{"id":"271","name":"日照市"},{"id":"272","name":"莱芜市"},{"id":"273","name":"临沂市"},{"id":"274","name":"德州市"},{"id":"275","name":"聊城市"},{"id":"276","name":"滨州市"},{"id":"277","name":"菏泽市"}]},{"id":"18","name":"河南省","child":[{"id":"278","name":"郑州市"},{"id":"279","name":"开封市"},{"id":"280","name":"洛阳市"},{"id":"281","name":"平顶山市"},{"id":"282","name":"安阳市"},{"id":"283","name":"鹤壁市"},{"id":"284","name":"新乡市"},{"id":"285","name":"焦作市"},{"id":"286","name":"濮阳市"},{"id":"287","name":"许昌市"},{"id":"288","name":"漯河市"},{"id":"289","name":"三门峡市"},{"id":"290","name":"南阳市"},{"id":"291","name":"商丘市"},{"id":"292","name":"信阳市"},{"id":"293","name":"周口市"},{"id":"294","name":"驻马店市"}]},{"id":"19","name":"湖北省","child":[{"id":"295","name":"武汉市"},{"id":"296","name":"黄石市"},{"id":"297","name":"十堰市"},{"id":"298","name":"宜昌市"},{"id":"299","name":"襄樊市"},{"id":"300","name":"鄂州市"},{"id":"301","name":"荆门市"},{"id":"302","name":"孝感市"},{"id":"303","name":"荆州市"},{"id":"304","name":"黄冈市"},{"id":"305","name":"咸宁市"},{"id":"306","name":"随州市"},{"id":"307","name":"恩施土家族苗族自治州"},{"id":"308","name":"仙桃市"},{"id":"309","name":"潜江市"},{"id":"310","name":"天门市"},{"id":"311","name":"神农架林区"}]},{"id":"20","name":"湖南省","child":[{"id":"312","name":"长沙市"},{"id":"313","name":"株洲市"},{"id":"314","name":"湘潭市"},{"id":"315","name":"衡阳市"},{"id":"316","name":"邵阳市"},{"id":"317","name":"岳阳市"},{"id":"318","name":"常德市"},{"id":"319","name":"张家界市"},{"id":"320","name":"益阳市"},{"id":"321","name":"郴州市"},{"id":"322","name":"永州市"},{"id":"323","name":"怀化市"},{"id":"324","name":"娄底市"},{"id":"325","name":"湘西土家族苗族自治州"}]},{"id":"21","name":"广东省","child":[{"id":"326","name":"广州市"},{"id":"327","name":"韶关市"},{"id":"328","name":"深圳市"},{"id":"329","name":"珠海市"},{"id":"330","name":"汕头市"},{"id":"331","name":"佛山市"},{"id":"332","name":"江门市"},{"id":"333","name":"湛江市"},{"id":"334","name":"茂名市"},{"id":"335","name":"肇庆市"},{"id":"336","name":"惠州市"},{"id":"337","name":"梅州市"},{"id":"338","name":"汕尾市"},{"id":"339","name":"河源市"},{"id":"340","name":"阳江市"},{"id":"341","name":"清远市"},{"id":"342","name":"东莞市"},{"id":"343","name":"中山市"},{"id":"344","name":"潮州市"},{"id":"345","name":"揭阳市"},{"id":"346","name":"云浮市"}]},{"id":"22","name":"广西","child":[{"id":"347","name":"南宁市"},{"id":"348","name":"柳州市"},{"id":"349","name":"桂林市"},{"id":"350","name":"梧州市"},{"id":"351","name":"北海市"},{"id":"352","name":"防城港市"},{"id":"353","name":"钦州市"},{"id":"354","name":"贵港市"},{"id":"355","name":"玉林市"},{"id":"356","name":"百色市"},{"id":"357","name":"贺州市"},{"id":"358","name":"河池市"},{"id":"359","name":"来宾市"},{"id":"360","name":"崇左市"}]},{"id":"23","name":"海南省","child":[{"id":"361","name":"海口市"},{"id":"362","name":"三亚市"},{"id":"363","name":"五指山市"},{"id":"364","name":"琼海市"},{"id":"365","name":"儋州市"},{"id":"366","name":"文昌市"},{"id":"367","name":"万宁市"},{"id":"368","name":"东方市"},{"id":"369","name":"定安县"},{"id":"370","name":"屯昌县"},{"id":"371","name":"澄迈县"},{"id":"372","name":"临高县"},{"id":"373","name":"白沙黎族自治县"},{"id":"374","name":"昌江黎族自治县"},{"id":"375","name":"乐东黎族自治县"},{"id":"376","name":"陵水黎族自治县"},{"id":"377","name":"保亭黎族苗族自治县"},{"id":"378","name":"琼中黎族苗族自治县"},{"id":"379","name":"西沙群岛"},{"id":"380","name":"南沙群岛"},{"id":"381","name":"中沙群岛的岛礁及其海域"}]},{"id":"24","name":"四川省","child":[{"id":"382","name":"成都市"},{"id":"383","name":"自贡市"},{"id":"384","name":"攀枝花市"},{"id":"385","name":"泸州市"},{"id":"386","name":"德阳市"},{"id":"387","name":"绵阳市"},{"id":"388","name":"广元市"},{"id":"389","name":"遂宁市"},{"id":"390","name":"内江市"},{"id":"391","name":"乐山市"},{"id":"392","name":"南充市"},{"id":"393","name":"眉山市"},{"id":"394","name":"宜宾市"},{"id":"395","name":"广安市"},{"id":"396","name":"达州市"},{"id":"397","name":"雅安市"},{"id":"398","name":"巴中市"},{"id":"399","name":"资阳市"},{"id":"400","name":"阿坝州"},{"id":"401","name":"甘孜州"},{"id":"402","name":"凉山州"}]},{"id":"25","name":"贵州省","child":[{"id":"403","name":"贵阳市"},{"id":"404","name":"六盘水市"},{"id":"405","name":"遵义市"},{"id":"406","name":"安顺市"},{"id":"407","name":"铜仁地区"},{"id":"408","name":"黔西南州"},{"id":"409","name":"毕节地区"},{"id":"410","name":"黔东南州"},{"id":"411","name":"黔南州"}]},{"id":"26","name":"云南省","child":[{"id":"412","name":"昆明市"},{"id":"413","name":"曲靖市"},{"id":"414","name":"玉溪市"},{"id":"415","name":"保山市"},{"id":"416","name":"昭通市"},{"id":"417","name":"丽江市"},{"id":"418","name":"思茅市"},{"id":"419","name":"临沧市"},{"id":"420","name":"楚雄州"},{"id":"421","name":"红河州"},{"id":"422","name":"文山州"},{"id":"423","name":"西双版纳"},{"id":"424","name":"大理"},{"id":"425","name":"德宏"},{"id":"426","name":"怒江"},{"id":"427","name":"迪庆"}]},{"id":"27","name":"西藏","child":[{"id":"428","name":"拉萨市"},{"id":"429","name":"昌都"},{"id":"430","name":"山南"},{"id":"431","name":"日喀则"},{"id":"432","name":"那曲"},{"id":"433","name":"阿里"},{"id":"434","name":"林芝"}]},{"id":"28","name":"陕西省","child":[{"id":"435","name":"西安市"},{"id":"436","name":"铜川市"},{"id":"437","name":"宝鸡市"},{"id":"438","name":"咸阳市"},{"id":"439","name":"渭南市"},{"id":"440","name":"延安市"},{"id":"441","name":"汉中市"},{"id":"442","name":"榆林市"},{"id":"443","name":"安康市"},{"id":"444","name":"商洛市"}]},{"id":"29","name":"甘肃省","child":[{"id":"445","name":"兰州市"},{"id":"446","name":"嘉峪关市"},{"id":"447","name":"金昌市"},{"id":"448","name":"白银市"},{"id":"449","name":"天水市"},{"id":"450","name":"武威市"},{"id":"451","name":"张掖市"},{"id":"452","name":"平凉市"},{"id":"453","name":"酒泉市"},{"id":"454","name":"庆阳市"},{"id":"455","name":"定西市"},{"id":"456","name":"陇南市"},{"id":"457","name":"临夏州"},{"id":"458","name":"甘州"}]},{"id":"30","name":"青海省","child":[{"id":"459","name":"西宁市"},{"id":"460","name":"海东地区"},{"id":"461","name":"海州"},{"id":"462","name":"黄南州"},{"id":"463","name":"海南州"},{"id":"464","name":"果洛州"},{"id":"465","name":"玉树州"},{"id":"466","name":"海西州"}]},{"id":"31","name":"宁夏","child":[{"id":"467","name":"银川市"},{"id":"468","name":"石嘴山市"},{"id":"469","name":"吴忠市"},{"id":"470","name":"固原市"},{"id":"471","name":"中卫市"}]},{"id":"32","name":"新疆","child":[{"id":"472","name":"乌鲁木齐市"},{"id":"473","name":"克拉玛依市"},{"id":"474","name":"吐鲁番地区"},{"id":"475","name":"哈密地区"},{"id":"476","name":"昌吉州"},{"id":"477","name":"博尔州"},{"id":"478","name":"巴音郭楞州"},{"id":"479","name":"阿克苏地区"},{"id":"480","name":"克孜勒苏柯尔克孜自治州"},{"id":"481","name":"喀什地区"},{"id":"482","name":"和田地区"},{"id":"483","name":"伊犁州"},{"id":"484","name":"塔城地区"},{"id":"485","name":"阿勒泰地区"},{"id":"486","name":"石河子市"},{"id":"487","name":"阿拉尔市"},{"id":"488","name":"图木舒克市"},{"id":"489","name":"五家渠市"}]},{"id":"33","name":"台湾省","child":[{"id":"490","name":"台北市"},{"id":"491","name":"高雄市"},{"id":"492","name":"基隆市"},{"id":"493","name":"新竹市"},{"id":"494","name":"台中市"},{"id":"495","name":"嘉义市"},{"id":"496","name":"台南市"},{"id":"497","name":"台北县"},{"id":"498","name":"桃园县"},{"id":"499","name":"新竹县"},{"id":"500","name":"苗栗县"},{"id":"501","name":"台中县"},{"id":"502","name":"彰化县"},{"id":"503","name":"南投县"},{"id":"504","name":"云林县"},{"id":"505","name":"嘉义县"},{"id":"506","name":"台南县"},{"id":"507","name":"高雄县"},{"id":"508","name":"屏东县"},{"id":"509","name":"宜兰县"},{"id":"510","name":"花莲县"},{"id":"511","name":"台东县"},{"id":"512","name":"澎湖县"},{"id":"513","name":"金门县"},{"id":"514","name":"连江县"}]},{"id":"34","name":"香港","child":[{"id":"515","name":"中西区"},{"id":"516","name":"东区"},{"id":"517","name":"南区"},{"id":"518","name":"湾仔区"},{"id":"519","name":"九龙城区"},{"id":"520","name":"观塘区"},{"id":"521","name":"深水埗区"},{"id":"522","name":"黄大仙区"},{"id":"523","name":"油尖旺区"},{"id":"524","name":"离岛区"},{"id":"525","name":"葵青区"},{"id":"526","name":"北区"},{"id":"527","name":"西贡区"},{"id":"528","name":"沙田区"},{"id":"529","name":"大埔区"},{"id":"530","name":"荃湾区"},{"id":"531","name":"屯门区"},{"id":"532","name":"元朗区"}]},{"id":"35","name":"澳门","child":[{"id":"533","name":"花地玛堂区"},{"id":"534","name":"市圣安多尼堂区"},{"id":"535","name":"大堂区"},{"id":"536","name":"望德堂区"},{"id":"537","name":"风顺堂区"},{"id":"538","name":"嘉模堂区"},{"id":"539","name":"圣方济各堂区"}]},{"id":"3358","name":"钓鱼岛","child":[{"id":"3359","name":"钓鱼岛"}]}]},
		
		gender:'保密',
    sex: '男',
    nianji:'你所在的年级',
    provice:'省',
    city:'市',
    career_status:0,    //职业状态,1-学生、2-在职、3-待业
		proviceValue:0,
    provice_id:0,       //省
    city_id:0,          //市

    career_type:"",      //职业类型,学生:初中、高中、大学;在职:产品、前端、后端;
    work_experience:0,  //工作年限
    school_year_enter:0,//入学年份

    ID:0,
    ida:0,
    

    // careerDirection:[],
    // directionLevel:[],
   
	},
  career_interest:"114-121|115-124",
  interestArr:[],//临时存放点
  //职业方向选择
  InterestData:[{
    item_id: 114,
    name: 'Web 前端工程师'
  },{
    item_id: 115,
    name: 'Python Web 工程师'
  },{
    item_id: 116,
    name: 'GO 语言工程师'
  },{
    item_id: 117,
    name: 'Java Web 工程师'
  },{
    item_id: 118,
    name: 'PHP 工程师'
  },{
    item_id: 119,
    name: 'Android 开发工程师'
  },{
    item_id: 120,
    name: 'iOS 开发工程师'
  }],
 
	init:function(){
		this.bind();
	},
   
	bind:function(){
    $('.showMask').on('click',this.showMask);//点击注册
		$('body').on('click','.register-close-button',this.removeMask);//右上角关闭按钮	
		
    //打开选择框
    $('body').on('click','.selectFrame.gender button',this.gender);//选择性别
    $('body').on('click','.selectFrame.sheng button',this.sheng);//省
    $('body').on('click','.selectFrame.shi button',this.shi);//市
    $('body').on('click','#nianji button',this.gradeClass);//你所在年级
    $('body').on('click','#ruxue button',this.study);//入学年份
    $('body').on('click','#zhiye button',this.job);//你所从事的职业
    $('body').on('click','#nianfen button',this.jobYear);//你所从事的年份
  
    //关闭选择框
    $('body').on('click','.selectFrame.gender ul li',this.genderValue);//选择性别
    $('body').on('click','.selectFrame.sheng ul li',this.shengValue);//省
    $('body').on('click','.selectFrame.shi ul li',this.shiValue);//市
    $('body').on('click','#nianji ul li',this.gradeClassValue);//你所在年级
    $('body').on('click','#ruxue ul li',this.studyValue);//入学年份
    $('body').on('click','#zhiye ul li',this.jobValue);//你所从事的职业
    $('body').on('click','#nianfen ul li',this.jobYearValue);//你所从事的年份


    $('body').on('click','.state-item',this.getStatusValue);//下面三个选择项
     // $('body').on('click','.selectFrame',this.cityLiHtml); //市 内容 最后搞

    $('body').on('click','#sheng ul li',this.sheng_Li);


    $('body').on('click','.xiayibu_a.active',this.xiayibu_a);//第一页下一步
    $('body').on('click','.shangyibu_b',this.shangyibu_b);//第二页上一步
    $('body').on('click','.xiayibu_b',this.xiayibu_b);//第二页下一步
    $('body').on('click','.shangyibu_c',this.shangyibu_c);//第三页上一步

    // $('body').on('click','.select-list li',this.selectList_Li);


    $('body').on('click','.self-assessment-items',this.assessment_Li);

    $('body').on('click','.sqrz_c',this.sqrz_c);//申请绑定
    $('body').on('click','.binding-button',this.bindingButton);//绑定手机.

    $('body').on('click','.binding-Dynamiccode',this.getMobileCode);
    $('body').on('click','.activeButton',this.activeButton);
    $('body').on('click','.binding-phone',this.bindingPhone);
    $('body').on('click','.accomplish-bth',this.accomplishBth);//最后  马上去学习


   
    
          
	},
  showMask:function(){//点击注册
    let html = tmp.createMaskHTML();
    $('body').append(html);

  },
  removeMask:function(){//右上角关闭按钮   
    $('.registration-page_container').remove();
  },
  gender:function(event){
    let ele = `.selectFrame.gender ul`
    $(ele).show();
  },
  genderValue:function(event){
    $(`.selectFrame.gender button`).html($(this).text()).addClass('color333')
    $(`.selectFrame.gender ul`).hide();
  },
  gradeClass:function(){
    let ele = `#nianji ul`
    $(ele).show();
  },
  gradeClassValue:function(){
    $(`#nianji button`).html($(this).text()).addClass('color333')
    $(`#nianji ul`).hide();
  },
  study:function(){
    let ele = `#ruxue ul`
    $(ele).show();
  },
  studyValue:function(){
    $(`#ruxue button`).html($(this).text()).addClass('color333')
    $(`#ruxue ul`).hide();
  },
  job:function(){
    let ele = `#zhiye ul`
    $(ele).show();
  },
  jobValue:function(){
    $(`#zhiye button`).html($(this).text()).addClass('color333')
    $(`#zhiye ul`).hide();
  },
  jobYear:function(){
    let ele = `#nianfen ul`
    $(ele).show();
  },
  jobYearValue:function(){
    $(`#nianfen button`).html($(this).text()).addClass('color333')
    $(`#nianfen ul`).hide();
  },

 


 


  createMaskHTML:function(){//点击注册插入html 第一步
  	let gender = tmp.data.gdender;
    let career_status = tmp.data.career_status;
    let school_year_enter = tmp.data.school_year_enter;
    let work_experience = tmp.data.work_experience;

    let provinceLiHtml = tmp.prohtml();
    let cityLiHtml = tmp.cityLiHtml();//市 内容 最后搞
    let provice_id = tmp.data.provice_id;
    let city_id = tmp.data.city_id;
  	let html = `
  	<div class="registration-page_container">
      <div class="banner-container">
      	<div class="register-section" style="">
          <div class="register-close-button"><i></i></div>  
          <div class="register-head"> 
            <div class="register-align_left">
              <p class="head-title">成为认证学员</p>
              <p class="head-text">成为极客学院认证学员，点亮专属身份标识，免费观看 全站 80% 以上会员课程。</p>
            </div>
            <div class="register-align_right">
              <p class="head-procedure">
                <span id="procedure-01" style="display:inline-block">第1步</span>
                <span id="procedure-02" style="display:none">第2步</span>
                <span id="procedure-03" style="display:none">第3步</span>
                <i>/</i>
                共3步
              </p>
            </div>
          </div>      
         <div class="register-content_one" style="">
            <div class="portrait-section">
              <a href="javascript:;"><img class="portrait-img" src="img/12.png"></a>
              <p class="user-name">小不能够好吧</p>
            </div>
            <div class="portrait-fill">
              <div class="fill-align_top">
                <div class="fill-select">
                  <span>性别：</span>                        
                  <div class="selectFrame gender">
                     <button>${tmp.data.gender}</button>
                     <ul>
                       <li value="男">男</li>
                       <li value="女">女</li>
                       <li value="变性">变性</li>
                     </ul>
                  </div>            
                </div>
                <div class="fill-select">
                  <span>居住地：</span>           
                  <div id="sheng" class="selectFrame sheng">
                    <button>${tmp.data.provice}</button>
                    <ul>${provinceLiHtml}</ul>
                  </div>                      
                  <div id="shi" class="selectFrame shi">
                    <button>${tmp.data.city}</button>
                    <ul>${cityLiHtml}</ul>
                  </div>            
                </div>
              </div>
              <div class="fill-align_middle">
                <p class="state-item-title">您的当前状态 :</p>                            
                <div class="state-item ${career_status == 1 ? 'active' : ''}" value="1" id="xueSheng">学生</div>                            
                <div class="state-item ${career_status == 2 ? 'active' : ''}" value="2" id="zaiZhi">在职</div>
                <div class="state-item ${career_status == 3 ? 'active' : ''}" value="3" id="daiYe">待业</div>
              </div>      

               <div class="fill-align_middle-desc" style=";">             
                <div class="selectFrame fill-detail-item" id="nianji" style="display:${career_status == 1 ? 'inline-block' : 'none'}" >
                    <button value="">${career_status == 1 && career_type ? career_type : '你所在年级'}</button>
                    <ul>
                      <li value="高中以下">高中以下</li>
                      <li value="专科">专科</li>
                      <li value="大学本科">大学本科</li>
                      <li value="研究生及以上">研究生及以上</li>
                     </ul> 
                </div>
                <div class="selectFrame fill-detail-item" id="ruxue" style="display:${career_status == 1 ? 'inline-block' : 'none'}">
                    <button value="">${school_year_enter || '入学年份'}</button>
                    <ul>
                      <li value="2018年">2018年</li>
                    </ul>   
                </div>  
                <div class="selectFrame fill-detail-item" id="zhiye" style="display:${career_status == 2 ? 'inline-block' : 'none'}">
                    <button value="">${career_status == 2 && career_type ? career_type : '你所从事的职业'}</button>
                    <ul>
                      <li value="技术">技术</li>
                      <li value="产品">产品</li>
                      <li value="设计">设计</li>
                      <li value="测试">测试</li>
                      <li value="运营">运营</li>
                      <li value="其他">其他</li>
                    </ul>   
                </div>
                <div class="selectFrame fill-detail-item" id="nianfen" style="display:${career_status == 2 ? 'inline-block' : 'none'}">
                    <button value="">${work_experience || '你所从事的年份'}</button>
                    <ul>
                      <li value="1年以下">1年以下</li>
                      <li value="1-2年">1-2年</li>
                      <li value="3-5年">3-5年</li>
                      <li value="6-10年">6-10年</li>
                      <li value="10年以上">10年以上</li>     
                </div>                
              </div>     
             
              
            </div>
            <div class="fill-align_buttom">
              <a class="next-step_button xiayibu_a" href="javascript:;">下一步</a>
            </div>        
          </div>

          
        </div>
        
      </div>
    </div>`;
			  return html;
        tmp.prohtml();
        tmp.showBtnOne();
  },
  sheng:function(){//省 下拉
    let ele = `#sheng ul`
    $(ele).show();
  },
  shengValue:function(){//省 收起
    $(`#sheng button`).html($(this).text()).addClass('color666')
    $(`#sheng ul`).hide();


   
  },
  shi:function(){//市 下拉
    let ele = `#shi ul`
    $(ele).show();

  },
  shiValue:function(){//市 收起
    $(`#shi button`).html($(this).text()).addClass('color333')
    $(`#shi ul`).hide();
  },
  
  prohtml:function(){//省 内容 最后搞
    let provinceLiHtml = "";
    data_area.child.forEach(function(data){
      let text = data.name;
      let id = data.id;
      let html = `<li id="${id}">${text}</li>`
      provinceLiHtml += html;    
    })

    return provinceLiHtml;
    // console.log(value);

  },
  sheng_Li:function(){
    let ID = this.getAttribute('id');
    console.log(ID)
    tmp.data.ID = ID; 
    tmp.aaa(); 
  },
  aaa:function(){
    $('.selectFrame.shi ul').remove();

    let val = tmp.data.ID;//有效  
    console.log(val)
    let arr = data_area.child;  
    console.log(arr);
    let aaa = '';
    arr.map((item,data) => {
      if(item.id == val){
        aaa=item;
      }   
    })
    console.log(aaa);
    
    let cityLiHtml = "";
    aaa.child.forEach(function(data){
      let text = data.name;
      let id = data.id;
      console.log(1);
      let html = `<li id="${id}">${text}</li>`
      cityLiHtml += html;    
    })
    let bbb = `
    <ul>${cityLiHtml}</ul>
    `
    $('.selectFrame.shi').append(bbb);

  },
 
  cityLiHtml:function(){//市 内容 
    let val = tmp.data.ID;//有效  
    console.log(val)
    let arr = data_area.child;   
    let brr = arr[val];  
    let cityLiHtml = "";
    brr.child.forEach(function(data){
      let text = data.name;
      let id = data.id;
      console.log(1);
      let html = `<li id="${id}">${text}</li>`
      cityLiHtml += html;    
    })
    return cityLiHtml;      
  },


  
  

  
  getStatusValue:function(){  
    let val = this.getAttribute('value');   
    tmp.data.career_status = val;
    $('.state-item').removeClass('active');
    $(this).addClass('active');
    switch(val){
      case '1':
        $('#nianji').show();
        $('#ruxue').show();          
        $('#zhiye').hide();          
        $('#nianfen').hide();
        tmp.data.career_type="";
        tmp.data.work_experience="";
        $('#zhiye button').html('你所从事的职业').removeClass('color333');
        $('#nianfen button').html('工作年限').removeClass('color333');
        break;
      case '2':
        $('#nianji').hide();
        $('#ruxue').hide();          
        $('#zhiye').show();        
        $('#nianfen').show();       
        tmp.data.career_type="";
        tmp.data.school_year_enter="";
        $('#nianji button').html('你所在年级').removeClass('color333');
        $('#ruxue button').html('入学年份').removeClass('color333');
        break;
      case '3':
        $('#nianji').hide();
        $('#ruxue').hide();          
        $('#zhiye').hide();        
        $('#nianfen').hide();     
        tmp.data.career_type="";
        tmp.data.work_experience="";
        tmp.data.school_year_enter="";
        $('#nianji button').html('你所在年级').removeClass('color333');
        $('#ruxue button').html('入学年份').removeClass('color333');
        $('#zhiye button').html('你所从事的职业').removeClass('color;333')
        $('#ruxue button').html('工作年限').removeClass('color333');
        break;
    }
    tmp.showBtnOne();
  },

  showBtnOne:function(){

    let val = tmp.data.career_status;
    // console.log(val);
    if(val){
    $('.next-step_button').addClass('active');
    }

    // let val = tmp.data.career_status;
    // // console.log(val);
    // if(val == '3'){
    // $('.next-step_button').addClass('active');
    // }else if(val == '2'){
    //   if(tmp.data.career_type && tmp.data.work_experience){
    //     $('.next-step_button').addClass('active');
    //   }else{
    //     $('.next-step_button').removeClass('active');
    //   }
    // }else if(val == '1'){
    //   if(tmp.data.career_type && tmp.data.school_year_enter){
    //     $('.next-step_button').addClass('active');
    //   }else{
    //     $('.next-step_button').removeClass('active');
    //   }
    // }
  },
 
  xiayibu_a:function(){//第一页下一步
    $('.register-content_one').css("display","none");
    $('#procedure-01').css("display","none");
    $('#procedure-02').css("display","inline-block");
      let interestArr = [];
      let career_interest_id = [];
      let career_interest = tmp.data.career_interest;
      if(career_interest){
          interestArr = career_interest.split('|');
          career_interest_id = interestArr.map( data => {
              let id = data.split('-')[0];
              id = Number(id);
              return id;
          })
      }
      tmp.interestArr = interestArr;
      let interestHtml = '';
      let InterestData = tmp.InterestData;
      InterestData.forEach(function(data,index){
          let id = data.item_id
          let name = data.name
          let html;
          if(career_interest_id.includes(id)){
              html = `<li value="${id}">${name}</li>`
          }else{
              html = `<li value="${id}"  class="select-item">${name}</li>`
          }
          interestHtml += html
      })

    let htmlArr=`
      <div class="register-content_two" style="">
          <p class="register-select-hint">选择你感兴趣的职业方向（最多可选择 3 项）
            <span>系统将根据您的选择为您推荐合适的课程</span>
          </p>
          <ul class="select-list">
            ${interestHtml}
          </ul>
          <div class="select-align_buttom">
            <a class="select-step_button shangyibu_b" href="javascript:;">上一步</a>
            <a class="select-step_button xiayibu_b" href="javascript:;">下一步</a>
          </div>
        </div>
    `;
     $('.register-section').append(htmlArr);
  },
  selectList_Li:function(){
    console.log(1);
    let val = this.getAttribute('value')
      let tindex = null;
      let text = $(this).text()
      let obj  = `${val}-0`
      let that = $(this)
      let flag= true
        tmp.interestArr.forEach(function(data,index){
           data = data.split("-")[0]
           if(data == val){
              flag = false
              tindex = index
           }
      })
      if(flag){
          let len = tmp.interestArr.length;
           if(len < 3){
              $(this).addClass('active')
            tmp.interestArr.push(obj);
           }
      }else{
           // 再次点击删除相同项目
          tmp.interestArr.splice(tindex,1);
          that.removeClass('active')
       }
      tmp.data.career_interest = tmp.interestArr.join('|');
      // tmp.showBtnThree()
  },
  shangyibu_b:function(){//第二页上一步
    $('.register-content_two').remove();
    $('.register-content_one').css("display","inline-block");
    $('#procedure-02').css("display","none");
    $('#procedure-01').css("display","inline-block");
  },
  xiayibu_b:function(){//第二页下一步
    $('.register-content_two').css("display","none");
    $('#procedure-02').css("display","none");
    $('#procedure-03').css("display","inline-block");

    let itemHtml = '';
     tmp.interestArr.forEach(function(data,index){
        let id = data.split("-")[0]
        let select_id = data.split("-")[1];
        tmp.InterestData.forEach(function(data,index){
          if(id == data.item_id){
            let text = data.name
            let html = `
              <ul class="self-assessment-item">
                <li class="self-items-name">${text}</li>                
                  <li vkey="${id}" class="self-assessment-items ${select_id == 121 ? 'active' : ''}" value="121"><i></i>完全不了解</li>
                  <li vkey="${id}" class="self-assessment-items ${select_id == 122 ? 'active' : ''}" value="122"><i></i>有点了解</li>
                  <li vkey="${id}" class="self-assessment-items ${select_id == 123 ? 'active' : ''}" value="123"><i></i>熟悉</li>
                  <li vkey="${id}" class="self-assessment-items ${select_id == 124 ? 'active' : ''}" value="124"><i></i>精通</li>                           
              </ul>
            `
            itemHtml += html
           }
         })
            })

     let htmlbrr=`
      <div class="register-content_three" style="">
          <p class="self-assessment-hint">您在这些方向上当前的水平如何？
            <span>系统将根据您的选择为您推荐合适的课程</span>
          </p>
          <div class="self-assessment-list">
           ${itemHtml}
          </div>
          <div class="self-assessment-button">
            <a class="self-assessment-bth shangyibu_c" href="javascript:;">上一步</a>
            <a class="self-assessment-bth sqrz_c" href="javascript:;">申请认证</a>
          </div>
        </div>

    `;
     $('.register-section').append(htmlbrr);
  },
  assessment_Li:function(){
    console.log(1);
    let vid = this.getAttribute('vkey')
    let level = this.getAttribute('value')
    let obj = `${vid}-${level}`
    let tindex = null;
    let flag= true
    tmp.interestArr.forEach(function(data,index){
      data = data.split("-")[0]
      if(data == vid){
        flag=false
        tindex = index
      }
    })
    if(flag){
      $(this).parent().children().removeClass('active')
      $(this).addClass('active')
      tmp.interestArr.push(obj); 
    }else{
      tmp.interestArr.splice(tindex,1);
      $(this).parent().children().removeClass('active')
      $(this).addClass('active')
      tmp.interestArr.push(obj);
    }
    let lineIndex = null;
    switch(level){
      case '121':
      lineIndex = 1;
      break;
      case '122':
      lineIndex = 2;
      break;
      case '123':
      lineIndex = 3;
      break;
      case '124':
      lineIndex = 4;
      break;
    }
  },
  shangyibu_c:function(){
    $('.register-content_three').remove();
    $('.register-content_two').css("display","inline-block");
    $('#procedure-03').css("display","none");
    $('#procedure-02').css("display","inline-block");
  },
  sqrz_c:function(){
    $('.register-section').remove();
    let getImgCodeUrl = 'https://huodong.jikexueyuan.com/jike1024/verifyCode';
    let imgCode = getImgCodeUrl+ '?' + new Date().getTime();
    let htmlDrr = `
      <div class="binding-section" style="">
        <div class="register-close-button"><i></i></div>  
        <div class="binding-align-top">
          <h3 class="binding-title">绑定手机 完成认证</h3>
          <p class="binding-text">请您绑定手机防止账号丢失和被盗，手机号可用于登录和找回密码。</p>
        </div>
        <div class="binding-content">
          <div class="binding-input">
            <input class="binding-phone" type="text" placeholder="请输入手机号码">
            <span class="binding-phoneError"></span>
          </div>
          <div class="binding-input">
            <input class="input-verification" type="text" placeholder="验证码">
            <span class="imgError"></span>
            <div class="binding-verification"></div><!-- 验证图 -->
          </div>
          <div class="binding-input">
            <input class="binding-phone" type="text" placeholder="动态码">
            <div class="binding-Dynamiccode">获取动态码</div><!-- 获取动态码获取动态码获取动态码 -->
            <span class="verError"></span>
          </div>
          <div class="binding-button">绑定手机</div>
        </div>
      </div>
    `
    $('.banner-container').html(htmlDrr);
  },

  getMobileCode:function(){

    let tel = $.trim($(".binding-phone").val());
    let img = $.trim($('.input-verification').val());
    if(tel == ''){
      $('.binding-phoneError').text('请输入您的手机号');
    }
    else if(tmp.isMobile(tel) == false){
      $('.binding-phoneError').text('请输入正确的手机号');
    }
    else if(img == ''){
      $('.imgError').text('请输入验证码');
    }
    else{
      $('body').off('click','.binding-Dynamiccode',this.getMobileCode)
      tmp.countDown();
      $('.binding-button').addClass('activeButton');
    }
  },
  isMobile:function(tel){
    return /^((\(\d{2,3}\))|(\d{3}\-))?(1[34578]\d{9})$/.test(tel);
  },
  countDown:function(){
    $('.binding-Dynamiccode').html(59+'秒后重试')
    let t = 59;
    let countDown = setInterval(function(){
      t --;
      $('.binding-Dynamiccode').html(t+'秒后重试')

      if(t ==0){
          clearInterval(countDown)
          $('.binding-Dynamiccode').html('获取动态码')
          $('.body').on('click','.binding-Dynamiccode',tmp.getMobileCode)
      }
    },1000)
  },
  bindingPhone:function(){
    $(this).next('span').text('');
  },
  upDataImgUrl:function(){
    let timenow = new Date().getTime();
    $('.caformImg').attr("src", getImgCodeUrl + '?' + timenow);
  },
  // 绑定手机
  activeButton:function(){
    let tel = $.trim($(".binding-phone").val());
    let code = $.trim($('.binding-phone').val());
    if(tel == ''){
      $('.binding-phoneError').text('请输入您的手机号');
    }
    else if(tmp.isMobile(tel) == false){
      $('.binding-phoneError').text('请输入正确的手机号');
    }
    else if(code == ''){
      $('.verError').text('请输入验证码');
    }
  
  },

  bindingButton:function(){//绑定手机
    $('.binding-section').remove();
    htmlCrr = `
      <div class="accomplish-section" style="">
        <div class="register-close-button"><i></i></div>  
        <div class="accomplish-align-top">
          <div class="accomplish-head"><img src="img/13.png"></div>
          <p class="accomplish-head-name">小不能够好吧</p>
          <p class="accomplish-title">恭喜，完成认证！</p>
          <p class="accomplish-subheading">现在你可以免费观看 80% 以上会员课程</p>
          <a class="accomplish-bth" href="javascript:;">马上去学习 >></a>
        </div>
        <div class="accomplish-content">
          <h4 class="accomplish-recommend">为您推荐如下课程</h4>
          <div class="accomplish-list">
            <p class="accomplish-list-title">职业学院</p>
            <div class="accomplish-item">
              <a href="javascript:;"><img src="img/14.png"></a>
              <p>ython Web 工程师成长计划<br><span>2314 人正在学习</span></p>
            </div>
            <div class="accomplish-item">
              <a href="javascript:;"><img src="img/15.png"></a>
              <p>GO 工程师成长计划<br><span>2314 人正在学习</span></p>
            </div>
          </div>
          <ul class="accomplish-course">
            <li class="accomplish-course-title">会员课程</li>
            <li class="accomplish-course-item"><a href="javascript:;">·Tornado 开发--TCP 编程</a></li>
            <li class="accomplish-course-item"><a href="javascript:;">·开发远程控制程序高级功能</a></li>
            <li class="accomplish-course-item"><a href="javascript:;">·网页控制电脑</a></li>
            <li class="accomplish-course-item"><a href="javascript:;">·Python 类深入</a></li>
            <li class="accomplish-course-item"><a href="javascript:;">·Python 类初步</a></li>
            <li class="accomplish-course-item"><a href="javascript:;">·Python 初级项目：远程操控电脑</a></li>
          </ul>
        </div>
      </div>
    `
    $('.banner-container').append(htmlCrr);
  },


  accomplishBth:function(){//最后  马上去学习
     $('.registration-page_container').remove();
  },
 
}
	tmp.init();