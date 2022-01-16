console.log("myApp");

function getURLyear(){
  //先取得網址字串，假設此頁網址為「diary_test.html?year=2015」
  var url = location.href;

  //再來用去尋找網址列中是否有資料傳遞(QueryString)
  if(url.indexOf('?')!=-1)
  {
      var id = "";
      //在此直接將各自的參數資料切割放進ary中
      var ary = url.split('?')[1].split('&');
      //此時ary的內容為：
      //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'
      
      //下迴圈去搜尋每個資料參數
      for(i=0;i<=ary.length-1;i++)
      {
          //如果資料名稱為id的話那就把他取出來
          if(ary[i].split('=')[0] == 'year')
              id = ary[i].split('=')[1];
      }
      return id;
  }
}

function loadtest(){
    var diaryfile = getURLyear();
    let requestURL = "data/" + diaryfile + ".json";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      const diaryForm = request.response;
      add("container",diaryForm);
    }

}
loadtest();

function add(obj,jsonObj){
    var diaries = jsonObj['diaries'];
    for(i = 0; i < diaries.length; i++) {
        addElement(obj,diaries[i]);
    }
}

function addElement(obj,index) {

	var parent = document.getElementById(obj);
	var diaryBox = document.createElement("div");
	diaryBox.setAttribute("class", "diary");
  diaryBox.setAttribute("id", "jan");
  diaryBox.id=index.month;
  var styleCommand = "position:absolute; left:100px; top:100px; width:100px; height:100px;"
  styleCommand += boxStyle(index.box_type);
  styleCommand += textAlignSet(index.text_align);
  diaryBox.setAttribute("style", styleCommand);
  diaryBox.style.left=index.x * 1.0 + "px";
  diaryBox.style.top=index.y * 1.0 +"px";
  diaryBox.style.width=index.width * 1.0 +"px";
  diaryBox.style.height=index.height * 1.0 +"px";

  var contentBox = document.createElement("div");
  contentBox.setAttribute("style", "position:absolute; left:100px; top:100px; font-size:16.5px;  line-height: 24px; letter-spacing: 1.0px;　");
  contentBox.style.left=index.content_x * 1.0 + "px";
  contentBox.style.top=index.content_y * 1.0 +"px";
  // contentBox.innerHTML = index.content+i;
  contentBox.innerHTML = index.content;
  diaryBox.appendChild(contentBox);

  var dateBox = document.createElement("div");
  dateBox.setAttribute("style", "position:absolute; left:100px; top:100px;  font-family:Noto Sans TC; font-size:30px; letter-spacing: 1.5px;");
  dateBox.style.left=index.date_x * 1.0 + "px";
  dateBox.style.top=index.date_y * 1.0 +"px";
  // dateBox.innerText = index.month + "  " + index.date;
  dateBox.innerText = index.date;
  diaryBox.appendChild(dateBox);

    var h3 = document.createElement("div");
    h3.innerText = index.month + "  " + index.date;
    //diaryBox.innerHTML = index.content+i;
    //diaryBox.appendChild(h3);
	parent.appendChild(diaryBox);
}

function boxStyle(boxType) {
  if(boxType == 1){

    var _style = "";
    return _style
  }else if(boxType == 2){

    var _style = "color:#ffc331;;border-color:#ffc331;";
    return _style
  }else if(boxType == 3){

    var _style = "color:black;border-color:black;background-color: #ffc331;";
    return _style
  }else if(boxType == 4){

    var _style = "color:black;border-color:#ffc331;;background-color: #ffc331;";
    return _style
  }else if(boxType == 5){

    var _style = "border-color:white;";
    return _style
  }

}

function textAlignSet(text_align) {
  if(text_align == 1){

    var _style = "text-align:left;";
    return _style
  }else if(text_align == 2){

    var _style = "text-align:right;";
    return _style
  }else if(text_align == 3){

    var _style = "text-align:center;";
    return _style
  }
}


// window.onload=function ss(){
//     const scrollContainer = document.querySelector("main");

//     scrollContainer.addEventListener("wheel", (evt) => {
//         evt.preventDefault();
//         scrollContainer.scrollLeft += evt.deltaY;
//         console.log("cc");
//     }); 
//     console.log("bb");
// }

$(document).ready(function () {
    $('.toTop').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
        scrollTop: 0,
      }, 700)
    });
    $('nav').on('click','a', function (e) {
      e.preventDefault();
      const anchor = $(this).attr('href');
      console.log($(this));
      console.log($(anchor));
      const linkScroll = $(anchor).offset().left;
      $('html,body').stop().animate({ 
        scrollLeft: linkScroll -43
      },700)
    });
  });