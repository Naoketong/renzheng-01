const tmp = { 
	data:{
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

    $('.aa-button').on('click',this.AAbutton);
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

    $('body').on('click','#sheng ul li',this.sheng_Li);//省 点击


    $('body').on('click','.xiayibu_a.active',this.xiayibu_a);//第一页下一步
    $('body').on('click','.shangyibu_b',this.shangyibu_b);//第二页上一步
    $('body').on('click','.xiayibu_b',this.xiayibu_b);//第二页下一步
    $('body').on('click','.shangyibu_c',this.shangyibu_c);//第三页上一步

    $('body').on('click','.select-list li',this.selectList_Li);//职业方向 点击


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
  AAbutton:function(){//点击注册
    let html = tmp.createMaskHTML();
    $('body').append(html);
  },
  removeMask:function(){//右上角关闭按钮   
    $('.registration-page_container').remove();
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
  sheng_Li:function(){//省 点击
    let ID = this.getAttribute('id');
    console.log(ID)
    tmp.data.ID = ID; 
    tmp.sheng_shi(); 
  },
  sheng_shi:function(){
    $('.selectFrame.shi ul').remove();

    let val = tmp.data.ID;//有效  
    console.log(val);
    let arr = data_area.child;  
    console.log(arr);
    let sheng_shi = '';
    arr.map((item,data) => {
      if(item.id == val){
        sheng_shi=item;
      }   
    })
    console.log(sheng_shi);

    let cityLiHtml = "";
    sheng_shi.child.forEach(function(data){
      let text = data.name;
      let id = data.id;
      console.log(1);
      let html = `<li id="${id}">${text}</li>`
      cityLiHtml += html;    
    })
    let htmlBB = `
    <ul>${cityLiHtml}</ul>
    `
    $('.selectFrame.shi').append(htmlBB);

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

  gender:function(event){//选择性别
    let ele = `.selectFrame.gender ul`
    $(ele).show();
  },
  genderValue:function(event){//选择性别
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
  selectList_Li:function(){//职业方向 点击
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